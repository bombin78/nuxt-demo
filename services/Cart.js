import axios from "axios";

const storageIsEnabled = () => typeof window !== "undefined" && typeof window.localStorage !== "undefined";

export default {
  async getItems() {
    if (storageIsEnabled()) {
      const items = localStorage.getItem("CART_ITEMS");
      if (items !== null) {
        return JSON.parse(items);
      }
    }
    return [];
  },
  async saveItems(items) {
    if (storageIsEnabled()) {
      localStorage.setItem("CART_ITEMS", JSON.stringify(items));
    }
  },
  async makeOrder(items, data) {
    const response =  await axios.post("https://vues-hop-backend-demo-082019.herokuapp.com/", {
      ...data,
      cart: items.reduce((acc, p) => `${acc}${p.product.title} - ${p.quantity}\n`, ""),
    });

    return response.data;
  },
};
