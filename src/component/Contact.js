import { useState } from "react";
import { Container,Row,Col} from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg"
export const Contact = ()=>{
    const formInitialDetails={
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        meassage:''
    }
    const [formDetails,setformDetails]=useState(formInitialDetails);
    const [buttonText,setButtonText] = useState('Send');
    const [status,setStatus] = useState({});

    const onFormUpdate=(categroy,value)=>{
        setformDetails({
            ...formDetails,
            [categroy]:value
        })
    }
    const handleSubmit= async (e)=>{
        e.preventDefault();
        setButtonText('Sending...');
        let response = await fetch("http//localhost:3000/contact",{
            method:"POST",
            headers:{
                "Content-Type": "Application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText('Send');
        let result = response.json();
        setformDetails(formInitialDetails);
        if(result===200){
            setStatus({success:true, message:'Message Send Successfully'});
        }
        else{
            setStatus({success:false, meassage: 'Something went wrong Please Try again later.'});
        }
    }

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact-us"/>
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e)=>onFormUpdate('firstName',e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e)=>onFormUpdate('lastName',e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="Email" onChange={(e)=>onFormUpdate('Email',e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" value={formDetails.phone} placeholder="Phone" onChange={(e)=>onFormUpdate('Phone',e.target.value)}/>
                                </Col>
                                <Col >
                                    <textarea rows="6" value={formDetails.meassage} placeholder="Message" onChange={(e)=>onFormUpdate('message',e.target.value)}/>
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.meassage &&
                                    <Col>
                                        <p className={status.success===false?"danger":"success"}>{status.meassage}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}