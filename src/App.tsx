import AuthProvider from "./components/provider/AuthProvider";
import Routes from "./components/routes/index.jsx";
import AdminHomeBooks from './pages/AdminHomeBooks';

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
