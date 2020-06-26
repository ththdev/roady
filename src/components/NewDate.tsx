import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { Animated } from 'react-native'

const NewDate = () => {
    const [ dates, setDates ] = useState([{ key: 0, date: '10AM' }])

    const interval = setInterval(() => {
        if (dates.length === 10) {
            clearInterval(interval)
            return
        }
        var newDates = dates.concat({ key: dates.length + 1, date: "11AM" });
        setDates(newDates);
        console.log(dates.length)
    }, 1000)

    return dates.map(item => {
        return <AnimatedText key={item.key}>{item.date}</AnimatedText>
    })
}

const AnimatedText = styled.Text`
    font-size: 16px;
`

export default NewDate