export const getCookie = (name: string) => {
  const cookies = document.cookie.split("; ");
  const found = cookies.find((row) => row.startsWith(name));
  return found ? found.split("=")[1] : "";
};

export const setCookie = (name: string, value: string) => {
  document.cookie = `${name}=${value}; Secure; HttpOnly; Path=/;`;
};

export const removeCookie = (name: string) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`;
};