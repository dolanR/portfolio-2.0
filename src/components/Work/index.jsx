import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faGithubAlt, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

const projects = [
    {
        title: 'Calculator',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        repo: 'https://github.com/dolanR/calculator',
        live: 'https://dolanr.github.io/calculator/',
        skills: 'HTML, CSS, JavaScript, React'
    },
    {
        title: 'Current Portfolio Website',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        repo: '',
        live: '',
        skills: 'HTML, CSS, JavaScript, React, Vite, npm'
    },
    {
        title: 'Interval Timer',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        repo: 'https://github.com/dolanR/Interval-Timer',
        live: 'https://dolanr.github.io/Interval-Timer/',
        skills: 'HTML, CSS, JavaScript, React, Vite'
    },
    {
        title: 'Tic Tac Toe',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        repo: 'https://github.com/dolanR/ticTacToe',
        live: 'https://dolanr.github.io/ticTacToe/',
        skills: 'HTML, CSS, JavaScript, React, Vite'
    },
    {
      title: 'Drum Machine',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      repo: 'https://github.com/dolanR/fcc-drum-machine',
      live: 'https://dolanr.github.io/fcc-drum-machine/',
      skills: 'HTML, CSS, JavaScript, React'
    },
    {
      title: 'First Portfolio Website',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      repo: 'https://github.com/dolanR/Portfolio-Website',
      live: '',
      skills: 'HTML, CSS, JavaScript'
    }
]

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
              }} arrows={false} 
              showDots
              infinite  
              containerClass="carousel-container" 
              dotListClass='carousel-dots-container'
              itemClass='carousel-item' 
              partialVisbile={false}
              renderDotsOutside renderButtonGroupOutside 
              customButtonGroup={<CustomButtonGroupAsArrows/>} 
              customDot={<CustomDot/>}
            >
                {projects.map((project, index) => {
                  return (
                    <div className={`project`}>
                    <div className='project-top-half'>
                      <h1 className='project-title'>{project.title}</h1>
                      <img></img>
                    </div>
                    <div className='project-bottom-half'>
                      <div className='project-skills'>{project.skills}</div>
                      <div className='project-description'>{project.description}</div>
                      <div className='project-link-container'>
                          <a href={project.repo} target='_blank'>
                              <FontAwesomeIcon icon={faGithub} /> Repo
                          </a>
                          <a href={project.live} target='_blank'>
                              <FontAwesomeIcon icon={faGithubAlt} /> Live
                          </a>
                      </div>
                    </div>
                  </div>
                )})}
            </Carousel>
        </div>
    );
}

export default Work;