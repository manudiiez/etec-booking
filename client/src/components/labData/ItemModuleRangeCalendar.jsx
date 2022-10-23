import React from 'react'
/* ------------------------------- DATE-RANGE ------------------------------- */
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components';

const ItemModuleRangeCalendar = ({setDates, dates}) => {
    return (
        <Container>
            <DateRange
                editableDateInputs={true}
                onChange={item => setDates([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={dates}
                className="date"
            />
        </Container>
    )
}

export default ItemModuleRangeCalendar

const Container = styled.div`
    
    width: auto;
    .date{
        width: auto;
        max-width: calc(100vw - 2rem);
        overflow: hidden;
    }

`