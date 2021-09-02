import ReactDOM from "react-dom";
import "./index.css";

// Import Components
import SideBar from "./Components/SideBar/SideBar";
import Main from "./Components/Main/Main";

const App = () => {
  return (
    <div class="container bootstrap snippets bootdeys bootdey">
      <div class="row decor-default">
        <SideBar />
        <Main />
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));