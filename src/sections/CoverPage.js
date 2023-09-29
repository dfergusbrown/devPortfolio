import { Container, Row, Col } from "react-bootstrap";

const CoverPage = () => {

    return (
        <Container className="backgroundCover">
            <Row style={{
            }}>
                <h2>Fergus Brown</h2>
                <hr/>
            </Row>
            <Row className="developerHeading">
                <Col><h1>Web Developer</h1></Col>
            </Row>
            <Row>
                <h3>Check out my projects</h3>
            </Row>
        </Container>
    )
}



export default CoverPage;