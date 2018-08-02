const API_URL = "https://golf-course-db.herokuapp.com/";

export default {
  API_URL,
  async getTeeTimes() {
    const res = await fetch(API_URL + "tee-times");
    return res.json();
  },
  async getMenuItems() {
    const res = await fetch(API_URL + "menu");
    return res.json();
  },
  async getShopItems() {
    const res = await fetch(API_URL + "shop");
    return res.json();
  },
  async getUsers() {
    const res = await fetch(API_URL + "users");
    return res.json();
  },
  async getCartItems() {
    const res = await fetch(API_URL + "cart");
    return res.json();
  }
};
