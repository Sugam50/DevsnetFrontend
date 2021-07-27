import { Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import ContactUs from './components/ContactUs';
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";


function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Indian Tourism</Navbar.Brand>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contactus">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/contactus" component={ContactUs} />
      </Switch>

      <footer className=" bg-dark text-white-50 p-5">
        <Container fluid className="m-5">
          <Row>
            <Col style={{ "textDecoration": "underline", "fontWeight": "bolder" }}>
              State Tourism Websites
            </Col>
            <Col>
            </Col>
            <Col>
            </Col>
            <Col style={{ "textDecoration": "underline", "fontWeight": "bolder" }}>
              Union Territory Tourism Websites
            </Col>
            <Col>
            </Col>
            <Col style={{ "textDecoration": "underline", "fontWeight": "bolder" }}>
              Contact US:
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <a href="https://www.gujarattourism.com/">Gujrat</a>
            </Col>
            <Col>
              <a href="https://www.keralatourism.org/">Kerela</a>
            </Col>
            <Col>
              <a href="https://tourism.assam.gov.in/">Assam</a>
            </Col>
            <Col>
              <a href="http://www.pondytourism.in/">Pudduchery</a>
            </Col>
            <Col>
              <a href="http://chandigarhtourism.gov.in/">Chandigarh</a>
            </Col>
            <Col>
              Ph No.-7778889990
            </Col>
          </Row>
          <Row>
            <Col>
              <a href="http://www.mptourism.com/">Madhya Pradesh</a>
            </Col>
            <Col>
              <a href="http://www.uptourism.gov.in/">Uttar Pradesh</a>
            </Col>
            <Col>
              <a href="http://www.jktourism.jk.gov.in/">Jammu & Kashmir</a>
            </Col>
            <Col>
              <a href="http://www.delhitourism.gov.in/">Delhi</a>
            </Col>
            <Col>
              <a href="https://www.tourismdddnh.in/">Daman and Diu</a>
            </Col>
            <Col>
              Address:- Abc Nagar
            </Col>
          </Row>
          <Row>
            <Col>
              <a href="http://www.bihartourism.gov.in/">Bihar</a>
            </Col>
            <Col>
              <a href="https://uttarakhandtourism.gov.in/">Uttrakhand</a>
            </Col>
            <Col>
              <a href="https://www.maharashtratourism.gov.in/ ">Maharastra</a>
            </Col>
            <Col>
              <a href="https://www.lakshadweeptourism.com/">Lakswadweep</a>
            </Col>
            <Col>
              <a href="http://www.jktourism.jk.gov.in/ ">Ladakh</a>
            </Col>
            <Col>
              110001,Delhi,India
            </Col>
          </Row>
          <Row>
            <Col>
              <a href="http://odishatourism.gov.in/">Odhisa</a>
            </Col>
            <Col>
              <a href="http://www.sikkimtourism.gov.in/">Sikkim</a>
            </Col>
            <Col>
              <a href="http://www.wbtourismgov.in/">West Bengal</a>
            </Col>
            <Col>
              <a href="https://www.tourismdddnh.in/">Dadar & Nagar Havelli</a>
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
          <Row>
            <Col>
              <a href="http://megtourism.gov.in/">Meghalya</a>
            </Col>
            <Col>
              <a href="https://jharkhandtourism.gov.in/">Jharkhand</a>
            </Col>
            <Col>
              <a href="http://www.tamilnadutourism.org/">Tamil Nadu</a>
            </Col>
            <Col>
              <a href="https://www.andaman.gov.in/">Andaman & Nicobar</a>
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default App;
