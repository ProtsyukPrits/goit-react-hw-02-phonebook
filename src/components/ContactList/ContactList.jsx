import { ContactEl } from 'components/ContactEl';
import { PropTypes } from 'prop-types';

export const ContactList = ({ onDelete, filtringContacts }) => {
  return (
    <ul>
      {filtringContacts.map(contact => (
        <ContactEl contact={contact} key={contact.id} onDelete={onDelete} />
      ))}
    </ul>
  );
};
