/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import { useQuery } from "react-query";
import Buttons from "../../atomic/buttons";
import Searchbar from "../../atomic/search";
import ShipCard from "../../atomic/shipcard/index";
import Shipdetails from "../../atomic/shipdetails";
import { ContextStarship } from "../../App";
import { Content, Section, Row } from "./style";

const URL = "http://swapi.dev/api/starships";
const fetchShips = async (page) => {
  const res = await fetch(`${URL}?page=${page}`).then((response) => {
    if (response.status !== 200) throw new Error("Not Found");
    return response.json();
  });

  return res;
};

const Starships = () => {
  const context = useContext(ContextStarship);
  const {
    page,
    searchTerm,
    setSearchTerm,
    details,
    setDetails,
    filterData,
    setFilterData
  } = context;

  const { isLoading, isError, data, isPreviousData } = useQuery(
    ["ships", page],
    () => fetchShips(page),
    {
      keepPreviousData: true
    }
  );

  /**
   * if user typed, search term state will be filled with value
   */
  const onChangeSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  /**
   *
   * When user clicked on info button,
   * information box pop-up on lower part of screen
   */
  const clickInfo = (e) => {
    setDetails(e);
  };

  /**
   *
   * When user clicked on close button
   * information box disappear
   */
  const removeInfo = (e) => {
    setDetails();
  };

  /**
   *
   * Return result will place inside search
   * if user typed, original result will be filtered
   */
  useEffect(() => {
    const results = data?.results;

    /**
     * if there not string in search, original result will be used as source of data
     */
    if (searchTerm === "") {
      setFilterData(results);
    }

    /**
     * if there is a string in search, filtred data will be used
     */
    const temp = results && Object.values(results);
    setFilterData(
      temp?.filter(
        (filtered) => filtered.name.includes(searchTerm) || filtered.model.includes(searchTerm)
      )
    );
  }, [searchTerm, data?.results, setFilterData]);

  /**
   *
   * if user typed, close information bar incase open
   */
  useEffect(() => {
    searchTerm && setDetails("");
  }, [searchTerm, setDetails]);

  return (
    <Section className={`section-starships${isError || isLoading ? " center" : ""}`}>
      {isError && <h4>Oh Noes, there's nothing in here</h4>}
      {isLoading && (
        <>
          <h4> Loading data ...</h4>
          <h5>Might take a while</h5>
        </>
      )}

      {!isError && !isLoading && (
        <>
          <Row className="row-top">
            <h3 className="title">List of Ships</h3>

            {/**
             *
             * Search atomic component, passed searchterm, and on change to child as props
             * */}
            <Searchbar props={{ onChangeSearch }} />

            {/**
             *
             * Buttons atomic component, passed page setPage, isPreviousData, data, searchTerm, setSearchTerm to child as props
             *  */}
            <Buttons props={{ isPreviousData, data }} />
          </Row>

          <Content className="section-content">
            {filterData &&
              filterData.map((item, index) => {
                return (
                  <ShipCard
                    key={index}
                    information={item}
                    click={(e) => clickInfo(index)}
                    toggled={{ details }}
                    searchTerm={{ searchTerm }}
                    index={index}
                  />
                );
              })}
          </Content>

          <Content className="section-content">
            {filterData &&
              filterData.map((item, index) => {
                return (
                  index === details && (
                    <Shipdetails key={index} information={item} click={(e) => removeInfo(e)} />
                  )
                );
              })}
          </Content>
        </>
      )}
    </Section>
  );
};

export default Starships;
