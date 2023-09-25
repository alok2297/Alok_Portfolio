import { Container } from 'react-bootstrap';
import { Col, Row } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'

import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import ColorSharp from "../assets/img/color-sharp.png";
export const Skill = ()=>{
        const responsive = {
            superLargeDesktop: {
              // the naming can be any, depends on you.
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
          };
        return (
            <section className='skill' id='skills'>
                <Container>
                    <Row>
                        <Col>
                            <div className='skill-bx'>
                                <h2>
                                    Skills
                                </h2>
                                <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                                <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                    <div className='item'>
                                        <img src={meter1} alt=''/>
                                        <h5>Web Development</h5>
                                    </div>
                                    <div className='item'>
                                        <img src={meter2} alt=''/>
                                        <h5>App Development</h5>
                                    </div>
                                    <div className='item'>
                                        <img src={meter3} alt=''/>
                                        <h5>Machine Learnings</h5>
                                    </div>
                                    <div className='item'>
                                        <img src={meter1} alt=''/>
                                        <h5>Software Development</h5>
                                    </div>
                                </Carousel>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <img className='background-image-left' src={ColorSharp} alt=''/>
            </section>
        )
}