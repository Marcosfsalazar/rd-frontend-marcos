class SingleProductRecommendation {
  getRecommendations(preferences, features, products) {
    const filtered = products.filter(product => {
      const matchesPreferences =
        preferences.length === 0 || preferences.some(pref => product.preferences.includes(pref));
      const matchesFeatures =
        features.length === 0 || features.some(feat => product.features.includes(feat));

      return matchesPreferences && matchesFeatures;
    });

    if (filtered.length > 1) {
      return [filtered[filtered.length - 1]];
    }

    return filtered;
  }
}

export default SingleProductRecommendation;

