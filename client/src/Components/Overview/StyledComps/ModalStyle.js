import styled from 'styled-components';

export const Overlay = styled.div`
background-color: #999999;
height: 100%;
left: 0;
opacity: 0.5;
position: fixed;
top: 0;
width: 100%;
z-index: 500;
place-items: center;
@media (max-width: 500px) {
  top: 25%;
}
`;

export const Wrapper = styled.div`
display: flex;
justify-content: center;
left: 0;
outline: 0;
overflow-x: hidden;
overflow-y: auto;
position: fixed;
top: 25%;
width: 100%;
z-index: 1000;
@media (max-width: 500px) {
  top: 50%;
  left: -20%;
}
`;

export const Modall = styled.div`
align-items: center;
background: rgb(118, 97, 153);
border-radius: 0.25rem;
display: flex;
flex-direction: column;
margin: 1.875rem;
max-width: 500px;
position: relative;
z-index: 100;
`;

export const Warning = styled.div`
align-items: center;
display: flex;
flex-direction: column;
padding: 10px; 5px;
`;

export const ConfirmButton = styled.button`
  color: white;
  background-color: #4b15a3;
  cursor: pointer;
  font-weight: bold;
  width: 100%;
`;
