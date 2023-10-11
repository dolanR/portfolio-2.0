import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Work = () => {
    const CustomButtonGroupAsArrows = ({ next, previous }) => {
        return (
          <div
            style={{
              textAlign: "center",
            }}
            className='arrow-container'
          >
            <FontAwesomeIcon icon={faChevronLeft} onClick={previous} className='left-arrow carousel-arrow'>Prev</FontAwesomeIcon>
            <FontAwesomeIcon icon={faChevronRight} onClick={next} className='right-arrow carousel-arrow'>Next</FontAwesomeIcon>
          </div>
        );
      };
      const CustomDot = ({ onClick, active, index, carouselState }) => {
        const { currentSlide } = carouselState;
        return (
          <li>
            <button
              style={{ background: active ? "#6a0c7d" : "#fff"}}
              onClick={() => onClick()}
              className='carousel-dot'
            />
          </li>
        );
      };

    return (
        <div className='container work-page'>
            <Carousel responsive={{
                        superLargeDesktop: {
                        breakpoint: { max: 4000, min: 3000 },
                        items: 5
                        },
                        desktop: {
                        breakpoint: { max: 3000, min: 1024 },
                        items: 3
                        },
                        tablet: {
                        breakpoint: { max: 1024, min: 464 },
                        items: 2
                        },
                        mobile: {
                        breakpoint: { max: 464, min: 0 },
                        items: 1
                        }
            }} arrows={false} showDots infinite containerClass="carousel-container" dotListClass='carousel-dots-container' renderDotsOutside renderButtonGroupOutside customButtonGroup={<CustomButtonGroupAsArrows/>} customDot={<CustomDot/>}>
                <div className='project-one project'>
                    <div className='project-title'>Tic Tac Toe</div>
                    <div className='project-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</div>
                    <div className='project-link-container'>
                        <a href="https://dolanr.github.io/ticTacToe/" target='_blank'>
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </div>
                <div className='project-two project'>Project</div>
                <div className='project-three project'>Project</div>
                <div className='project-four project'>Project</div>
            </Carousel>
        </div>
    );
}

export default Work;