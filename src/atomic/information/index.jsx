import React from "react";
import { P, Split, Wrapper } from "./style";

const Information = (props) => {
  return (
    <Wrapper>
      <Split>
        <P>{props.title}</P>
        <P>
          {props.information} {props.details}
        </P>
      </Split>
    </Wrapper>
  );
};

export default Information;
