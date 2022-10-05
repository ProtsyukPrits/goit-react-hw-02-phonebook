import { PropTypes } from 'prop-types';
import { LabelFilter, InputFilter } from "./Filter.styled";

export const Filter = ({ filtring }) => {
  return (
    <LabelFilter>
       Find contacts by name
      <InputFilter type="text" name="name" onChange={filtring}/>
    </LabelFilter>
  );
};

Filter.propTypes = {
  filtring: PropTypes.func.isRequired
}