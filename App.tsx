import React from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native'
import Layout from './src/components/Layout'

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Layout />
      </SafeAreaView>
    </>
  );
};

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background: #F6F1EE;
`

export default App;
