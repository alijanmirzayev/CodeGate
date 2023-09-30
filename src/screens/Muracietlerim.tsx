import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import MuracietCard from '../components/MuracietCard'
import NoMuraciet from '../components/NoMuraciet'
import { MURACIETLERI } from '../data/fakeMuracietler'
import { RadioButton } from 'react-native-paper';
import axios from 'axios';

const Muracietlerim = ({route}) => {

  return (
    <SafeAreaView style={styles.container}>

      {
        MURACIETLERI.length !== 0 ? <FlatList
          ListHeaderComponent={
            < View >
              <Text style={styles.headerText}>Müraciətlərim</Text>
            </View>
          }
          data={MURACIETLERI}
          renderItem={({ item }) => <MuracietCard item={item} />}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        /> : <NoMuraciet />
      }

    </SafeAreaView >
  )
}

export default Muracietlerim

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FAFAFA", flex: 1, paddingHorizontal: 12
  },
  headerText: { fontFamily: "Roboto-Bold", fontSize: 24, paddingTop: 40, textAlign: "center", paddingBottom: 16 }
})