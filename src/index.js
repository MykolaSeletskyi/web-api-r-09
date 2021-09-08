import ReactDOM from "react-dom";
import { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import styles
import "./index.css";

// Import Components
import Main from "./Components/Main/Main";
import NotFound from "./Components/NotFound/NotFound";

class App extends Component {

  state = {
    ContactList: [
      {
        Id: 1,
        Name: "Alexander Verdnam",
        Image: "https://api.randomuser.me/portraits/men/5.jpg",
        Phone: "+1-800-600-9898",
        Email: "example@gmail.com",
        Status: "Friend"
      },
      {
        Id: 2,
        Name: "Gerard Butler",
        Image: "https://api.randomuser.me/portraits/men/82.jpg",
        Phone: "+1-800-480-9348",
        Email: "gb@gmail.com",
        Status: "Work"
      },
      {
        Id: 3,
        Name: "Anna Lee",
        Image: "https://api.randomuser.me/portraits/women/43.jpg",
        Phone: "+1-800-091-1234",
        Email: "lee@gmail.com",
        Status: "Private"
      }
    ]
  }

  onChangeStatus = (Id) => {
    const index = this.state.ContactList.findIndex(elem => elem.Id === Id);
    let contact = this.state.ContactList[index];
    switch (contact.Status) {
      case 'Work': contact.Status = "Friend";
        break;
      case "Friend": contact.Status = "Family";
        break;
      case "Family": contact.Status = "Private";
        break;
      case "Private": contact.Status = "Work";
    }
    const tmpList = this.state.ContactList.slice();
    tmpList[index] = contact;
    this.setState({
      ContactList: tmpList
    })
  }

  onDelete = (Id) => {
    const index = this.state.ContactList.findIndex(elem => elem.Id === Id);

    const partOne = this.state.ContactList.slice(0, index);
    const partTwo = this.state.ContactList.slice(index + 1);
    const tmpList = [...partOne, ...partTwo];

    this.setState({
      ContactList: tmpList
    })

  }

  render() {
    const { ContactList } = this.state;
    return (
      <div className="container bootstrap snippets bootdeys bootdey" >
        <div className="row decor-default">
          <Router>
            <Switch>
              <Route path="/" exact render={() => (<Main List={ContactList} onChangeStatus={this.onChangeStatus} onDelete={this.onDelete} />)} />
              <Route path="*" component={NotFound} />
            </Switch>
          </Router>

        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));