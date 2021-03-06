import styled from 'styled-components';

const Input = styled.input`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  box-shadow: 0 5px 5px rgba(17, 16, 62, 0.1);
  display: inline;
  width: 80%;
  font-size: 20px;
  padding: 15px;
  margin-left: auto
  padding-right: 5px;
  padding-top: 13px;
  vertical-align: top;
  border-width: 2px;
  border-radius: 3px;
  border-style: inset;
  border-color: #4B15A3;
  border-image: initial;
  ::placeholder {
    color: #4B15A3;
    font-family: 'Amatic SC', cursive;
    font-family: 'Space Mono', monospace;
  }
  transition-duration: 0.4s;

  &:focus {
  outline: none;
  border: 0;

  }

  &:hover {
  box-shadow: 0 0 5px 5px rgba(17, 16, 62, 0.15);
  }`;

export default Input;
