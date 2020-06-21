import React from 'react';
import { StatusBar, Dimensions, FlatList } from 'react-native';
import styled from 'styled-components/native'

const { width } = Dimensions.get('window');

const initializeCells = () => {

}

const cellAmount = 7;
const cellWidth = (width - 20 * (cellAmount - 1)) / 7
const data = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Container>
        <CellContainer>
          <FlatList 
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <Row>
                <LeftDate><Text>{item}</Text></LeftDate>
                <Cell />
                <Cell />
                <Cell />
                <Cell />
                <Cell />
                <RightDate><Text>{item}</Text></RightDate>
                <Line />
              </Row>
            )}
          />
        </CellContainer>
      </Container>
    </>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  margin: 0 20px;
  padding-top: 160px;
`

const CellContainer = styled.View`
  width: 100%;
`

const Row = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`

const Line = styled.View`
  width: 70%;
  height: 2px;
  background: #c4c4c4;
  position: absolute;
  top: ${cellWidth / 2 + 'px'};
  left: 15%;
`

const Text = styled.Text`
  font-size: 14px;
`

const Cell = styled.View`
  width: ${cellWidth.toString() + 'px'};
  height: ${cellWidth.toString() + 'px'};
  /* border: 1px solid #000; */
`

const Date = styled.View`
  width: ${cellWidth.toString() + 'px'};
  height: ${cellWidth.toString() + 'px'};
  background: white;
  z-index: 99;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-style: solid;
`

const LeftDate = styled(Date)`
  justify-content: flex-start;
  border-right-width: 1px;
  border-right-color: #c4c4c4;
`

const RightDate = styled(Date)`
  justify-content: flex-end;
  border-left-width: 1px;
  border-left-color: #c4c4c4;
`

export default App;
