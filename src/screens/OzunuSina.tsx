import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { HelperText, TextInput, RadioButton } from 'react-native-paper';
import React, { useEffect, useState } from 'react'
import RightIconSVG from '../../assets/icons/onboarding/RightIconSVG';

const OzunuSina = () => {

    const [gender, setGender] = useState('kisi');
    const [age, setAge] = useState(null);
    const [math, setMath] = useState(null);
    const [programlasdirma, setProgramlasdirma] = useState(null);
    const [softskill, setSoftSkill] = useState(null);
    const [workingHours, setWorkingHours] = useState(null);
    const [iq, setIQ] = useState(null);
    const [validate, setValidate] = useState(false)

    useEffect(() => {
        if (gender && age && math && programlasdirma && softskill && workingHours && iq) {
            setValidate(true)
        }
    }, [age, math, programlasdirma, softskill, workingHours, iq, validate])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.headerText}>Özünü sına</Text>

                <View style={{ gap: 16 }}>

                    <View style={{ backgroundColor: "#fcf2fc", borderRadius: 12, padding: 8 }}>
                        <Text style={{ color: "black", fontFamily: "Roboto-Bold", fontSize: 16, textAlign: "center" }}>Cinsiyyət seç:</Text>
                        <RadioButton.Group onValueChange={value => setGender(value)} value={gender}>
                            <RadioButton.Item label="Kişi" value="kisi" />
                            <RadioButton.Item label="Qadın" value="qadin" />
                        </RadioButton.Group>
                    </View>

                    <TextInput theme={{ colors: { primary: '#8582E4' } }} label="Yaş" onChangeText={(text) => setAge(text)} />
                    <TextInput theme={{ colors: { primary: '#8582E4' } }} label="Riyaziyyat" onChangeText={(text) => setMath(text)} />
                    <TextInput theme={{ colors: { primary: '#8582E4' } }} label="Proqlamlaşdırma" onChangeText={(text) => setProgramlasdirma(text)} />
                    <TextInput theme={{ colors: { primary: '#8582E4' } }} label="Yumşaq bacarıqlar" onChangeText={(text) => setSoftSkill(text)} />
                    <TextInput theme={{ colors: { primary: '#8582E4' } }} label="Günlük iş saatı" onChangeText={(text) => setWorkingHours(text)} />
                    <TextInput theme={{ colors: { primary: '#8582E4' } }} label="Məntiq testi" onChangeText={(text) => setIQ(text)} />
                </View>
            </ScrollView>

            {
                validate ? <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Göndər</Text>
                    <RightIconSVG />
                </TouchableOpacity> : <View style={[styles.button, { opacity: 0.7 }]}>
                    <Text style={styles.buttonText}>Göndər</Text>
                    <RightIconSVG />
                </View>
            }
        </SafeAreaView>
    )
}

export default OzunuSina

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FAFAFA", flex: 1, paddingHorizontal: 12
    },
    headerText: { fontFamily: "Roboto-Bold", fontSize: 24, paddingTop: 40, textAlign: "center", paddingBottom: 16 },
    button: {
        position: "absolute",
        bottom: 20,
        left: 15,
        width: '100%',
        backgroundColor: '#8582E4',
        padding: 12,
        marginTop: 20,
        borderRadius: 40,
        textAlign: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: "Roboto-Bold",
    }
})