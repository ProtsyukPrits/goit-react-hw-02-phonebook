
export const Filter = ({ filtring }) => {
  return (
    <label>
      Styled filter by name
      <input type="text" name="name" onChange={filtring}/>
    </label>
  );
};
