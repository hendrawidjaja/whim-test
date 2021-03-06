/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { ContextStarship } from "../../App";
import { Label, Input, WrapperSearch } from "./style";

const Searchbar = () => {
  const context = useContext(ContextStarship);
  const { searchTerm, onChangeSearch } = context;
  const [label, _] = useState("Search fleets name / model (case sensitive)");

  return (
    /**
     * Label will show if user type-in something in the input field
     * value of the input will be passed to props of parents
     * */
    <WrapperSearch>
      <Label>{searchTerm && label}</Label>
      <Input type="text" placeholder={label} value={searchTerm} onChange={onChangeSearch} />
    </WrapperSearch>
  );
};

export default Searchbar;
