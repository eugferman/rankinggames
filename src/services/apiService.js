const apiService = async () => {

  const response = await fetch("http://localhost:3000/data.json")
  const games = await response.json();
      
  return games;
}
export default apiService;
