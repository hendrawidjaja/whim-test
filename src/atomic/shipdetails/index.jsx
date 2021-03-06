/* eslint-disable no-unused-vars */
import React from "react";
import Information from "../information";
import { Card, Column, H5, Section, ButtonClose } from "./style";

const Shipdetails = ({ information, click }) => {
  return (
    <Section className="section-details">
      <Card>
        <h4>{information.name}</h4>
        <ButtonClose onClick={() => click()}>X</ButtonClose>
      </Card>
      <H5>More Information: </H5>

      <Column>
        <Information title="Name:" information={information.model} />
        <Information title="Class:" information={information.starship_class} />
      </Column>

      <Column>
        <Information title="Manufacture:" information={information.manufacturer} />
        <Information title="Cost:" information={information.cost_in_credits} />
      </Column>

      <Column>
        <Information title="Length:" information={information.length} details="m" />
        <Information title="Crew:" information={information.crew} />
      </Column>

      <Column>
        <Information
          title="Passengers:"
          information={information.passengers}
          details="non-essential people"
        />
        <Information title="Speed:" information={information.max_atmosphering_speed} />
      </Column>

      <Column>
        <Information title="Hyperdrive:" information={information.hyperdrive_rating} />
        <Information title="Mega lights:" information={information.MGLT} details="(maximum)" />
      </Column>

      <Column>
        <Information title="Cargo capacity:" information={information.cargo_capacity} />
        <Information
          title="Consumables:"
          information={information.consumables}
          details="(without supplied)"
        />
      </Column>
    </Section>
  );
};

export default Shipdetails;
