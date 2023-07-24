import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Petite maquette de Cine Jeu </Text>
      <StatusBar style="auto" />
    </View>
  );
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 */


/* "start": "expo start", 
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web", */



    // la page Question qui imbrique Quizz
 
    import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
//import { NativeRouter, Route, Link } from "react-router-native";
import Quiz from "./quiz";



export default function Question() {
  return (
    <View style={styles.container}>
       {/*  <Text> VOICI LA PAGE DES QUESTIONS </Text>

        <TextInput 
      style={styles.textdata} 
      placeholder='text à afficher' 
      defaultValue=""
     /> */}

<Quiz/>

    </View>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 



//Api connection

export const LogInScreen = (credentials, history, setFieldError,
     setSubmitting) => {
        Axios.post("http://localhost:3000/api/auth/login/",
        credentials,
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
        ).then((response) => {
            const{data} = response;
            console.log("Données", data );

            if (data.status ==="FAILED") {
                const {message} = data;

                //check for specific error
                if (message.includes("credentials")) {
                    setFieldError("email", message);
                    setFieldError("password", message);
                } else if (message.includes("password")) {
                    setFieldError("password", message);
                }
            } else if (data.status === "SUCCESS") {
                const userData = data.data[0];

                const token = userData._id;

                   //session service


            }
        }).catch(err => console.error(err))

        const user = {
            "email": "gee@gmail.com",
            name: "George"
        }
        const status = true;

        if (status === true) {
            //allow access and redirect
        } else{
            //return error to the user
        }
     }


     // POUR API

/*     export const LogInScreen = (data) => {
      Axios.post("http://localhost:3000/api/auth/login/", 
      data,
      {
         headers: {
             "Content-Type": "application/json"
         }
      }).then((response) => {
         const {data} = response;
 
         if (data.token == '') {
             console.log(data.token)
             //const {message} = data;
             throw new Error('Error during the login process');
             //alert ('ca ne passe pas');
         } 
      })
      
      
 }
      */

     /* fetch('http://192.168.1.14:3000/api/getTweet') */


/* const [tweet, setTweet] = useState("");
const getTweet = async() => {
 const response= await Axios.get("http://192.168.1.14:3000/api/getTweet"); //Ca marche
 http://192.168.1.14:3000/api/api/auth/login/
 setTweet(response.data);
}

useEffect(() => {
 getTweet()
}, []); 
 */