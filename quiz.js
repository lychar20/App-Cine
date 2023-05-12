import React, { useState } from "react";
import {StyleSheet, Text, TextInput, View, SafeAreaView, StatusBar, Modal, Button } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import data from "./data";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Quiz () {

    const allQuestions = data;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [score, setScore] = useState(0)
    const [showNextButton, setShowNextButton] = useState(false)
    const [showScoreModal, setShowScoreModal] = useState(false)


    const validateAnswer = (selectedOption) => {
        let correct_option = allQuestions[currentQuestionIndex]['correct_option'];
        setCurrentOptionSelected(selectedOption);
        setCorrectOption(correct_option);
        setIsOptionsDisabled(true);
        if(selectedOption==correct_option){
            // Set Score
            setScore(score+1)
        }
        // Show Next Button
        setShowNextButton(true)
    }

    const handdleNext = () => {
        if(currentQuestionIndex== allQuestions.length-1){
            //last Question
            //Show Score Modal
            setShowScoreModal(true)
        }else{
            setCurrentQuestionIndex(currentQuestionIndex+1);
            setCurrentOptionSelected(null);
            setCorrectOption(null);
            setIsOptionsDisabled(false);
            setShowNextButton(false);
        }
    }

    const restartQuiz = () => {
        setShowScoreModal(false);

        setCurrentQuestionIndex(0);
        setScore(0);

        setCurrentOptionSelected(null);   
        setCorrectOption(null);
        setIsOptionsDisabled(false);
        setShowNextButton(false);
    }

    const renderQuestion = () => {
        return (
            <View>
            {/* Question Counter */}
            <View style={styles.question}>
                <Text style={styles.textquestion}>{currentQuestionIndex+1}</Text>
                <Text style= {styles.total}>/ {allQuestions.length}</Text> 
            </View>

            {/* Question */}
            <Text style={styles.sizequestion}>{allQuestions[currentQuestionIndex]?.question}</Text>
        </View>
        )

    }

    const renderOption = () => {
        return (
            <View>
                 {
                    allQuestions[currentQuestionIndex]?.options.map(option => (
                        <TouchableOpacity style={styles.effect}
                        key={option}
                        onPress={()=> validateAnswer(option)}
                        disabled={isOptionsDisabled} 
                        >
                            <Text style={styles.optionquestion} > {option} </Text>

                        {/* Show Check or cross icon based on correct answer */}
                        {
                            option==correctOption ? (
                                <View>
                                    <MaterialCommunityIcons name="check" style={styles.iconcheck} />

                                </View>
                            ): option == currentOptionSelected ? (
                                <View style={styles.designclose} >
                                    <MaterialCommunityIcons name="close"  style={styles.closeicon} />
                                </View>
                            ) : null
                        }

                        </TouchableOpacity>
                    ))
                 }
                    
                
            </View>
               
            
        )
    }

    const renderNextButton = () => {
        if(showNextButton){
            return (
                <TouchableOpacity style={styles.next2} onPress={handdleNext} >
                    <Text style={styles.designnext}>Next</Text>
                </TouchableOpacity>
            )
        }else{
            return null
        }
    }

    return (
       <SafeAreaView style={styles.container}>

        <StatusBar style={styles.barStyle} />

        <View style={styles.mainstyle}>
            {/* <Text style={styles.line} >Salut je m'appelle charly</Text> */}


            {/* Progress Bar */}

            {/*  Question */}
            {renderQuestion()}

            {/* Options */}
            {renderOption()}

            {/* Next Button */}
            {renderNextButton()}

            {/* Score Modal */}
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

            {/* Background Image */}

        </View>

       </SafeAreaView>
    )
}




const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    mainstyle: {
        flex: 1,
        paddingVertical: 40,
        paddingHorizontal: 100,
        backgroundColor: "purple",
        position: "relative",
        //alignItems: 'center',
        //justifyContent: 'center',
        justifyContent: 'flex-start',
        
        
    },
     line: {
        
        backgroundColor: "blue",
    }, 
    question: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    textquestion: {
        color: "white",
        fontSize: 20,
        opacity: 0.6,
        marginRight: 2,
    },
    total: {
        color: "white",
        fontSize: 18,
        opacity: 0.6,
        //marginRight: 2,
    },
    sizequestion: {
        color: "white",
        fontSize: 15,
    },
    optionquestion: {
        fontSize: 13,
        color: 'white',
    },
    effect: {
        borderWidth: 3, borderColor: "grey",
        backgroundColor: "grey" +20,
        height: 60, borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    iconcheck: {
        color: "white",
        fontSize: 20,
    },
    closeicon: {
        color: "white",
        fontSize: 20
    },
    designclose: {
        width: 30,
        height: 30,
        borderRadius: 30/2,
        backgroundColor: "red",
        justifyContent: 'center',
        alignItems: 'center',
    },
    designnext:{
        fontSize:20,
        color: "white",
        textAlign: 'center',
    },
    next2: {
        marginTop: 20,
        width: '100%',
        backgroundColor: 'blue',
        padding: 20,
        borderRadius: 5,
    },
    result: {
        backgroundColor: "white",
        width: '90%',
        borderRadius: 20,
        padding:20,
        alignItems: 'center',
        
    },
    result2: {
        fontSize: 25,
        fontWeight: "bold",
    },
    designresult: {
        flex: 1,
        //backgroundColor: "brown",
        alignItems: 'center',
        justifyContent: 'center'
    },
    final: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: 'center',
        marginVertical:20,
    },
    final2: {
        fontSize: 30,
        color: 'red',
    },
    design2: {
        backgroundColor: "yellow",
        width: "100%",
        borderRadius: 20,
        padding: 20,
        //zIndex: 2,
    },
    retrydesign: {
        textAlign: 'center',
        color: "black",
        fontSize: 20,
    }
  });