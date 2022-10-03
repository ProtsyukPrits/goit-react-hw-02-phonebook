import styled from "styled-components";

export const LabelFilter = styled.label`
  display: grid;
`;

export const InputFilter = styled.input`
  margin: 4px 0 8px 0;
  width: 120px;

  &:focus {
    outline: none;
    border-radius: 4px;
    box-shadow: 0 0 10px #1e90ff;
  }
`;