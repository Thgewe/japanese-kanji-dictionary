import './App.scss';
import Layout from "./components/Layout/Layout";
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";

function App() {

    return (
        <BrowserRouter>
            <Layout>
                <AppRouter />
            </Layout>
        </BrowserRouter>
    );
}

export default App;
