// Import contact item
import ContactItem from "../ContactList/ContactItem/ContactItem";

const ContactList = ({ List, onChangeStatus, onDelete, onGetCurrentContact }) => {

    const item = List.map(listItem => {
        return (<ContactItem key={listItem.Id} {...listItem}
            onChangeStatus={() => onChangeStatus(listItem.Id)}
            onDelete={() => onDelete(listItem.Id)}
            onGetCurrentContact={() => onGetCurrentContact(listItem.Id)} />)
    })

    return (
        <div>{item.length > 0 ? item : <p className="emptyList">Contact list is empty.</p>}</div>
    )
}

export default ContactList;