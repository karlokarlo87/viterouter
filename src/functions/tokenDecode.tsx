export const tokenDecode = (token) => {
  if (!token) return false;
  var base64Url = token.split(".")[1];
  if (!base64Url) return false;
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
};
const decodeToken = (token) => {
  if (!token) return false;
  const base64Url = token.split(".")[1];
  if (!base64Url) return true;
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
};
export const isTokenExpired = (token) => {
  if (token === null) return true;
  const decodedToken = decodeToken(token);
  const currentTime = Date.now() / 1000;

  return decodedToken.exp < currentTime;
};
