import createRecommendationStrategy from './recommendationFactory';

function getRecommendations(formData, products) {
  const { selectedPreferences = [], selectedFeatures = [], selectedRecommendationType = 'MultipleProducts' } = formData;

  const strategy = createRecommendationStrategy(selectedRecommendationType);
  
  return strategy.getRecommendations(selectedPreferences, selectedFeatures, products);
}

const recommendationService = {
  getRecommendations,
};

export default recommendationService;
