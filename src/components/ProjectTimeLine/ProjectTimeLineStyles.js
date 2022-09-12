import styled from "styled-components";

export const CarouselContainer = styled.ul`
  max-width: 800px;
  padding: 2rem;
  list-style: none;
  display: flex;
  border-radius: 15px;
  height: 50rem;
  align-items: center;

  margin-left: 32px;
  &:first-of-type {
    margin-left: 0px;
  }

  margin-bottom: 50px;

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
  touch-action: pan-x;
  justify-content: initial;
  margin-bottom: 8px;
`;
export const CarouselMobileScrollNode = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${({ final }) => (final ? `100%;` : `80%`)};
`;

export const CarouselItem = styled.div`
  background: #01111c;
  box-shadow: 0px 5px 17px -7px rgba(0, 0, 0, 0.75);
  border-radius: 15px;
  padding: 2rem;
  width: 75%;

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 50%;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: 32px;
    min-width: 75%;
    background: #01111c;
    padding: 4px;
    align-content: start;
    scroll-snap-align: start;
    border-radius: 3px;
    overflow: visible;
    position: relative;
    height: fit-content;

    ${(props) =>
      props.active === props.index ? `opacity: 1` : `opacity: 0.9`};
  }
`;

export const CarouselItemTitle = styled.h4`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  display: flex;
  background: linear-gradient(
    180deg,
    #01111c 2%,
    rgba(255, 255, 255, 0.75) 76%
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 4px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const CarouselItemText = styled.p`
  font-size: 12px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: #4ebfb4;
  padding-right: 16px;
  text-align: justify;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 12px;
    line-height: 18px;
    padding-right: 32px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 16px;
    padding-right: 0;
  }
`;
export const CarouselButtons = styled.div`
  display: flex;
  justify-content: center;
  visibility: visible;
  margin-bottom: 48px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 288px;
  }
`;

export const CarouselButton = styled.button`
  box-sizing: border-box;
  background: none;
  padding: 4px;
  border: none;
  cursor: pointer;
  margin-right: 4px;
  opacity: ${(props) => (props.active === props.index ? `1` : `.33`)};
  transform: ${(props) =>
    props.active === props.index ? `scale(1.6)` : `scale(1)`};

  &:focus {
    outline: none;
  }
`;

export const CarouselButtonDot = styled.div`
  background-color: #2c3f59;
  border-radius: 10px;
  margin: auto;
  width: 1rem;
  height: 1rem;
`;

export const Img = styled.img`
  width: 75%;
  height: 45%;
  padding-left: 4rem;
  object-fit: center;
  overflow: hidden;
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    justify-items: space-around;
    align-items: center;
  }
`;

export const ExternalLinks = styled.a`
  color: #d4c0c0;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: linear-gradient(
    90deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(253, 29, 29, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
  border-radius: 15px;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    background: linear-gradient(
      10deg,
      rgba(131, 58, 180, 1) 0%,
      rgba(253, 29, 29, 1) 50%,
      rgba(252, 176, 69, 1) 100%
    );
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-items: space-between;
    align-items: center;
    margin: 0.5rem 0;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    justify-items: space-between;
    align-items: center;
  }
`;
export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.5rem;
`;
