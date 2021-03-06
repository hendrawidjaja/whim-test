/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { ContextStarship } from "../../App";
import { P, WrapperButtons, Button } from "./style";

const Buttons = ({ props }) => {
  const context = useContext(ContextStarship);
  const { searchTerm, setSearchTerm, setPage, page } = context;
  const { isPreviousData, data } = props;

  return (
    <WrapperButtons>
      <Button
        onClick={() => {
          if (searchTerm) {
            setSearchTerm("");
          }
          setPage((old) => Math.max(old - 1, 1));
        }}
        disabled={page === 1}>
        <P prev>Prev</P>
      </Button>
      <Button
        onClick={() => {
          if (searchTerm) {
            setSearchTerm("");
          }

          if (!isPreviousData && !!data.next) {
            setPage((old) => old + 1);
          }
        }}
        disabled={data.next === null}>
        <P next>Next</P>
      </Button>
    </WrapperButtons>
  );
};

export default Buttons;
