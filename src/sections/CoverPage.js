import { Container, Row, Col } from "react-bootstrap";
import { ReactComponent as Logo} from '../assets/arrow.svg'

const CoverPage = () => {

    return (
        <Container className="backgroundCover">
            <Row>
                <h2>Fergus Brown</h2>
                <hr/>
            </Row>
            <Row className="developerHeading">
                <Col><h1>Web Developer</h1></Col>
            </Row>
            <Row id="lastrow">
                <Col id="cantedLineBox">
                    <h3>Check out my projects</h3>
                </Col>
                <Col id="arrowbox">
                    <Logo />
                </Col>
            </Row>
        </Container>
    )
}

export default CoverPage;