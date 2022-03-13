import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllContacts } from 'redux/contacts/contacts-selectors';
import { ContactListStyled } from './ContactList.styled';
import ContactListItem from '../ContactListItem';
import { deleteContact } from 'redux/contacts/contacts-operations';

const ContactList = () => {
  const contacts = useSelector(getAllContacts);
  const dispatch = useDispatch();
  return (
    <ContactListStyled>
      {contacts.map(contact => {
        return (
          <ContactListItem
            key={contact.id}
            name={contact.name}
            number={contact.number}
            onDelete={() => dispatch(deleteContact(contact.id))}
          />
        );
      })}
    </ContactListStyled>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default ContactList;
