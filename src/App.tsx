import AuthProvider from "./components/Provider/AuthProvider";
import Routes from "./components/Routes/Routes";
import Login from "./pages/Login";

const App = () => {
    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    )

};

export default App;
