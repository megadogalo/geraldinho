import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

<Text style={styles.titulo}> Mylene Cavalcanti </Text>
<StatusBar style="auto" />


       <Image
        source={require('./assets/mylene.jpeg')}
        style={styles.imagem}
      />
    

      <TouchableOpacity onPress={() => console.log('Botão pressionado')}>
      <Text style={styles.bio}>Sobre mim</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => console.log('Botão pressionado')}>
      <Text style={styles.bio}>Sobre mim</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => console.log('Botão pressionado')}>
      <Text style={styles.bio}>Sobre mim</Text>
      </TouchableOpacity>

      
    
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0014',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imagem: {
  width: 200,
  height: 200,
  borderRadius:40,
  marginBottom:20
  },

  
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#a34a0f'
  },

  bio: {
    marginTop: 15,
    color: '#a34a0f',
    fontWeight: 'bold',
    fontSize: 20
  },

});

