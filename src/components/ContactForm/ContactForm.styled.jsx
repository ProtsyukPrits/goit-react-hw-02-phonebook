import styled from 'styled-components';
import {Form} from 'formik'

export const FormList = styled(Form)`
  display: grid;

  padding: 8px;

  border: solid 1px black;
`;

export const Label = styled.label`
  display: grid;
`;

export const Input = styled.input`
  width: 150px;
  margin: 8px 0 16px 0;

  &:focus {
    outline: none;
    border-radius: 4px;
    box-shadow: 0 0 10px #1e90ff;
  }
`;

export const Button = styled.button`
  width: 100px;
  border-color: transparent;
  border-radius: 4px;

  &:hover,
  :focus {
    background: #1e90ff;
  }
`;
