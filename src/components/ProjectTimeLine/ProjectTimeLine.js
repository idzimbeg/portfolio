import { useState, useRef, useEffect } from "react";
import { projects } from "../../constants/constants";

import {
  ExternalLinks,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from "./ProjectTimeLineStyles";
import { Section, SectionTitle } from "../../styles/GlobalComponents";

const TOTAL_CAROUSEL_COUNT = projects.length;

const ProjectTimeLine = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: "smooth" });
  };

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.8 * (i / projects.length)
      );

      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft / carouselRef.current.scrollWidth) *
          0.8 *
          projects.length
      );

      setActiveItem(index);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Section id="projects">
      <SectionTitle main>Example projects</SectionTitle>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {projects.map(
            ({ id, image, title, description, tags, source, visits }) => (
              <CarouselMobileScrollNode
                key={id}
                final={id === TOTAL_CAROUSEL_COUNT - 1}
              >
                <CarouselItem
                  key={id}
                  index={`carousel__item-${id}`}
                  active={activeItem}
                  onClick={(e) => handleClick(e, id)}
                >
                  <CarouselItemTitle>{title}</CarouselItemTitle>
                  <Img src={image} />
                  <CarouselItemText>{description}</CarouselItemText>
                  <div>
                    <TitleContent>Stack</TitleContent>
                    <TagList>
                      {tags.map((tag, i) => (
                        <Tag key={i}>{tag}</Tag>
                      ))}
                    </TagList>
                  </div>
                  <UtilityList>
                    <ExternalLinks href={visits}>Code</ExternalLinks>
                    <ExternalLinks href={source}>Source</ExternalLinks>
                  </UtilityList>
                </CarouselItem>
              </CarouselMobileScrollNode>
            )
          )}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {projects.map((item, index) => (
          <CarouselButton
            key={index}
            index={index}
            active={activeItem}
            onClick={(e) => handleClick(e, index)}
            type="button"
          >
            <CarouselButtonDot active={activeItem} />
          </CarouselButton>
        ))}
      </CarouselButtons>
    </Section>
  );
};

export default ProjectTimeLine;
