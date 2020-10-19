import { signInUrl } from "./signInUrl";

export const redirectToSignIn = () => {
  const url = signInUrl();
  window.open(`${url}/users/sign_in`)
}