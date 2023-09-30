import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RightSVG from '../../assets/icons/muracietlerim/RightSVG'

const MuracietCard = ({item}) => {
    return (
        <View style={{ flex: 1, flexDirection: 'column', margin: 6, borderWidth: 1, borderColor: "#D1D1D1", borderRadius: 16, backgroundColor: "white", padding: 16 }}>
            <View style={{paddingBottom: 12, gap: 4}}>
                <Text style={{ textAlign: "center", fontFamily: "Roboto-Bold", fontSize: 16, color: "black" }}>{item.movzuAdi}</Text>
                <Text style={{ textAlign: "center", fontFamily: "Roboto-Regular", fontSize: 14, color: "#7F7F7F" }}>24.07.2023</Text>
            </View>
            <View style={{ backgroundColor: "#009A85", paddingVertical: 6, paddingHorizontal: 4, borderRadius: 12, marginBottom: 48 }}>
                <Text style={{ fontFamily: "Roboto-Bold", fontSize: 14, color: "#FEF7F9", textAlign: "center" }}>aktiv</Text>
            </View>

            <View style={{flexDirection: "row", gap: 8, alignSelf: "center"}}>
                <Text style={{color: "#8582E4", fontFamily: "Roboto-Bold", textAlign: "center"}}>detallı bax</Text>
                <RightSVG />
            </View>
        </View>
    )
}

export default MuracietCard

const styles = StyleSheet.create({})