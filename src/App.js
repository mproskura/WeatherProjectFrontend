import './App.css';
import SearchBox from "./components/SearchBox";
import MyMap from "./components/Map";
import ServiceLogo from "./components/ServiceLogo";


function App() {

    return (
        <div className="App">
            <SearchBox/>
            {/*<ServiceLogo weatherSource={"1"}/>*/}
        </div>
    );
}

export default App;
