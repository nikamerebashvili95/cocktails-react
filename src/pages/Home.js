import React from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
    <div>
      <main>
        <CocktailList />
        <SearchForm />
      </main>
    </div>
  );
};

export default Home;
