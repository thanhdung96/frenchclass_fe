import { Text, View } from 'react-native';
import { Input } from './src/components/input/input';

export default function App() {
  const doHello = () => {
    console.log('hello');
  };


  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Open up App.js to start working on your app!</Text>
      <Input placeholder='dbadwadaw' />
    </View>
  );
};
