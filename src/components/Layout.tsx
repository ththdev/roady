import React, { useState, createRef, useRef, useEffect } from 'react'
import { Dimensions, FlatList } from 'react-native'
import styled from 'styled-components/native';
import moment from 'moment'

const { width } = Dimensions.get('window');
const cellAmount = 6
const cellWidth = width / cellAmount;

const dates = [{ date: moment() }]

const CellRenderer = () => {
    return (
        <CellRow>
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <GridLine />
        </CellRow>   
    )
}

class Layout extends React.Component {

    private flatlistRef: any

    constructor(props) {
        super(props)
        this.flatlistRef = element => {
            this.flatlistRef = element
        }
    }

    render() {
        
        for ( var i = 1; i <= 30; i++) {
            dates.unshift({ date: moment().add(-i, 'days')})
            dates.push({ date: moment().add(i, 'days')})
        }

        return (
            <Container>
                <FlatList 
                    data={dates}
                    keyExtractor={item => item.date.toString()}
                    ref={ref = > this.flatlistRef}    
                    renderItem={({item, index}) => (
                        item.date.format('YYYY MM DD') === moment().format('YYYY MM DD')
                        ? (
                            <TodayRow>
                                <Cell><DateText>{item.date.format('DD') + "일"}</DateText></Cell>
                                <CellRenderer />
                                <Cell><DateText>{index}</DateText></Cell>
                            </TodayRow>
                        ) : (
                            <Row>
                                <Cell><DateText>{item.date.format('DD') + "일"}</DateText></Cell>
                                <CellRenderer />
                                <Cell><DateText>{index}</DateText></Cell>
                            </Row>
                        )
                    )}
                />
            </Container>
        )
    }
}

const Container = styled.View`
    padding-top: 140px;
    width: 100%;
`

const Row = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const CellRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

const GridLine = styled.View`
    width: 100%;
    height: 1px;
    background: #c4c4c4;
    position: absolute;
    top: 50%;
`

const Cell = styled.TouchableOpacity`
    width: ${cellWidth + "px"};
    height: ${cellWidth + "px"};
    justify-content: center;
    align-items: center;
    padding: 10px;

`

const Circle = styled.View`
    width: 100%;
    height: 100%;
    border-radius: ${(cellWidth - 10) / 2 + "px"};
    background: #FDC105;
    z-index: 2000;
`

const DateText = styled.Text`
    font-size: 14px;
`

const TodayRow = styled(Row)`
    background: red;
`


export default Layout