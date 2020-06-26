import React from 'react'
import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

const { width } = Dimensions.get('window');
const cellMargin = 15;
const cellAmount = 5;

export const CellWidth = ((width - 20) - cellMargin * cellAmount + 1) / 7;

export const CellBox = styled.View`
    width: ${CellWidth.toString() + "px"};
    height: ${CellWidth.toString() + "px"};
    justify-content: center;
    align-items: center;
`