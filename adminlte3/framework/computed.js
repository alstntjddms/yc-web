export function timestampToDate(timestamp) {
  return new Date(timestamp + 9 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 19)
    .replace("T", " ");
}

export function getSosoJwtToken() {
  const cookieValue = document.cookie.match(
    /(?<=^|;)\s*sosoJwtToken\s*=\s*([^;]+)(?=;|$)/
  )?.[1];
  return cookieValue ?? null;
}

export function getCookie(name) {
  const cookieList = document.cookie.split("; ");
  for (const cookie of cookieList) {
    const [cookieName, cookieValue] = cookie.split("=");
    if (cookieName === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return "";
}

export function getNameFromToken(token) {
  const [, base64Url = ""] = token.split(".");
  if (!base64Url) {
    throw new Error("Invalid token format");
  }
  const padding = "=".repeat((4 - (base64Url.length % 4)) % 4);
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/") + padding;
  const decodedPayload = decodeURIComponent(
    Array.prototype.map
      .call(
        atob(base64),
        (c) => `%${("0" + c.charCodeAt(0).toString(16)).slice(-2)}`
      )
      .join("")
  );
  return JSON.parse(decodedPayload);
}

export function getExpirationFromToken(token) {
  const [, base64Url = ""] = token.split(".");
  if (!base64Url) {
    throw new Error("Invalid token format");
  }
  const padding = "=".repeat((4 - (base64Url.length % 4)) % 4);
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/") + padding;
  const decodedPayload = decodeURIComponent(
    Array.prototype.map
      .call(
        atob(base64),
        (c) => `%${("0" + c.charCodeAt(0).toString(16)).slice(-2)}`
      )
      .join("")
  );
  const payload = JSON.parse(decodedPayload);
  if (!payload.exp) {
    throw new Error("Expiration time not found in token");
  }
  return new Date(payload.exp * 1000); // Convert seconds to milliseconds
}

export function render(data) {
  return (data?.length ?? 0) > 30 ? `${data.slice(0, 30)}...` : data;
}

Vue.prototype.render = render;
