import { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';


class AddContact extends Component {

    state = {
        Name: "",
        Image: null,
        Phone: "",
        Gender: "",
        Email: "",
        Status: "",
        isRedirect: false
    }

    onGetName = (e) => {
        const name = e.target.value
        this.setState({
            Name: name
        })
    }

    onGetPhone = (e) => {
        const phone = e.target.value
        this.setState({
            Phone: phone
        });
    }

    onGetEmail = (e) => {
        const email = e.target.value
        this.setState({
            Email: email
        });
    }

    onGetGender = (e) => {
        const gender = e.target.value
        this.setState({
            Gender: gender
        });
    }

    onGetStatus = (e) => {
        const status = e.target.value
        this.setState({
            Status: status
        });
    }

    onGetAvatar = (e) => {
        const avatar = e.target.value
        this.setState({
            Image: avatar
        });
    }

    onCreateContact = (e) => {
        e.preventDefault();
        const { Name, Image, Phone, Gender, Email, Status } = this.state;

        const { onCreateContact } = this.props;
        const newContact = {
            Id: uuidv4(),
            Name,
            Image,
            Phone,
            Gender,
            Email,
            Status
        }

        onCreateContact(newContact)

        this.setState({
            isRedirect: true
        })
    }



    render() {
        let { Gender, Image, isRedirect } = this.state;

        if (isRedirect === true) {
            return <Redirect to="/" />
        }

        if (Image === null || Image == "") {
            Image = "https://upload.wikimedia.org/wikipedia/commons/5/50/User_icon-cp.svg";
        } else {
            Image = `https://api.randomuser.me/portraits/${Gender}/${Image}.jpg`;
        }

        return (
            <Fragment>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link className="navbar-brand" to="/">Contact list</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2>Add new contact</h2>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-8">
                            <form onSubmit={this.onCreateContact}>
                                <div className="form-group">
                                    <label htmlFor="Name">Name</label>
                                    <input name="Name" type="text" className="form-control" onChange={this.onGetName} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Phone">Phone</label>
                                    <input name="Phone" type="tel" className="form-control" onChange={this.onGetPhone} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input type="email" className="form-control" onChange={this.onGetEmail} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Status">Gender</label>
                                    <select className="custom-select" onChange={this.onGetGender}>
                                        <option selected>Choose...</option>
                                        <option value="men">Men</option>
                                        <option value="women">Women</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Status">Status</label>
                                    <select className="custom-select" onChange={this.onGetStatus}>
                                        <option selected>Choose...</option>
                                        <option value="2">Work</option>
                                        <option value="4">Family</option>
                                        <option value="3">Private</option>
                                        <option value="1">Friend</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Avatar">Avatar</label>
                                    <input type="number" min="0" max="99" className="form-control" onChange={this.onGetAvatar} />
                                </div>
                                <button type="submit" className="btn btn-primary">Add new</button>
                            </form>
                        </div>
                        <div className="col-4">
                            <img src={Image} className="rounded avatar float-left" alt="..." />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default AddContact;