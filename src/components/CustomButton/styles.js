import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  primary: {
    backgroundColor: '#FFD700',
  },
  secondary: {
    backgroundColor: '#16213E',
    borderWidth: 1,
    borderColor: '#FFD700',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  primaryText: {
    color: '#1A1A2E',
  },
  secondaryText: {
    color: '#FFFFFF',
  },
  disabled: {
    backgroundColor: '#666666',
    opacity: 0.6,
  },
});