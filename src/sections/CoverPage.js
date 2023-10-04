import { Row, Col } from "react-bootstrap";
import { ReactComponent as Logo} from '../assets/images/arrow.svg'


const CoverPage = () => {

    return (
        <div className="backgroundCover">
            <Row className="developerHeading">
                <Col><h1>Web Developer</h1></Col>
            </Row>
            <Row>
                <Col id="cantedLineBox">
                    <a href="#Projects"><h3>Check out my projects</h3></a>
                </Col>
                <Col id="arrowbox">
                    <a href="#Projects"><Logo /></a>
                </Col>
            </Row>
        </div>
    )
}

export default CoverPage;