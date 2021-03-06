import React from "react";
import { Card, Model, Span, P } from "./style";

const ShipCard = ({ information, click, toggle }) => {
  return (
    <Card className="card">
      <P>{information.name}</P>
      <Model>{information.model}</Model>
      <Span onClick={() => click()}>Info</Span>
    </Card>
  );
};

export default ShipCard;
