export  const getCookie = (name:string) => {
  const cookies = document.cookie.split("; ");
  const found = cookies.find((row) => row.startsWith(name));
  return found ? found.split("=")[1] : "";
};
export const setCookie = (name:string,value:any)=>{
    document.cookie = `${name}=${value}; Secure; HttpOnly; Path=/;`;
}