import { ContactEl } from 'components/ContactEl';


export const ContactList = ({ onDelete, filtringContacts }) => {
  return (
    <ul>
      {filtringContacts.map(contact => (
        <ContactEl contact={contact} key={contact.id} onDelete={onDelete} />
      ))}
    </ul>
  );
};
