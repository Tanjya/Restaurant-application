import React, { useEffect } from "react";
import Fetch from "../hooks/Fetch";
import SearchSection from "../components/SearchSection";
import CardList from "../components/CardList";
const MenuPage = () => {
  const [fetchRecipe, { data, error }] = Fetch();

  useEffect(() => {
    fetchRecipe();
  }, []);

  //! handleSearch
  const handleSearch = (searchItem) => {
    if (searchItem) {
      fetchRecipe(searchItem);
    }
  };
  return (
    <div className="bg-orange-50">
      <div>
        <SearchSection handleSearch={handleSearch} />
        {data && <CardList recipes={data} />}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default MenuPage;
