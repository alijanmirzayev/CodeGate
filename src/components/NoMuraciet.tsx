import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'

const NoMuraciet = () => {
    return (
        <SafeAreaView style={{ backgroundColor: "#FAFAFA", flex: 1, paddingHorizontal: 12 }}>
            <View>
                <Text style={{ fontFamily: "Roboto-Bold", fontSize: 24, paddingTop: 40, textAlign: "center", paddingBottom: 16 }}>Müraciətlərim</Text>
            </View>
            <View style={{flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontFamily: "Roboto-Regular", fontSize: 20, color: "#5C5C5C" }}>Mövcud müraciətiniz tapılmadı</Text>
                <Image source={require("../../assets/images/no-muraciet.png")} />
            </View>

            <TouchableOpacity style={{backgroundColor: "#8582E4", borderRadius: 20, paddingVertical: 12, marginBottom: 8}}>
                <Text style={{color: "white", fontFamily: "Roboto-Regular", fontSize: 16, textAlign: "center"}}>Müraciət et</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default NoMuraciet

const styles = StyleSheet.create({})