export const fetchReviews = async () => {
  try {
    // Hämta alla produkter
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();

    // Samla alla recensioner från alla produkter
    const allReviews = [];
    data.products.forEach((product) => {
      allReviews.push(...product.reviews);
    });

    return allReviews;
  } catch (error) {
    console.error("Fel vid hämtning av recensioner:", error);
    return [];
  }
};
