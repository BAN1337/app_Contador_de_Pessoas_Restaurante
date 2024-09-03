import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'

export default function App() {

  const [quantPessoas, setQuantPessoas] = useState(0)
  let limitePessoa = 10

  function adicionar() {
    if (quantPessoas < limitePessoa) {
      setQuantPessoas(quantPessoas + 1)
    }
  }

  function remover() {
    if (quantPessoas > 0) {
      setQuantPessoas(quantPessoas - 1)
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar />

      <Text style={styles.textPessoas}>Pessoas no restaurante:</Text>

      <View style={styles.contadorArea}>
        <Text style={styles.contadorText}> {quantPessoas} </Text>
      </View>

      {quantPessoas >= limitePessoa && (
        <Text style={styles.lmtPessoasText}>
          Restaurante está no seu limite de pessoas.
        </Text>
      )}

      <View style={styles.btnArea}>
        <Pressable
          disabled={quantPessoas === limitePessoa}
          style={[
            styles.botao,
            quantPessoas === limitePessoa && { backgroundColor: '#DDD' }
          ]}
          onPress={adicionar}>
          <Text style={styles.btnText}>Adicionar</Text>
        </Pressable>

        <Pressable
          disabled={quantPessoas === 0}
          style={[
            styles.botao,
            quantPessoas === 0 && { backgroundColor: '#DDD' }
          ]}
          onPress={remover}>
          <Text style={styles.btnText}>Remover</Text>
        </Pressable>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textPessoas: {
    fontSize: 20
  },
  contadorArea: {
    backgroundColor: 'black',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    borderRadius: 10
  },
  contadorText: {
    color: '#fff',
    fontSize: 30
  },
  lmtPessoasText: {
    backgroundColor: '#F9B23A',
    borderRadius: 5,
    padding: 2,
    fontSize: 16
  },
  btnArea: {
    flexDirection: 'row'
  },
  botao: {
    backgroundColor: '#1379F8',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderRadius: 6
  },
  btnText: {
    fontSize: 18,
    color: '#fff'
  }
});