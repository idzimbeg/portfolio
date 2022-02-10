import styled, { keyframes } from "styled-components";

const slide = keyframes`
0% {
    transform: translateY(-500px);
            animation-timing-function: ease-in;
}

  38% {
            transform: translateY(0);
            animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
            transform: translateY(-65px);
            animation-timing-function: ease-in;
  }
  72% {
            transform: translateY(0);
            animation-timing-function: ease-out;
  }
  81% {
            transform: translateY(-28px);
            animation-timing-function: ease-in;
  }
  90% {
            transform: translateY(0);
            animation-timing-function: ease-out;
  }
  95% {
            transform: translateY(-8px);
            animation-timing-function: ease-in;
  }
  100% {
            transform: translateY(0);
            animation-timing-function: ease-out;
  }
  `;
export const Ball = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 100%;
  background: #4ebfb485;
  box-shadow: 0px 5px 17px -7px rgba(0, 0, 0, 0.75);
  animation: ${(props) => (props.out ? slide : slide)} 1.2s both;
`;

export const LoadingDisplay = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: #dedede;
`;

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: auto;
`;
