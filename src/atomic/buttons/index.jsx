/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { P, WrapperButtons, Button } from "./style";

const Buttons = ({ props }) => {
  const { page, setPage, isPreviousData, data, searchTerm, setSearchTerm } = props;
  console.log("8", searchTerm);

  return (
    <WrapperButtons>
      <Button
        onClick={() => {
          if (searchTerm) {
            console.log("15", searchTerm);
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
            console.log("26", searchTerm);
            setSearchTerm("");
            console.log("26", searchTerm);
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
