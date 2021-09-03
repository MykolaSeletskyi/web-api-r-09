import ReactDOM from "react-dom";
import { Component } from "react";
import "./index.css";

// Import Components
import SideBar from "./Components/SideBar/SideBar";
import Main from "./Components/Main/Main";

class App extends Component {

  state = {
    ContactList: [
      {
        Name: "Alexander Verdnam",
        Image: "https://bootdey.com/img/Content/avatar/avatar1.png",
        TelNumber: "+1-800-600-9898",
        Email: "example@gmail.com",
        Status: "Friend"
      },
      {
        Name: "Gerard Butler",
        Image: "https://bootdey.com/img/Content/avatar/avatar2.png",
        TelNumber: "+1-800-480-9348",
        Email: "gb@gmail.com",
        Status: "Work"
      },
      {
        Name: "Anna Lee",
        Image: "https://bootdey.com/img/Content/avatar/avatar2.png",
        TelNumber: "+1-800-091-1234",
        Email: "lee@gmail.com",
        Status: "Private"
      }
    ]
  }

  render() {
    const { ContactList } = this.state;
    return (
      <div class="container bootstrap snippets bootdeys bootdey" >
        <div class="row decor-default">
          <SideBar />
          <Main List={ContactList} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));