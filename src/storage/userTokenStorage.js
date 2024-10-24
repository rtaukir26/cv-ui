import { USER_TOKEN } from "../components/localStorage";

export const getUserToken = () => {
  return localStorage.getItem(USER_TOKEN)
    ? localStorage.getItem(USER_TOKEN)
    : null;
};

export const deleteUserIdToken = () => {
  localStorage.removeItem(USER_TOKEN);
};
