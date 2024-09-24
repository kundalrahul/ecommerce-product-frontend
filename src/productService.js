import config from "./config";

// Fetch all products
export const getAllProducts = async () => {
  try {
    const response = await fetch(`${config.API_BASE_URL}/products/all`);
    if (!response.ok) {
      throw new Error(`Error fetching products: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
};

// Search for a product by name
export const searchProduct = async (query) => {
  try {
    const response = await fetch(
      `${config.API_BASE_URL}/products/search?name=${query}`
    );
    if (!response.ok) {
      throw new Error(`Error searching products: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to search product:", error);
    throw error;
  }
};

// Add a new product
export const addProduct = async (product) => {
  try {
    const response = await fetch(`${config.API_BASE_URL}/products/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    if (!response.ok) {
      throw new Error(`Error adding product: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to add product:", error);
    throw error;
  }
};
