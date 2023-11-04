export const Endpoints = {
  base: import.meta.env.VITE_BASE_URL + "/api/v1",

  sign_up: "/auth/signup",
  sign_in: "/auth/login",
  refreash_token: "auth/refreash_token",

  create_user: "/users/create",
  get_user: (id: string) => `/users/${id}`,
};
