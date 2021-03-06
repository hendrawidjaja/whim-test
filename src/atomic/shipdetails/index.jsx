/* eslint-disable no-unused-vars */
import React from "react";
import { Card, Column, H5, Information, Section, ButtonClose, Split, P } from "./style";

const Shipdetails = ({ information, click }) => {
  return (
    <Section className="section-details">
      <Card>
        <h4>{information.name}</h4>
        <ButtonClose onClick={() => click()}>X</ButtonClose>
      </Card>
      <H5>More Information: </H5>

      <Column>
        <Information>
          <Split>
            <P>Name:</P>
            <P>{information.model}</P>
          </Split>
        </Information>
        <Information>
          <Split>
            <P>Class:</P>
            <P>{information.starship_class}</P>
          </Split>
        </Information>
      </Column>

      <Column>
        <Information>
          <Split>
            <P>Manufacture:</P>
            <P>{information.manufacturer}</P>
          </Split>
        </Information>
        <Information>
          <Split>
            <P>Cost:</P>
            <P>{information.cost_in_credits}</P>
          </Split>
        </Information>
      </Column>

      <Column>
        <Information>
          <Split>
            <P>Length:</P>
            <P>{information.length}m</P>
          </Split>
        </Information>
        <Information>
          <Split>
            <P>Crew:</P>
            <P>{information.crew}</P>
          </Split>
        </Information>
      </Column>

      <Column>
        <Information>
          <Split>
            <P>Passengers:</P>
            <P>{information.passengers} non-essential people</P>
          </Split>
        </Information>
        <Information>
          <Split>
            <P>Speed:</P>
            <P>{information.max_atmosphering_speed}</P>
          </Split>
        </Information>
      </Column>

      <Column>
        <Information>
          <Split>
            <P>Hyperdrive:</P>
            <P>{information.hyperdrive_rating}</P>
          </Split>
        </Information>
        <Information>
          <Split>
            <P>Mega lights:</P>
            <P>{information.MGLT} (maximum)</P>
          </Split>
        </Information>
      </Column>

      <Column>
        <Information>
          <Split>
            <P>Cargo capacity:</P>
            <P>{information.cargo_capacity} kgs</P>
          </Split>
        </Information>
        <Information>
          <Split>
            <P>Consumables:</P>
            <P>{information.consumables} (without supplied)</P>
          </Split>
        </Information>
      </Column>
    </Section>
  );
};

export default Shipdetails;
/*

● consumables *string
● The maximum length of time that this starship can provide consumables for its entire
crew without having to resupply.
● films ​array​ -- An array of Film URL Resources that this starship has appeared in.
● pilots ​array​ -- An array of People URL Resources that this starship has been piloted by.
● url ​string​ -- the hypermedia URL of this resource.
● created ​string​ -- the ISO 8601 date format of the time that this resource was created.
● edited ​string​ -- the ISO 8601 date format of the time that this resource was edited.
*/
