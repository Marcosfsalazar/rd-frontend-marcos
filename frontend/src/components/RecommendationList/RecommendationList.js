import React from 'react';

function RecommendationList({ recommendations }) {
  return (
    <div>
      <h2 className="text-lg mb-4 font-bebas tracking-wider">Lista de Recomendações:</h2>

      {recommendations.length === 0 && <p className='font-light font-body'>Nenhuma recomendação encontrada.</p>}

      <ul className='font-body'>
        {recommendations.map((recommendation, index) => (
          <li key={index} className="mb-2">
            {recommendation.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecommendationList;
