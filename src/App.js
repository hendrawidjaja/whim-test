/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-unused-vars */
import React, { createContext, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Starships from "./components/starships/index.jsx";
import "./App.scss";

const queryClient = new QueryClient();

const initialState = {
  page: 1,
  searchTerm: "",
  filterData: [],
  details: ""
};
export const ContextStarship = createContext(initialState);

function App() {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterData, setFilterData] = useState();
  const [details, setDetails] = useState();

  /**
   * if user typed, search term state will be filled with value
   */
  const onChangeSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ContextStarship.Provider
          value={{
            page,
            setPage,
            searchTerm,
            setSearchTerm,
            filterData,
            setFilterData,
            details,
            setDetails,
            onChangeSearch
          }}>
          <div className="content">
            <h2 className="title-header">Starships</h2>
          </div>
          <Starships />
        </ContextStarship.Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
