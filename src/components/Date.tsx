import React from 'react'
import { Text } from 'react-native'
import moment from 'moment'
import styled from 'styled-components/native'

export default class Date extends React.Component {
    state: any = {
        dataSet: [{ key: 0, date: "Hello"}]
    }

    componentDidMount() {
        const interval = setInterval(() => {

            if (this.state.dataSet.length  === 30) {
                clearInterval(interval)
                return
            }

            this.setState(prevState => {
                return {
                    dataSet: prevState.dataSet.concat(
                        { 
                            key: this.state.dataSet.length + 1, 
                            date: "Hello"
                        }
                    )
                }
            });
        }, 50)
    }

    render() {        
        const { dataSet } = this.state
        return (
            <>
            {dataSet.map(item => {
                return (
                    <Row>
                        <Text key={item.key}>{item.date}</Text>
                        <Text key={item.key + "b"}>{item.date}</Text>
                    </Row>
                )
            })}
            </>
        )
    }
}

const Row = styled.View`
    width: 100%;
    padding: 5px 15px;
    flex-direction: row;
    justify-content: space-between; 
`

const DateText = styled.Text`
    font-size: 14px;
`
