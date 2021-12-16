import styled from "styled-components";

export const CarouselContainer = styled.ul`
  max-width: 1040px;
  padding: 1rem;
  list-style: none;
  display: flex;
  border-radius: 15px;
  justify-content: space-between;
  height: 65rem;

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
  min-width: ${({ final }) => (final ? `100%;` : `100%`)};
`;

export const CarouselItem = styled.div`
  background: #37a6a6;
  border-radius: 15px;
  padding: 1rem;
  width: 75%;

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 50%;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: 32px;
    min-width: 75%;
    background: #37a6a6;
    padding: 4px;
    align-content: start;
    scroll-snap-align: start;
    border-radius: 3px;
    overflow: visible;
    position: relative;
    height: fit-content;

    ${(props) =>
      props.active === props.index ? `opacity: 1` : `opacity: 0.8`};
  }
`;

export const CarouselItemTitle = styled.h4`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  display: flex;
  background: linear-gradient(
    121.57deg,
    #ffffff 10%,
    rgba(255, 255, 255, 0.66) 30.15%
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
export const CarouselItemImg = styled.svg`
  margin-left: 21px;
  -webkit-mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0)
  );
  width: 50%;

  @media ${(props) => props.theme.breakpoints.sm} {
    -webkit-mask-image: none;
    margin-left: 16px;
    overflow: visible;
  }
`;

export const CarouselItemText = styled.p`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);
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
  // width: 288px;

  // display: none;
  // visibility: hidden;

  display: flex;
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
  object-fit: cover;
  border-radius: 10px;
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
  }
`;

export const ExternalLinks = styled.a`
  color: #d4c0c0;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: #0d6973;
  border-radius: 15px;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    background: #2c3f59;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 75%;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
  }
`;
export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.5rem;
`;
