export const API_BASE_URL = "http://18.224.231.55:5000";

export const routerPush = (self, name) => {
  self.$router.push({ name: name }).catch(() => {});
};
