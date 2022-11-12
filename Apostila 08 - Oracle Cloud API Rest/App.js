import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PessoaAddTela from './telas/PessoaAddTela';
import PessoaListTela from './telas/PessoaListTela';

const Stack = createNativeStackNavigator ()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='PessoaList'>
        <Stack.Screen name='PessoaAdd' component={PessoaAddTela}/>
        <Stack.Screen name='PessoaList' component={PessoaListTela}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}