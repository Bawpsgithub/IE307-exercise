import { AuthProvider } from './components/AuthContext';
import AppNavigator from './components/AppNavigator';

const App = () => {

  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
};
// 20520541 - Ngô Nhật Huy
export default App;