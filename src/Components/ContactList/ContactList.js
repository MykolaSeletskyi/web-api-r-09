// Import contact item
import ContactItem from "../ContactList/ContactItem/ContactItem";

const ContactList = ({ List, onChangeStatus }) => {

    const item = List.map(listItem => {
        return (<ContactItem key={listItem.Id} {...listItem} onChangeStatus={() => onChangeStatus(listItem.Id)} />)
    })

    return (
        <div>{item}</div>
    )
}

export default ContactList;