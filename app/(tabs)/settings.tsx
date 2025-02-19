import ParallaxScrollView from '@/components/ParallaxScrollView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { StyleSheet, Text, View } from 'react-native';

export default function Settings() {
    return <ParallaxScrollView
        headerBackgroundColor={{ light: '#e9edc9', dark: '#353636' }}
        headerImage={
            <View style={styles.iconContainer}>
                <IconSymbol
                    size={40}
                    color="#333333"
                    name="arrow.backward.square.fill"
                />
            </View>
        }>

    </ParallaxScrollView>;
}


const styles = StyleSheet.create({
    iconContainer: {
        marginTop: 60,
        marginLeft: 20
    },
});