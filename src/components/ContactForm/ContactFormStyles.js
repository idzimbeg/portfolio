import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
  `

export const Form = styled.form `
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  top: 15vh;
  left: 10%;
  right: 15%;
  width: 70%;
  background-color: #D5F2ED;
  padding: 1rem;
  border-radius: 25px 5px 25px 5px;
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
  `
  export const Input = styled.input`
  border: 10px solid #D5F2ED;
  border-radius: 20px;
  height: 5rem;
  width: 75%;
  left: 5%;
  right 5%;
  `
  export const Textarea = styled.textarea`
  border: 10px solid #D5F2ED;
  border-radius: 20px;
  height: 20rem;
  width: 75%;
  left: 5%;
  right 5%;
  `

  export const Close = styled.div`
  position: relative;
  left:45%;
  width: 2em;
  height: 2em;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 0;
    width: 0;
    border: 1em solid #4EBFB4;
    border-radius: 6em;
    transition: all 0.2s ease-in-out;
  }
  &:hover {
    font-size: 1.2em;
  }
  `
  export const CloseButton = styled.a `
  transition: all 0.075s ease-in-out;
  position: absolute;
  width: 2em;
  height: 2em;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  border: 0.1em solid;
  border-color: #D5F2ED;
  border-radius: 6em;
  &:after  
  {  transition: all 0.075s ease-in-out;
    font: 1em Helvetica, arial;
    font-size: 1em;
    width: 100%;
    height: 100%;
    content:"x";
    color: #2C3F59;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(0,-5%) scale(1.25,1);
  }
  &:active:before
  {    
    border-color: rgba(200,100,100,0.8);
  }  
&:active
   { font-size: 0.75em;
    border-color: rgba(50,50,50,0.8);
  }
  `