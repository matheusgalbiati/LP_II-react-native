import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ListaPessoaComponent from '../components/PessoaListComponent'

const PessoaListTela = ({navigation}) => {
  return (
    <View>
      <ListaPessoaComponent navigation={navigation}/>
    </View>
  )
}

export default PessoaListTela

const styles = StyleSheet.create({})