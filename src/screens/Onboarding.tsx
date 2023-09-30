import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import RightIconSVG from '../../assets/icons/onboarding/RightIconSVG';
import { GENERATE_DEVICE_ID } from '../helpers/generateDeviceId';
import axios from 'axios';

export default function Onboading({ navigation }) {

    const handleDeviceID = () => {
        // const deviceId = GENERATE_DEVICE_ID()
        // const deviceId = "72973300399"
        // try {
        //     axios.post("http://40.113.162.164:5000/api/Device/Register_Device", {
        //         "name": "Ali",
        //         "email": "mirzeali@gmail.com",
        //         "birthDate": "30.09.2023",
        //         "gender": "kisi",
        //         "password": "123445",
        //         "appointmentDate": "30.09.2023",
        //         deviceId: deviceId
        //     }).then(res => {
        //         console.log("Device ID", res)
        //     })
        // } catch (error) {
        //     console.log("Error: Device ID", error)
        // }

        navigation.navigate("Tab")
    }

    return (
        <View style={styles.body} >
            <Image
                style={styles.logo}
                source={require("../../assets/images/onboarding.png")}
                resizeMode="cover"
            />
            <Text style={styles.text2}>
                CodeGate
            </Text>
            <TouchableOpacity onPress={handleDeviceID} style={styles.button}>
                <Text style={styles.buttonText}>İrəli</Text>
                <RightIconSVG />
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',

    },
    logo: {
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
    text: {
        fontSize: 40,
        color: '#ffffff',
    },
    text2: {
        marginTop: -200,
        fontSize: 66,
        color: '#D9D8F7',
        fontWeight: '700',
        lineHeight: 108,

    },
    button: {
        width: '95%',
        backgroundColor: '#8582E4',
        padding: 12,
        marginTop: 20,
        borderRadius: 40,
        position: 'absolute',
        bottom: 20,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'

    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: "Roboto-Bold",
    }
})