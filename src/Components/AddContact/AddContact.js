import { Component, Fragment } from "react";
import { Link } from "react-router-dom";

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
            <Fragment>
                <div className="container">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <Link class="navbar-brand" to="/">Contact list</Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item active">
                                    <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
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
                            <form>
                                <div class="form-group">
                                    <label for="Name">Name</label>
                                    <input name="Name" type="text" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label for="Phone">Phone</label>
                                    <input name="Phone" type="tel" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label for="email">Email address</label>
                                    <input type="email" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label for="Avatar">Avatar</label>
                                    <input type="number" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label for="Status">Status</label>
                                    <select class="custom-select">
                                        <option selected>Choose...</option>
                                        <option value="2">Work</option>
                                        <option value="4">Family</option>
                                        <option value="3">Private</option>
                                        <option value="1">Friend</option>
                                    </select>
                                </div>
                                <button type="submit" class="btn btn-primary">Add new</button>
                            </form>
                        </div>
                        <div className="col-4">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/50/User_icon-cp.svg" class="rounded float-left" alt="..." />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default AddContact;