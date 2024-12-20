import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form';

jest.mock('../../hooks/useProducts', () => () => ({
  preferences: ['Preferência A', 'Preferência B'],
  features: ['Funcionalidade X', 'Funcionalidade Y'],
  products: [
    { id: 1, name: 'Produto 1' },
    { id: 2, name: 'Produto 2' }
  ],
}));

jest.mock('../../hooks/useRecommendations', () => () => ({
  getRecommendations: jest.fn().mockReturnValue([{ name: 'Produto 1' }])
}));

describe('Form Component', () => {
  test('Renderiza os campos corretamente', () => {
    render(<Form onSubmit={() => {}} />);
    
    expect(screen.getByTestId('preferences')).toBeInTheDocument();
    expect(screen.getByTestId('features')).toBeInTheDocument();
    expect(screen.getByTestId('recommendation')).toBeInTheDocument();
    
    expect(screen.getByLabelText('Preferência A')).toBeInTheDocument();
    expect(screen.getByLabelText('Preferência B')).toBeInTheDocument();
    
    expect(screen.getByLabelText('Funcionalidade X')).toBeInTheDocument();
    expect(screen.getByLabelText('Funcionalidade Y')).toBeInTheDocument();
  });

  test('Permite selecionar preferências, funcionalidades e tipo de recomendação', () => {
    const onSubmitMock = jest.fn();
    render(<Form onSubmit={onSubmitMock} />);
    
    const prefA = screen.getByLabelText('Preferência A');
    fireEvent.click(prefA);
    expect(prefA).toBeChecked();
    
    const featX = screen.getByLabelText('Funcionalidade X');
    fireEvent.click(featX);
    expect(featX).toBeChecked();
    
    const singleProductRadio = screen.getByTestId('singleProduct');
    fireEvent.click(singleProductRadio);
    expect(singleProductRadio).toBeChecked();
  });

  test('Ao submeter o formulário, chama onSubmit com os dados selecionados', () => {
    const onSubmitMock = jest.fn();

    render(<Form onSubmit={onSubmitMock} />);
    
    fireEvent.click(screen.getByLabelText('Preferência A'));
    fireEvent.click(screen.getByLabelText('Funcionalidade X'));
    fireEvent.click(screen.getByTestId('singleProduct'));
    
    fireEvent.click(screen.getByText('Obter recomendação'));
    
    expect(onSubmitMock).toHaveBeenCalled();
    const callArgs = onSubmitMock.mock.calls[0];
    const formData = callArgs[0];
    const passedGetRecommendations = callArgs[1];
    
    expect(formData.selectedPreferences).toEqual(['Preferência A']);
    expect(formData.selectedFeatures).toEqual(['Funcionalidade X']);
    expect(formData.selectedRecommendationType).toEqual('SingleProduct');
    
    const result = passedGetRecommendations(formData);
    expect(result).toEqual([{ name: 'Produto 1' }]);
  });
});
