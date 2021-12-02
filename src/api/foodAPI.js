export default async function foodAPI(url, method = "GET", data = "") {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1${url}`,
    {
      method: method,
      data: typeof data === "string" ? data : JSON.stringify(data),
    }
  );
  const payload = await response.json();
  return payload;
}
