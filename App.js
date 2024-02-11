import { View } from 'react-native';
import { LoginForm } from '@/screens/security/LoginForm';

export default function App() {
  return (
    <View className="flex-1 justify-center bg-white mx-8">
      <LoginForm />
    </View>
  );
};
