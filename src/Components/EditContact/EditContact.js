import { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';


class EditContact extends Component {

    state = {
        Id:this.props.CurrentContact.Id,
        Name: this.props.CurrentContact.Name,
        Image: this.props.CurrentContact.Image,
        Phone: this.props.CurrentContact.Phone,
        Gender: this.props.CurrentContact.Gender,
        Email: this.props.CurrentContact.Email,
        Status: this.props.CurrentContact.Status,
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

    onChangeContact = (e) => {
        e.preventDefault();
        const { Id, Name, Image, Phone, Gender, Email, Status } = this.state;
        const { onChangeContact } = this.props;
        const updateContact = {
            Id,
            Name,
            Image,
            Phone,
            Gender,
            Email,
            Status
        }
        onChangeContact(updateContact)
        this.setState({
            isRedirect: true
        })
    }



    render() {
        console.log("Edit contact PROPS => ", this.props)
        let {Gender, Image, Name, Phone, Status, Email } = this.props.CurrentContact;
        const avatar = Image;
        let { isRedirect } = this.state;

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
                            <h2>Edit contact</h2>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-8">
                            <form onSubmit={this.onChangeContact}>
                                <div className="form-group">
                                    <label htmlFor="Name">Name</label>
                                    <input name="Name" type="text" defaultValue={Name} required className="form-control" onChange={this.onGetName} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Phone">Phone</label>
                                    <input name="Phone" type="tel" defaultValue={Phone} required className="form-control" onChange={this.onGetPhone} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input type="email" className="form-control" defaultValue={Email} required onChange={this.onGetEmail} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Status">Gender</label>
                                    <select className="custom-select" onChange={this.onGetGender}>
                                        <option defaultValue>{Gender}</option>
                                        <option value="men">Men</option>
                                        <option value="women">Women</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Status">Status</label>
                                    <select className="custom-select" onChange={this.onGetStatus}>
                                        <option defaultValue>{Status}</option>
                                        <option value="Work">Work</option>
                                        <option value="Family">Family</option>
                                        <option value="Private">Private</option>
                                        <option value="Friend">Friend</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Avatar">Avatar</label>
                                    <input type="number" min="0" max="99" defaultValue={avatar} className="form-control" onChange={this.onGetAvatar} />
                                </div>
                                <button type="submit" className="btn btn-primary">Save</button>
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

export default EditContact;