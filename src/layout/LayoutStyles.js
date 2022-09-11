import styled from "styled-components";

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
