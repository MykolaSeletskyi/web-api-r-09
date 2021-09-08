import { Component } from "react";

class AddContact extends Component {

    state = {
        Name: "",
        Image: "",
        Phone: "",
        Email: "",
        Status: ""
    }

    render() {
        return (
            <h2>Add New Contact</h2>
        );
    }
}

export default AddContact;