import React from 'react'
import { ActivityIndicator, SafeAreaView, StyleSheet } from 'react-native'

export default function Loading() {
    return (
        <SafeAreaView style={styles.container}>
            <ActivityIndicator style={styles.loading} size='large' color='#8582E4' />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loading: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    }

})