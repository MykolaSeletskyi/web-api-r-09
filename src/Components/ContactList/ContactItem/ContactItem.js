import { Link } from "react-router-dom";

const ContactItem = ({ Name, Image, Email, Status, Phone, Gender, onChangeStatus, onDelete, onGetCurrentContact }) => {

    let defaultStatusColor = ""

    switch (Status) {
        case 'Work': defaultStatusColor = "lab lab-success";
            break;
        case "Friend": defaultStatusColor = "lab lab-warning"
            break;
        case "Family": defaultStatusColor = "lab lab-primary"
            break;
        case "Private": defaultStatusColor = "lab lab-danger"
    }

    const imageURL = `https://api.randomuser.me/portraits/${Gender}/${Image}.jpg`;

    return (
        <div className="unit">
            <div className="field name">
                <div className="check">
                    <input name="cb1" type="checkbox" />
                    <label htmlFor="cb2"></label>
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg>

                </div>
                <div>
                    <img src={imageURL} alt="image" className="avatar" /> {Name}
                </div>
                <div className={defaultStatusColor} onClick={onChangeStatus} >{Status}</div>
            </div>
            <div className="field phone">
                {Phone}
            </div>
            <div className="field email">
                {Email}
            </div>
            <div className="icons">
                <Link to="/edit-contact">
                    <i className="far fa-edit fa-2x" onClick={onGetCurrentContact}></i>
                </Link>
                <i className="far fa-trash-alt fa-2x" onClick={onDelete} ></i>
            </div>
        </div>
    )
}

export default ContactItem;