import React, { use, useState } from 'react';
import { View, Button, Image, Text, StyleSheet } from 'react-native';
import { launchCamera } from 'react-native-image-picker';
import { recognizeText } from '../utils/ocrProcessor';

const OCRCamera = () => {
    const [imageUri, setImageUri] = useState(null);
    const [text, setText] = useState('');

    const handleCapture = async () => {
        launchCamera({ mediaType: 'photo' }, (response) => {
            if (response.didCancel || response.errorCode) {
                console.error('Camera error or cancel');
                return;
            }
            const uri = response.assets[0].uri;
            setImageUri(uri);
            const extractedText = await recognizeText(uri);
            setText(extractedText);

        });
    };
    return (
        <View style={styles.container}>
            <Button title="Capture Image" onPress={handleCapture} />
            {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
            {text.length > 0 && (<Text selectable style={styles.textOutput}>{text}</Text>
            )}
        </View>
    );
};

export default OCRCamera;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    image: {
        width: '100%',
        height: 300,
        marginVertical: 10,
    },
    textOutput: {
        fontSize: 16,
        color: '#000',
        marginTop: 10,
    }
});