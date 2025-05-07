import { StyleSheet, Text, TextInput, View, StatusBar, Modal, Button, TouchableHighlight, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { io } from "socket.io-client";
import { TouchableOpacity } from "react-native-gesture-handler";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import data from '../../data';

const serverEndpoint = "http://192.168.1.17:3000"; 
const socket = io(serverEndpoint); 

export default function PlayOn({ navigation }) {
    const route = useRoute();
    const { roomId, categoryId, host } = route.params;
    const [questions, setQuestions] = useState([]);
    const [userCount, setUserCount] = useState(0);

    const [isGameStarted, setIsGameStarted] = useState(false);

    console.log("HOST", host);

    // avoir les info du user connecté
    const [userData, setUserData] = useState(null);
    const [notification, setNotification] = useState(null);

    useEffect(() => {
    async function getInfo() {
        const token = await AsyncStorage.getItem('token');
        console.log('TOKEN est passé pour PlayOn', token);
        

        if (!token) {console.error("Token est manquant !");            
            return; 
        }

        try {
            const res = await axios.post("http://192.168.1.17:3000/api/auth/userdata/", { token });
            console.log("Données utilisateur reçues:", res.data);
            setUserData(res.data.data);
        } catch (error) {
            console.error("Error fetching user data", error);
        }

        };

        getInfo();
    }, []);



 // compter les utilisateur


 


    useEffect(() => {
        if (userData) {
            // Écouter l'événement userJoined pour afficher l'alerte
            const handleUserJoined = ({ userName }) => {
                Alert.alert(
                    "Nouvel Utilisateur",
                    `${userName} a rejoint la partie!`,
                    [{ text: "OK", onPress: () => console.log("Alert dismissed") }],
                );
            };
    
            socket.on("userJoined", handleUserJoined);
    
/*             // Émettre l'événement pour rejoindre la salle
            socket.emit("joinRoom", { roomId, userName: userData.name }); */

            // Émettre l'événement pour rejoindre la salle
            socket.emit("joinRoom", { roomId, userName: userData.name, userId: userData._id });

            // compter les utilisateur
            socket.on("userCountUpdated", (count) => {
                setUserCount(count);
                console.log("USERCOUNT", count);
                if (count > 1  && !isGameStarted) {
                  //  fetchData(); // Récupérer les questions lorsque deux utilisateurs sont présents
                        whloeRender();
                        setIsGameStarted(true);
                } 
            });

            socket.on("userFinished", ({ userId }) => {
                setFinishedUsers((prev) => [...new Set([...prev, userId])]); 
            });
    
            // Nettoyage de l'effet, enlever l'écouteur
            return () => {
                socket.off("userFinished");
                socket.emit("leaveRoom", { roomId, userId: userData._id });
                socket.off("userJoined", handleUserJoined);
                socket.off("userCountUpdated");
                // Ne pas déconnecter le socket ici
            };
        }
    
        return () => {
            
            // Déconnexion lors du démontage du composant
           // socket.disconnect();
        };
    }, [userData, roomId]);


    //Fetch questions

/*     const fetchData = async () => {
        const amount = 10; // Par exemple, le nombre de questions que vous voulez
        const url = `https://opentdb.com/api.php?amount=${amount}&category=${categoryId}`;

        try {
            const response = await axios.get(url);
            console.log("Données récupérées:", response.data);
            setQuestions(response.data.results);
            // Traitez les données ici
        } catch (error) {
            console.error("Erreur lors de la récupération des données:", error);
        }
    }; */

    //questions from data

    const allQuestions = data;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [score, setScore] = useState(0)
    const [showNextButton, setShowNextButton] = useState(false)
    const [showScoreModal, setShowScoreModal] = useState(false)

    const [finishedUsers, setFinishedUsers] = useState([]);


    const [counter, setCounter] = useState(10);

// interval

let interval = null;


const whloeRender = () => { 

    startGame();
}


const startGame = () => {
    // Initialisez des états comme currentQuestionIndex, score, etc.
    setCurrentQuestionIndex(0);
    setScore(0);
    setCurrentOptionSelected(null);
    setCorrectOption(null);
    setIsOptionsDisabled(false);
    setShowNextButton(false);
    setCounter(10);
    setFinishedUsers([])
    setShowScoreModal(false);
};


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
        setShowNextButton(true);

    }

    const handdleNext = () => {
        if(currentQuestionIndex === allQuestions.length-1) {
            socket.emit("userFinished", { roomId, userId: userData._id });
            setFinishedUsers((prev) => [...prev, userData._id]);

            setShowScoreModal(true)
            clearTimeout(interval)
            
        }else{
            setCurrentQuestionIndex(currentQuestionIndex+1);
            setCurrentOptionSelected(null);
            setCorrectOption(null);
            setIsOptionsDisabled(false);
            setShowNextButton(false);
        }
    };


    useEffect(() => {
        socket.on("userFinished", ({ userId }) => {
            setFinishedUsers((prev) => [...prev, userId]); 
        });
    
        return () => {
            socket.off("userFinished");
        };
    }, []);

const restartQuiz = () => {
//setShowScoreModal(false);

setCurrentQuestionIndex(0);
setScore(0);

setCurrentOptionSelected(null);   
setCorrectOption(null);
setIsOptionsDisabled(false);
setShowNextButton(false);
}


    const renderQuestion = () => {
        return (
            <View style={styles.questionContainer}>
                {/* Compteur de Questions */}
                <View style={styles.questionCounter}>
                    <Text style={styles.textQuestion}>{currentQuestionIndex + 1}</Text>
                    <Text style={styles.totalQuestions}>/ {allQuestions.length}</Text>
                </View>

                {/* Question */}
                <Text style={styles.questionText}>{allQuestions[currentQuestionIndex]?.question}</Text>
            </View>
        );
    }

        const renderOption = () => {
            return (
                <View style={styles.optionsContainer}>
                    {allQuestions[currentQuestionIndex]?.options.map(option => {
                        // Déterminer le style de l'option basée sur la sélection
                        const isCorrect = option === correctOption;
                        const isSelected = option === currentOptionSelected;

                        // Définir le style de l'option
                        const optionStyle = [
                            styles.optionButton,
                            isCorrect && isSelected ? styles.correctOption : {},
                            !isCorrect && isSelected ? styles.incorrectOption : {}
                        ];

                        return (
                            <TouchableOpacity 
                                style={optionStyle}
                                key={option}
                                onPress={() => validateAnswer(option)}
                                disabled={isOptionsDisabled}
                            >
                                <Text style={styles.optionText}>{option}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            );
        }


const renderNextButton = () => {
if (showNextButton) {
    return (
        <TouchableOpacity style={styles.nextButton} onPress={handdleNext}>
            <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
    );
}
return null;
}

/* Gestion du Timer */
        useEffect(() => {
            if (!isGameStarted) return;

            const myInterval = () => {
                if(counter >= 1) {
                    setCounter((counter) => counter - 1);
                }
                if(counter === 0 && currentOptionSelected !=null) {
                    setCurrentQuestionIndex(currentQuestionIndex+1);

                    if (currentQuestionIndex < allQuestions.length - 1){
                        setCurrentQuestionIndex(currentQuestionIndex + 1);
                    } else {
                        setShowScoreModal(true);
                    }

                    setCurrentOptionSelected(null);   
                    setCorrectOption(null);
                    setIsOptionsDisabled(false);
                    setShowNextButton(false);
                    setCounter(10); 
                }
                if(counter === 0) {
                    if (currentQuestionIndex < allQuestions.length - 1) {
                        setCurrentQuestionIndex(currentQuestionIndex + 1);
                    } else {
                        setShowScoreModal(true); // Afficher la modal des scores
                    }
                }
            }

                interval = setTimeout(myInterval,1000);

                // clean up 
                return () => {
                    clearTimeout(interval);
                };

        }, [counter, isGameStarted, currentQuestionIndex, allQuestions.length])



    useEffect(() => {
        if (allQuestions.length > 0 && currentQuestionIndex + 1 > allQuestions.length) {
            setShowScoreModal(true);
            setCounter(null);
            clearTimeout(interval);
        }
        }, [currentQuestionIndex, allQuestions]);

        useEffect(() => {
        if (isGameStarted) {
            setCounter(10);
        }
    }, [currentQuestionIndex, isGameStarted]);

    const saveScore = async (score) => {
        const token = await AsyncStorage.getItem('token');
        if (!token) {
            console.error("Token manquant !");
            return;
        }

        try {
            const response = await axios.post("http://192.168.1.17:3000/api/auth/save-score", { token, score });
            console.log("Réponse de sauvegarde :", response.data);

            //deconnexion du user
            socket.emit("leaveRoom", { roomId, userId: userData._id }); // Émettre l'événement de déconnexion

            navigation.navigate('Welcome');


        } catch (error) {
            console.error("Erreur lors de la sauvegarde du score :", error.response ? error.response.data : error.message);
        }
        
    }

    

// Loader

const Loader = () => (
    <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>En attente d'un autre utilisateur...</Text>
    </View>
);

// Affichez le loader si le nombre d'utilisateurs est 1
if (userCount === 1) {
    return <Loader />;
}





return (
    <View style={styles.container}>
        <Text style={styles.title}>PlayOn</Text>
        <Text style={styles.infoText}>Room ID: {roomId}</Text>
        <Text style={styles.infoText}>Category ID: {categoryId}</Text> {/* Affichez l'ID de la catégorie pour vérification */}


   {/*      <ScrollView>
            {questions.map((question, index) => (
                <Text key={index} style={styles.questionText}>
                    {question.question} 
                </Text>
            ))}
        </ScrollView>
 */}


    {/* Notification */}
    {notification && (
        <View style={styles.notification}>
            <Text style={styles.notificationText}>{notification}</Text>
        </View>
    )}

    <StatusBar style={styles.barStyle} />
    
    <View style={styles.mainStyle}>
        {/* Question */}
        {renderQuestion()}

        {/* Options */}
        {renderOption()}

        {/* Bouton Suivant */}
        {renderNextButton()}

        {/* Compte à rebours */}
        <Text style={styles.counterText}>{counter}</Text>

        {/* Modal des Scores */}
        <Modal
            animationType="slide"
            transparent={true}
            visible={showScoreModal}
        >
            <View style={styles.modalContainer}>
                <View style={styles.resultContainer}>
                    <Text style={styles.resultMessage}>
                        {score > (allQuestions.length / 2) ? 'Congratulations!' : 'Oops!'}
                    </Text>
                    <View style={styles.finalScoreContainer}>
                        <Text style={styles.finalScore}>{score}</Text>
                        <Text>/ {allQuestions.length}</Text>
                    </View>
                    {/* Bouton pour revenir à la page d'accueil */}
                    {finishedUsers.length === userCount && (
                    <Button title="Back to welcome page" style={styles.buttonStyle} onPress={() => saveScore(score)} />
                    )}
                </View>
            </View>
        </Modal>
    </View>
 
    </View>
);


    //Logique pour le rendu des questionnpm



    //



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#282c34',
        padding: 20,
    },
    title: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    questionContainer: {
        marginBottom: 20,
        backgroundColor: '#444',
        padding: 15,
        borderRadius: 10,
    },
    questionCounter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    textQuestion: {
        fontSize: 18,
        color: '#fff',
    },
    totalQuestions: {
        fontSize: 18,
        color: '#fff',
    },
    questionText: {
        fontSize: 20,
        color: '#fff',
    },
    optionsContainer: {
        marginVertical: 20,
    },
    optionButton: {
        backgroundColor: '#555',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
    },
    optionText: {
        fontSize: 18,
        color: '#fff',
    },
    correctOption: {
        backgroundColor: 'green', // Couleur de fond pour l'option correcte
    },
    incorrectOption: {
        backgroundColor: 'red', // Couleur de fond pour l'option incorrecte
    },
    nextButton: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    nextButtonText: {
        color: '#fff',
        fontSize: 18,
    },
    counterText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    resultContainer: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    resultMessage: {
        fontSize: 20,
        marginBottom: 10,
    },
    finalScoreContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: 20,
    },
    finalScore: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    buttonStyle: {
        backgroundColor: '#007bff',
        marginTop: 10,
    },
    notification: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        position: 'absolute',
        top: 40,
        left: 20,
        right: 20,
        zIndex: 1,
    },
    notificationText: {
        color: '#fff',
        textAlign: 'center',
    },
});