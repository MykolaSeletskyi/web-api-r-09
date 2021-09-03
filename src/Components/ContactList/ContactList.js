// Import contact item
import ContactItem from "../ContactList/ContactItem/ContactItem";

const ContactList = ({ List }) => {

    const item = List.map(listItem => {
        return (<ContactItem key={listItem.Id} Name={listItem.Name} Image={listItem.Image} />)
    })

    return (
        <div>{item}</div>
    )
}

export default ContactList;