import AuthProvider from "./components/provider/AuthProvider";
import Routes from "./components/routes";

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
