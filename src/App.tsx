import AuthProvider from "./components/provider/AuthProvider";
import Routes from "./index.jsx";
import AdminHomeBooks from './pages/AdminHomeBooks';

function App() {
  return (
    // <AuthProvider>
    //   <Routes />
    // </AuthProvider>
    <AdminHomeBooks />
  );
}

export default App;
