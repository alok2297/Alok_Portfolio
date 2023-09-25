import { Container,Row, Col } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import Nav from "react-bootstrap/Nav"
import { ProjectCard } from "./ProjectCard";
import Tab from "react-bootstrap/Tab"
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
export const Project=()=>{
    const projects=[
        {
            title:"Bussiness Startup",
            description:"Design and Development",
            imgUrl:projImg1,
        },
        {
            title:"Bussiness Startup",
            description:"Design and Development",
            imgUrl:projImg2,
        },
        {
            title:"Bussiness Startup",
            description:"Design and Development",
            imgUrl:projImg3,
        },
        {
            title:"Bussiness Startup",
            description:"Design and Development",
            imgUrl: projImg1,
        },
        {
            title:"Bussiness Startup",
            description:"Design and Development",
            imgUrl:projImg2,
        },
        {
            title:"Bussiness Startup",
            description:"Design and Development",
            imgUrl:projImg3,
        }

    ]
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                        <Tab.Container id="projects-tab" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Tab Three</Nav.Link>
                            </Nav.Item>
                        </Nav> 
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project,index)=>{
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">Lorem ipsum</Tab.Pane>
                            <Tab.Pane eventKey="third">Lorem ipsum</Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt=""/>
        </section>
    );
}