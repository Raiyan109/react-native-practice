import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function Signup() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('')


    const handleSubmit = () => {

    }

    return <ParallaxScrollView
        headerBackgroundColor={{ light: '#e9edc9', dark: '#353636' }}
        headerImage={
            <SafeAreaView style={styles.iconContainer}>
                <View>
                    <IconSymbol
                        size={40}
                        color="#333333"
                        name="arrow.backward.square.fill"
                    />

                    <Text style={styles.headingText}>Signup</Text>
                </View>
            </SafeAreaView>
        }>
        <View>
            <Text>Username</Text>
            <TextInput
                style={styles.input}
                onChangeText={setName}
                value={name}
                placeholder='Enter your name'
            />

            <Text>Password</Text>
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                secureTextEntry
                placeholder='Enter your password'
            />
        </View>

        <Button title='Sign up' onPress={() => { }}></Button>
    </ParallaxScrollView>
}

const styles = StyleSheet.create({
    iconContainer: {
        marginTop: 60,
        marginLeft: 20
    },
    headingText: {
        fontSize: 40,
        paddingTop: 50
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});