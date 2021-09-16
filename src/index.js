import ReactDOM from "react-dom";
import { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

// Import styles
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// Import Components
import Main from "./Components/Main/Main";
import NotFound from "./Components/NotFound/NotFound";
import AddNewContact from "./Components/AddContact/AddContact";
import EditContact from "./Components/EditContact/EditContact";

class App extends Component {

  state = {
    ContactList: [
      {
        Id: uuidv4(),
        Name: "Alexander Verdnam",
        Image: 5,
        Phone: "+1-800-600-9898",
        Email: "example@gmail.com",
        Gender: "men",
        Status: "Friend"
      },
      {
        Id: uuidv4(),
        Name: "Gerard Butler",
        Image: 82,
        Phone: "+1-800-480-9348",
        Email: "gb@gmail.com",
        Gender: "men",
        Status: "Work"
      },
      {
        Id: uuidv4(),
        Name: "Anna Lee",
        Image: 43,
        Phone: "+1-800-091-1234",
        Email: "lee@gmail.com",
        Gender: "women",
        Status: "Private"
      }
    ],    
    CurrentContact: ""
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

  onCreateContact = (newContact) => {
    const tmpList = this.state.ContactList.slice();
    tmpList.unshift(newContact);
    this.setState({
      ContactList: tmpList
    })
  }
  onChangeContact = (Contact) => {
    const tmpList = this.state.ContactList.slice();
    const index=tmpList.findIndex(i=>i.Id===Contact.Id);
    tmpList[index]=Contact;
    this.setState({
      ContactList: tmpList
    })
  }
  onGetCurrentContact = (Id) => {
    const index = this.state.ContactList.findIndex(elem => elem.Id === Id);
    const tmpList = this.state.ContactList.slice()

    const currentContact = tmpList[index];
    this.setState({
      CurrentContact: currentContact
    })
  }

  render() {
    const { ContactList, CurrentContact,StatusCounts } = this.state;
    console.log(StatusCounts);
    return (

      <Router>
        <Switch>
          <Route path="/" exact render={() => (<Main List={ContactList} StatusCounts={StatusCounts} onGetCurrentContact={this.onGetCurrentContact} onGetCurrentStatus={this.onGetCurrentStatus} onChangeStatus={this.onChangeStatus} onDelete={this.onDelete} />)} />
          <Route path="/add-new-contact" exact render={() => (<AddNewContact onCreateContact={this.onCreateContact} />)} />
          <Route path="/edit-contact" exact render={() => (<EditContact CurrentContact={CurrentContact} onChangeContact={this.onChangeContact}/>)} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));