import React from 'react'
import styled from 'styled-components/native'

interface Props {
    startDate: Object,
    endDate: Object,
    eventName?: String,
    calendarColor: String
}

const Event: React.FC<Props> = props => {
    const { 
        startDate,
        endDate,
        eventName, 
        calendarColor
    } = props;

    return (
        <>
        </>
    )
}

export default Event