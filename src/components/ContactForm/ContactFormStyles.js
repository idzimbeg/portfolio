import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: #dedede90;
`;

export const Form = styled.form`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-items: space-around;
  align-items: center;
  top: 10%;
  bottom: 10%;
  left: 10%;
  right: 15%;
  width: 70%;
  background-color: #01111c;
  margin: auto;
  padding: 1rem;
  border-radius: 25px 5px 25px 5px;
  box-shadow: 0px 5px 17px -7px rgba(0, 0, 0, 0.75);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;
  @media ${(props) => props.theme.breakpoints.sm} {
    // padding: 0.4rem 0;
    left: 5%;
    right: 10%;
    position: absolute;
    width: 90%;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;
export const Input = styled.input`
  box-shadow: 0px 5px 17px -7px rgba(0, 0, 0, 0.75); 
  border-color: transparent;
  outline: none;
  height: 5rem;
  width: 100%;
  left: 5%;
  right 5%;
  padding: 3rem;
  background-color: #01111c;
  color: #fff;
  `;
export const Textarea = styled.textarea`
  border: #dedede;
  box-shadow: 0px 5px 17px -7px rgba(0, 0, 0, 0.75); 
  resize: none;
  outline: none;
  height: 20rem;
  width: 100%;
  left: 5%;
  right 5%;
  padding: 2rem;
  margin: 2rem 0;
  background-color: #01111c;
  color: #fff;
  `;

export const Close = styled.div`
  position: relative;
  left: 45%;
  width: 2em;
  height: 2em;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 0;
    width: 0;
    border: 1em solid
      linear-gradient(
        90deg,
        rgba(131, 58, 180, 1) 0%,
        rgba(253, 29, 29, 1) 50%,
        rgba(252, 176, 69, 1) 100%
      );
    border-radius: 6em;
    transition: all 0.2s ease-in-out;
    font-size: 1.2em;
  }
`;
export const CloseButton = styled.a`
  transition: all 0.075s ease-in-out;
  position: absolute;
  width: 2em;
  height: 2em;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 0.1em solid;
  border-color: rgba(50, 50, 50, 0.8);
  border-radius: 6em;
  &:after {
    transition: all 0.075s ease-in-out;
    font: 1em Helvetica, arial;
    font-size: 1em;
    width: 100%;
    height: 100%;
    content: "x";
    color: #2c3f59;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(0, -5%) scale(1.25, 1);
  }
  &:active:before {
    font-size: 0.75em;

    border-color: linear-gradient(
      90deg,
      rgba(131, 58, 180, 1) 0%,
      rgba(253, 29, 29, 1) 50%,
      rgba(252, 176, 69, 1) 100%
    );
  }
  &:active {
    font-size: 0.75em;
    border-color: rgba(50, 50, 50, 0.8);
  }
`;
