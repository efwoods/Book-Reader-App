import React from 'react';
import {SafeAreaView} from 'react-native';
import OCRCamera from './components/OCRCamera';

const App = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <OCRCamera />
        </SafeAreaView>
    );
};

export default App;