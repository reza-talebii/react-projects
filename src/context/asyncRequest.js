export const getMovie = async (searchTerm) => {
  console.log(searchTerm);
  const res = await fetch(
    `https://imdb-api.com/en/API/Search/k_w12y7n4m/${searchTerm}"}`
  );

  const data = await res.json();
  return data.results;
};
