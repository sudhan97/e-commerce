export default async function getData(url: string) {
  const response = await fetch(url);
  if (response?.ok) {
    console.log(response.json(), "res");
    return response.json();
  }
  throw new Error("Fetch Failed");
}
