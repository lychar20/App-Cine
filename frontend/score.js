import React, { useState, useEffect } from "react";
import {StyleSheet, Text, TextInput, View, SafeAreaView, StatusBar, Modal, Button, TouchableHighlight} from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import data from "./data";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import StopTime from "./stopTime";


export default function Score () {

    <Modal
            animationType="slide"
            transparent={true}
            visible={showScoreModal}
            >
                <View style={styles.designresult} >

                    <View style={styles.result} >
                        <Text style={styles.result2} > { score> (allQuestions.length/5) ? 'Congratulations!' : 'Oops!' } </Text>

                        <View style={styles.final} >
                        <Text style={styles.final2} > {score} </Text>
                        <Text> /{allQuestions.length} </Text>

                        

                        </View>
                        {/* Retry Quiz button */}

                         <Button title="Retry Quiz" style={styles.design2}   onPress={restartQuiz}> 
                           
                         {/* <Text style={styles.retrydesign} > Retry Quiz </Text> */}

                         </Button> 

                    </View> 

                </View>
            </Modal>

}