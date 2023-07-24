import { Button, Modal, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState, useEffect } from "react";

//import 'react-datepicker/dist/react-datepicker.css';
import { TouchableOpacity } from "react-native-gesture-handler";

import DatePicker from 'react-native-modern-datepicker';

import Axios from "axios"

export default function Calendrier () {
   const [open, setOpen] = useState(false); // Open and close the modal
  const [date, setDate] = useState(undefined); // date variable
 
  
  
    //const [date, setDate] = useState(new Date());
   //const [open, setOpen] = useState(false);
   const [birthDate, setBirthDate] = useState(undefined); 
   



   function handelOnPress () {
    setOpen(!open);
  } 

   function handelChange (date) {
    setDate(date)
    
  }

 console.log(date); 
 console.log (birthDate);


 // Test API

    const [tweet, setTweet] = useState("");
 const getTweet = async() => {
  const response= await Axios.get("http://192.168.1.14:3000/api/getTweet"); //Ca marche
  setTweet(response.data);
 }

 useEffect(() => {
  getTweet()
 }, []);  
 
 // Autre



/*   const [tweet, setTweet] = useState([]);
  const getTweet = () => {
    fetch("http://192.168.1.14:3000/api/getTweet")
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setTweet(myJson);
      });
  };
  useEffect(() => {
    getTweet();
  }, []);  */

  // Autre

  /* const [tweet, setTweet] = useState("");

useEffect(() => {
  const getTweet = async () => {

    const url = "http://192.168.1.14:3000/api/getTweet";
    const res = await fetch(url);
    console.log(res);
  };
  getTweet();
}, []);  */

/* const [tweet, setTweet] = useState("");
      const getTweet = async () => {
        const url = 'http://192.168.1.14:3000/api/getTweet'
        const response = await fetch(url)
        setTweet(response.data);
        console.log( "ICI",  data)
        console.log("POURQUOI", response);
      }

      useEffect(() => {
      getTweet()
    }, []);  */


    // autre 

/*     let getTweet = () => {
      fetch('http://192.168.1.14:3000/api/getTweet')
      .then(res => {
        console.log("CA MARCHE", res.status);
        console.log('hello');
        //return res.json();
      })
      .then(
        (result) => {
          console.log("PAS DE RESULTAT", result);
        },
        (error) => {
          console.log(error);
        }
      )
    };
  */

 // Test API
 
  return (
    <SafeAreaView style={styles.container}>

<Button title='Open' onPress={handelOnPress} >
    
   </Button>

   <Text>
    {birthDate === undefined ? 'Date de naissance' : birthDate }
   </Text>

   <Text>
   {date === undefined ? 'Pas de date' : date}
   </Text>

   <Text> ESSAY  {tweet}  </Text>

    <Modal 
      animationType= 'slide'
      transparent={true}
      visible={open}>
      
      <View style={styles.centeredView}>
        <View style={styles.modalView}>

           <DatePicker style={styles.temps}
          mode='calendar'
          selected={date}
          onDateChange={handelChange}
          current="2020-07-13"  // to set a maximum and a minimum date you need to put a current date
          minimumDate="2005-01-01"
          maximumDate="2020-07-25"
          


          /> 

 <DatePicker
        modal
        open={open}
        date={date}
        mode={'date'}
       /*  minimumDate={new Date('1999-01-01')}
        maximumDate={new Date('2012-01-01')} */
        onConfirm={(date) => {
          setOpen(false);
          setDate(date);
          setBirthDate(date.toDateString());
        }}
        onCancel={() => {
          setOpen(false);
        }}
      /> 



   <Button title='Close' onPress={handelOnPress} >
    
   </Button>

   
  
   

        </View>

        
      </View>
     
    </Modal>

    </SafeAreaView>
  )
 

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '90%',
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  temps : {
    color: "red",
    fontSize: 55,
    backgroundColor: "yellow",
  },

});
