class SingleProductRecommendation {
  getRecommendations(preferences, features, products) {
    const filteredByPreferences = products.filter(product =>
      preferences.every(pref => product.preferences.includes(pref))
    );

    const filteredByFeatures = filteredByPreferences.filter(product =>
      features.every(feat => product.features.includes(feat))
    );

    if (filteredByFeatures.length > 1) {
      return [filteredByFeatures[filteredByFeatures.length - 1]];
    }

    return filteredByFeatures;
  }
}

export default SingleProductRecommendation;
