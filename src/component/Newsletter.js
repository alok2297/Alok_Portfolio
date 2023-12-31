import { useEffect, useState } from "react"
import { Alert, Col,Row } from "react-bootstrap"

export const Newsletter=({onValidated,status,message})=>{

    const [email,SetEmail] = useState("");

    useEffect(()=>{
        if(status==='success')clearFields();
    },[status])

    const handleSubmit=(e)=>{
        e.preventDefault();
        email &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email
        })
    }
    const clearFields=()=>{
        SetEmail('');
    }
    return(
        <Col lg={12}>
            <div className="newsletter-bx">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>subscribe to the Newsletter</h3>
                        {status==='sending' && <Alert>Sending..</Alert>}
                        {status==='error' && <Alert variant="danger">{message}</Alert>}
                        {status==='success' && <Alert variant="success">{message}</Alert>}
                    </Col>
                    <Col md={6} xl={7}>
                        <form onSubmit={handleSubmit}>
                            <div className="new-email-bx">
                                <input value={email} type="email" onChange={(e)=>SetEmail(e.target.value)} placeholder="email Adress"/>
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}