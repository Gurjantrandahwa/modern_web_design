import './App.scss';
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Brand from "./Components/Brand/Brand";
import AI from "./Components/AI/AI";
import Future from "./Components/Future/Future";

function App() {
    return <div className={"app"}>
        <div className={"gradient_bg"}>
            <Navbar/>
            <Header/>
        </div>
        <Brand/>
        <AI/>
        <Future/>
    </div>
}

export default App;
