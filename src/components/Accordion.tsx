import {
    Accordion as MUIAccordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

export type AccordionProps = {
    children?: JSX.Element | undefined;
    summary: string;
};
export default function Accordion(props: AccordionProps): JSX.Element {
    return (
        <MUIAccordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>{props.summary}</Typography>
            </AccordionSummary>
            <AccordionDetails>{props.children}</AccordionDetails>
        </MUIAccordion>
    );
}
