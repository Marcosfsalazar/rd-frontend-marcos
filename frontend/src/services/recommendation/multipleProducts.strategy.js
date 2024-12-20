class MultipleProductsRecommendation {
  getRecommendations(preferences, features, products) {
    return products.filter(product => {
      const matchesPreferences =
        preferences.length === 0 || preferences.some(pref => product.preferences.includes(pref));
      const matchesFeatures =
        features.length === 0 || features.some(feat => product.features.includes(feat));

      return matchesPreferences && matchesFeatures;
    });
  }
}

export default MultipleProductsRecommendation;
