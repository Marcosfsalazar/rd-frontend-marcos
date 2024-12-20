import React from 'react';
import { render, screen } from '@testing-library/react';
import RecommendationList from './RecommendationList';

describe('RecommendationList Component', () => {
  test('Exibe mensagem quando não há recomendações', () => {
    render(<RecommendationList recommendations={[]} />);
    expect(screen.getByText('Nenhuma recomendação encontrada.')).toBeInTheDocument();
  });

  test('Exibe a lista de recomendações quando disponíveis', () => {
    const recommendations = [
      { name: 'Produto 1' },
      { name: 'Produto 2' }
    ];
    render(<RecommendationList recommendations={recommendations} />);

    expect(screen.queryByText('Nenhuma recomendação encontrada.')).toBeNull();
    expect(screen.getByText('Produto 1')).toBeInTheDocument();
    expect(screen.getByText('Produto 2')).toBeInTheDocument();
  });
});
