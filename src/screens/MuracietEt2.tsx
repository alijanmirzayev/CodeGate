import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity, ScrollView } from 'react-native'
import { HelperText, TextInput, RadioButton } from 'react-native-paper';
import React, { useState } from 'react'
import RNDateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import RightIconSVG from '../../assets/icons/onboarding/RightIconSVG';

const MuracietEt2 = ({navigation}) => {

    const [universitet, setUniversitet] = useState(null);
    const [ixtisas, setIxtisas] = useState(null);
    const [derece, setDerece] = useState(null);
    const [umumiBal, setUmumiBal] = useState(null);

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
                <Text style={styles.headerText2}>2. Tələbə məlumatları </Text>

                <View style={{ gap: 20 }}>
                    <TextInput theme={{ colors: { primary: '#8582E4' } }} label="Üniversitet" onChangeText={(text) => setUniversitet(text)} />
                    <TextInput theme={{ colors: { primary: '#8582E4' } }} label="İxtisas" onChangeText={(text) => setIxtisas(text)} />
                    <TextInput theme={{ colors: { primary: '#8582E4' } }} label="Dərəcə" onChangeText={(text) => setDerece(text)} />
                    <TextInput theme={{ colors: { primary: '#8582E4' } }} label="Ümumi Bal" onChangeText={(text) => setUmumiBal(text)} />
                </View>
            </ScrollView>

            <TouchableOpacity onPress={() => navigation.navigate("MuracietEt3")} style={styles.button}>
                <Text style={styles.buttonText}>İrəli</Text>
                <RightIconSVG />
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default MuracietEt2

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