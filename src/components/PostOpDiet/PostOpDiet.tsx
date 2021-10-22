import React from "react";
import Accordion from "../Accordion";
import WeekOneDetails from "./WeekOneDetails";
import WeekTwoDetails from "./WeekTwoDetails";

export default function PostOpDiet(): JSX.Element {
    return (
        <>
            <Accordion summary={"Week 1"}>
                <WeekOneDetails/>
            </Accordion>
            <Accordion summary={"Week 2"}>
                <WeekTwoDetails/>
            </Accordion>
            <Accordion summary={"Week 3 and 4"}></Accordion>
            <Accordion summary={"1 Month"}></Accordion>
            <Accordion summary={"2 Months and Beyond"}></Accordion>
        </>
    );
}
