import './App.css';
import { RestOfApp } from './component/RestOfApp';
import { FirebaseProvider } from './providers/FirebaseProvider';

function App() {
  return (
    <FirebaseProvider>
      <RestOfApp />
    </FirebaseProvider>
  );
}

export default App;
