import { Row, Col } from "react-bootstrap";
import { ReactComponent as Logo} from '../assets/images/arrow.svg'
import NavbarHeader from "../components/NavbarHeader";


const CoverPage = () => {

    return (
        <div className="backgroundCover">
            <NavbarHeader sticky="top"/>
            <Row className="developerHeading">
                <Col><h1>Web Developer</h1></Col>
            </Row>
            <Row>
                <Col id="cantedLineBox">
                    <h3>Check out my projects</h3>
                </Col>
                <Col id="arrowbox">
                    <Logo />
                </Col>
            </Row>
        </div>
    )
}

export default CoverPage;