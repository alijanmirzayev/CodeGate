import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity, ScrollView } from 'react-native'
import { HelperText, TextInput, RadioButton } from 'react-native-paper';
import React, { useState } from 'react'
import RNDateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import RightIconSVG from '../../assets/icons/onboarding/RightIconSVG';

const MuracietEt = ({navigation}) => {

    const [age, setAge] = useState(null);
    const [gender, setGender] = useState('kisi');

    const [date, setDate] = useState(new Date(1598051730000));

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: currentMode,
            is24Hour: true,
        });
    };

    const showDatepicker = () => {
        showMode('date');
    };

    return (
        <SafeAreaView style={styles.container}>

            <ScrollView>
                <Text style={styles.headerText}>Müraciət et </Text>
                <Text style={styles.headerText2}>1. Tələbə məlumatları </Text>

                <View style={{ gap: 20 }}>
                    <View style={{ backgroundColor: "#fcf2fc", borderRadius: 12, padding: 8 }}>
                        <Text style={{ color: "black", fontFamily: "Roboto-Bold", fontSize: 16, textAlign: "center" }}>Cinsiyyət seç:</Text>
                        <RadioButton.Group onValueChange={value => setGender(value)} value={gender}>
                            <RadioButton.Item label="Kişi" value="kisi" />
                            <RadioButton.Item label="Qadın" value="qadin" />
                        </RadioButton.Group>
                    </View>

                    <TouchableOpacity style={{ backgroundColor: "#fcf2fc", padding: 8, flexDirection: "row", alignItems: "center" }} onPress={showDatepicker}>
                        <Text style={{ color: "black", fontFamily: "Roboto-Bold", fontSize: 18 }}>Doğum tarixi seç: </Text>
                        <Text style={{ color: "black", fontFamily: "Roboto-Regular", fontSize: 18 }}>{date.toLocaleString().toString().slice(0, 10)}</Text>
                    </TouchableOpacity>

                    <TextInput theme={{ colors: { primary: '#8582E4' } }} label="Ad Soyad" onChangeText={(text) => setAge(text)} />
                    <TextInput theme={{ colors: { primary: '#8582E4' } }} label="Mövzu" onChangeText={(text) => setAge(text)} />
                    <TextInput theme={{ colors: { primary: '#8582E4' } }} label="Email" onChangeText={(text) => setAge(text)} />
                    <TouchableOpacity style={{ backgroundColor: "#fcf2fc", padding: 8, flexDirection: "row", alignItems: "center" }} onPress={showDatepicker}>
                        <Text style={{ color: "black", fontFamily: "Roboto-Bold", fontSize: 18 }}>Görüş tarixi seç: </Text>
                        <Text style={{ color: "black", fontFamily: "Roboto-Regular", fontSize: 18 }}>{date.toLocaleString().toString().slice(0, 10)}</Text>
                    </TouchableOpacity>
                    <TextInput theme={{ colors: { primary: '#8582E4' } }} label="Günlük iş saatı" onChangeText={(text) => setAge(text)} />
                </View>
            </ScrollView>

            <TouchableOpacity onPress={() => navigation.navigate("MuracietEt2")} style={styles.button}>
                <Text style={styles.buttonText}>İrəli</Text>
                <RightIconSVG />
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default MuracietEt

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FAFAFA", flex: 1,
    },
    headerText: { fontFamily: "Roboto-Bold", fontSize: 24, paddingTop: 40, textAlign: "center", paddingBottom: 16 },
    headerText2: { fontFamily: "Roboto-Regular", fontSize: 20, paddingTop: 8, textAlign: "center", paddingBottom: 16, color: "#858585" },
    button: {
        position: "absolute",
        bottom: 20,
        left: 15,
        width: '94%',
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