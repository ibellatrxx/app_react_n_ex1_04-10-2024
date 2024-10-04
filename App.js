import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-web';

export default function App() {
  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="white"/>
    <SafeAreaView style={styles.conteudo}>
    <View style={styles.container}>
      <Text style={styles.titulo}>Hello word!!</Text>
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderWidth: 5,
    borderColor: 'red',
    margin: 10,
    marginTop: 30,
    borderRadius: 20,
  },
  titulo: {
  fontSize: 24,
  fontWeight: 'bold',
  color: 'blue',
  }
});
