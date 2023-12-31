import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import { useEffect, useState } from "react";

export const Banner = ()=>{
    const [loopNum,setLoopNum]= useState(0);
    const [isDeleting,setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Android Developer", "Software Developer"];
    const [text,setText]=useState('');
    const [delta,setDelta] = useState(300-Math.random()*100);
    const period = 2000;

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        },delta);
        return ()=>{clearInterval(ticker)};
    },[text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
          setDelta(prevDelta => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setDelta(500);
        } 
      }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-centre">
                    <Col xs={12} md={6} xl={7}>
                        <span>Welcome to My Portfolio</span>
                        <h1>{`Hi I'm Alok `}<span className="wrap">{text}</span></h1>
                        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                        <button onClick={()=>console.log("Connect")}>Let’s Connect<ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}