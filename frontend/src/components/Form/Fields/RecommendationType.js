import React from 'react';
import Checkbox from '../../shared/Checkbox';

function RecommendationType({ onRecommendationTypeChange }) {
  return (
    <div className="mb-4" data-testid="recommendation">
      <h2 className="text-lg font-bebas tracking-wider mb-2">Tipo de Recomendação:</h2>
      <div className="flex items-center">
        <Checkbox
          type="radio"
          name="recommendationType"
          value="SingleProduct"
          data-testid="singleProduct"
          onChange={() => onRecommendationTypeChange('SingleProduct')}
          className="mr-2"
        />
        <label htmlFor="SingleProduct" className="mr-4 font-body">Produto Único</label>
        <Checkbox
          type="radio"
          name="recommendationType"
          value="MultipleProducts"
          data-testid="multipleProducts"
          onChange={() => onRecommendationTypeChange('MultipleProducts')}
          className="mr-2"
        />
        <label htmlFor="MultipleProducts">Múltiplos Produtos</label>
      </div>
    </div>
  );
}

export default RecommendationType;
