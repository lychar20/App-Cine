import {ButtonComponent} from '../common';
import {StyleSheet} from 'react-native';


export default function CreateNewGameButton( { navigation } ) {
    
  
    return (
      <ButtonComponent
        title="Create New"
        style={styles.createNewButton}
         onPress={() => navigation.navigate('AssezCRelou')} 

      />
    )
  }

  const styles = StyleSheet.create({
    createNewButton: {
      marginRight: 20,
    },
  });