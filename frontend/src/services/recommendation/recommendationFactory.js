import SingleProductRecommendation from './singleProduct.strategy';
import MultipleProductsRecommendation from './multipleProducts.strategy';

/**
 * @param {string} type 
 * @returns {{ getRecommendations: Function }} 
 */
function createRecommendationStrategy(type) {
  switch (type) {
    case 'SingleProduct':
      return new SingleProductRecommendation();
    case 'MultipleProducts':
      return new MultipleProductsRecommendation();
    default:
      return new MultipleProductsRecommendation();
  }
}

export default createRecommendationStrategy;
