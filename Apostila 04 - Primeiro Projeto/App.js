import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';

// export default function App() {
//   const [outputText, setOutputText] = useState('Texto Inicial');
//   return (
//     <View style={styles.container}>
//       <Text>{outputText}</Text>
//       <StatusBar style="auto" />
//       <Button title="Alterar texto" onPress={() => setOutputText("Novo Texto")}></Button>
//     </View>
//   );
// }

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {contador: 0}
  }
  render () {
    return (
      <View>
        <Text>{this.state.contador}</Text>
        <Button title="Alterar texto" onPress={() => {this.setState({contador: this.state.contador + 1})}}></Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

