import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useAuth } from '../context/AuthContext';
// API POST removida - dados salvos no AuthContext
import CustomButton from '../components/CustomButton';

const RegisterScreen = ({ navigation }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { login, register, isLoading } = useAuth();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    if (!isLogin && !formData.name.trim()) {
      Alert.alert('Erro', 'Nome é obrigatório');
      return false;
    }

    if (!formData.email.trim()) {
      Alert.alert('Erro', 'Email é obrigatório');
      return false;
    }

    if (!validateEmail(formData.email)) {
      Alert.alert('Erro', 'Email inválido. Deve conter @ e um domínio válido (ex: .com, .br)');
      return false;
    }

    if (!formData.password.trim()) {
      Alert.alert('Erro', 'Senha é obrigatória');
      return false;
    }

    if (formData.password.length < 6) {
      Alert.alert('Erro', 'Senha deve ter pelo menos 6 caracteres');
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    if (isLogin) {
      const result = login(formData);
      if (result.success) {
        Alert.alert('Sucesso', 'Login realizado com sucesso!');
        navigation.navigate('Home');
      } else {
        Alert.alert('Erro', result.message);
      }
    } else {
      const result = await register(formData);
      if (result.success) {
        Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
        navigation.navigate('Home');
      } else {
        Alert.alert('Erro', result.message);
      }
    }
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FFD700" />
        <Text style={styles.loadingText}>Carregando...</Text>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>
          {isLogin ? 'Entrar' : 'Cadastrar'}
        </Text>

        {!isLogin && (
          <TextInput
            style={styles.input}
            placeholder="Nome completo"
            placeholderTextColor="#CCCCCC"
            value={formData.name}
            onChangeText={(text) => setFormData({ ...formData, name: text })}
          />
        )}

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#CCCCCC"
          value={formData.email}
          onChangeText={(text) => setFormData({ ...formData, email: text })}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha (mín. 6 caracteres)"
          placeholderTextColor="#CCCCCC"
          value={formData.password}
          onChangeText={(text) => setFormData({ ...formData, password: text })}
          secureTextEntry
        />

        <CustomButton
          title={isLogin ? 'Entrar' : 'Cadastrar'}
          onPress={handleSubmit}
        />

        <CustomButton
          title={isLogin ? 'Não tem conta? Cadastre-se' : 'Já tem conta? Entre'}
          onPress={() => setIsLogin(!isLogin)}
          variant="secondary"
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A2E',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFD700',
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    backgroundColor: '#16213E',
    color: '#FFFFFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A1A2E',
  },
  loadingText: {
    color: '#FFFFFF',
    marginTop: 10,
    fontSize: 16,
  },
});

export default RegisterScreen;