import ParallaxScrollView from '@/components/ParallaxScrollView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useEffect } from 'react';
import { Alert, BackHandler, StyleSheet, Text, View } from 'react-native';

export default function Settings() {
    useEffect(() => {
        const backAction = () => {
            Alert.alert('Hold on!', 'Are you sure you want to go back?', [
                {
                    text: 'Cancel',
                    onPress: () => null,
                    style: 'cancel',
                },
                { text: 'YES', onPress: () => BackHandler.exitApp() },
            ]);
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
        );

        return () => backHandler.remove();
    }, []);
    return <ParallaxScrollView
        headerBackgroundColor={{ light: '#e9edc9', dark: '#353636' }}
        headerImage={
            <View style={styles.iconContainer}>
                <IconSymbol
                    size={40}
                    color="#333333"
                    name="arrow.backward.square.fill"
                />

                <Text style={styles.headingText}>Settings</Text>
            </View>
        }>

    </ParallaxScrollView>;
}


const styles = StyleSheet.create({
    iconContainer: {
        marginTop: 60,
        marginLeft: 20
    },
    headingText: {
        fontSize: 40,
        paddingTop: 50
    }
});