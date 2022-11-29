import './App.scss';
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Brand from "./Components/Brand/Brand";
import AI from "./Components/AI/AI";

function App() {
    return <div className={"app"}>
        <div className={"gradient_bg"}>
            <Navbar/>
            <Header/>
        </div>
        <Brand/>
        <AI/>
    </div>
}

export default App;
