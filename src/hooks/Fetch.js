import axios from "axios";
import { useState } from "react";

const options = {
  method: "GET",
  url: "https://tasty.p.rapidapi.com/recipes/list",
  params: {
    from: "0",
    size: "20",
    tags: "under_30_minutes",
  },
  headers: {
    "X-RapidAPI-Key": "e8f6dd7cc4mshbbb99c8a8593ef0p14a4e0jsn82a4f64c32cf",
    "X-RapidAPI-Host": "tasty.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}

// const options = {
//   method: "GET",
//   url: "https://tasty.p.rapidapi.com/recipes/list",
//   //array 0 to 20
//   params: {
//     from: "0",
//     size: "20",
//   },
//   //unique ID
//   headers: {
//     "X-RapidAPI-Key": "29ecf532ecmsh6974bccc7179742p1b0bb2jsne78433479818",
//     "X-RapidAPI-Host": "tasty.p.rapidapi.com",
//   },
// };

const useFetch = () => {
  const [recipes, setRecipes] = useState([]);

  const [error, setError] = useState(null);

  const fetchRecipe = async (searchTerm) => {
    console.log(searchTerm);

    setRecipes(null);
    setError(null);

    try {
      //! for search item
      const reqOptions = { ...options };
      if (searchTerm) {
        reqOptions.params.q = searchTerm;
      }

      //! basic function
      const response = await axios.request(reqOptions);
      setRecipes(response.data.results);

      console.log(response.data.results);
    } catch (err) {
      setError(err.message);
    }
  };
  return [fetchRecipe, { data: recipes, error }];
};

export default useFetch;
