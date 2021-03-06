import React from "react";
import { Card, Model, Span, P } from "./style";

const ShipCard = (props) => {
  return (
    <Card className={`card`}>
      <P>{props.information.name}</P>
      <Model>{props.information.model}</Model>
      <Span onClick={() => props.click()}>Info</Span>
    </Card>
  );
};

export default ShipCard;
