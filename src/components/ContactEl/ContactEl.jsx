
export const ContactEl = ({ onDelete, contact}) => {
  return (
    <li>
      {contact.name} : {contact.number}
      <div>
        <button type="button" onClick={() => {
          onDelete(contact.id)
        }}>
      Delete
        </button>
      </div>
    </li>
  )
}