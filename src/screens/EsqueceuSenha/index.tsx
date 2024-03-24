import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import { StackTypes } from '../../routes/stack';
import UserService from '../../services/UserService/UserService';

const EsqueceuSenha = () => {
  const [email, setEmail] = useState<string>('');

  const userService = new UserService();

  const navigation = useNavigation<StackTypes>();

  const handleNavegarLogin = () => {
    navigation.navigate('Login');
  };

  const handleEsqueceuSenha = async () => {

    const user = await userService.forgotPassword(email);

    if (user) {
      alert('Email de recuperação de senha enviado com sucesso ');
    } else {
      alert('Email inválidos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Esqueceu a senha</Text>
      <Image
    style={styles.imageStyle}
    source={require('../../../assets/coelinhotriste2.png')}
  />

      <TextInput
        style={[styles.input]}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TouchableOpacity onPress={handleEsqueceuSenha} style={styles.button} activeOpacity={0.1}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleNavegarLogin} style={styles.button} activeOpacity={0.1}>
        <Text style={styles.buttonText}>Ir para login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEDBB5', // Mesma cor de fundo da tela de Login
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#37474F', // Um azul escuro acinzentado para o título
    textAlign: 'center',
    marginTop: 20, // Aumente este valor conforme necessário para descer o texto
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#D3A46F', // Mesma cor da borda dos inputs da tela de Login
    backgroundColor: '#FFFAF2', // Mesmo fundo dos inputs da tela de Login
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 20,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#5C3A21', // Mesma cor do texto dos inputs da tela de Login
  },
  button: {
    width: '80%',
    height: 50,
    borderRadius: 20,
    backgroundColor: '#C17C54', // Mesma cor do botão da tela de Login
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#2D2926', // Mesma sombra do botão da tela de Login
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  buttonText: {
    color: '#FFF7EB', // Mesmo texto do botão da tela de Login
    fontSize: 18,
    fontWeight: '600',
  },

  imageStyle: {
    width: 120, // Tamanho aumentado para que a imagem seja mais destacada
    height: 120, // Tamanho aumentado para que a imagem seja mais destacada
    borderRadius: 60, // Metade da largura/altura para manter a forma circular
    alignSelf: 'center',
    marginTop: 5, // Aumente esta margem para diminuir a proximidade com o texto "Login"
    marginBottom: 20, // Adicionado para dar espaço antes dos campos de entrada
  },

});

export default EsqueceuSenha;