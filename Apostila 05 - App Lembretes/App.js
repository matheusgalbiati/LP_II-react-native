import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [lembrete, setLembrete] = useState("");
  const [lembretes, setLembretes] = useState([]);

  //captura o texto digitado
  const capturaLembrete = (lembrete) => {
    setLembrete(lembrete)
  };

  //para adicionar o que foi digitado
  const adicionarLembrete = () => {
    setLembretes(lembretes => [...lembretes, lembrete]);
    console.log(lembretes)
  }
  return (
    <View style={styles.telaPrincipalView}>
      <View style={styles.lembreteView}>
        {/* usuário irá inserir lembretess aqui */}
        <TextInput 
          placeholder='Lembrar...' 
          style={styles.lembreteInputText}
          onChangeText={capturaLembrete}
          value={lembrete}></TextInput>
        <Button title="+" onPress={adicionarLembrete}></Button>
      </View>
      <View>
        {/* aqui será exibida a lista de lembretes */}
        {/* <ScrollView>
          {lembretes.map((lembrete) => 
            <View key={lembrete} style={styles.itemNaLista}><Text>{lembrete}</Text></View>
          )}
        </ScrollView> */}
        {/*substuir o ScrollView e todo o seu conteúdo*/}
        <FlatList 
          data={lembretes} /*coleção de lembretes */
          renderItem={ /*mapeamento */
            lembrete => (/*dado um lembrete, gera uma view */
              <View style={styles.itemNaLista}>
                <Text>{lembrete.item}</Text>
              </View>
            )
          }>
        </FlatList>
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

const styles = StyleSheet.create({
  telaPrincipalView: {
    padding: 50
  },
  lembreteView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center"
  },
  lembreteInputText: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 2
  },
  itemNaLista: {
    padding: 12,
    backgroundColor: '#CCC',
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8
  }
});