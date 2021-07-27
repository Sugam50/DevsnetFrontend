import { Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import ContactUs from './components/ContactUs';



function App() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Indian Tourism</Navbar.Brand>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contactus">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
      <header className="w-full bg-gray-500 flex-wrap">
        <nav className="flex flex-row  items-center justify-end bg-gray-500 w-full h-16 p-5">
          <div className="flex flex-row items-center justify-start w-2/3 mx-20">
            <img className="w-10 h-10 m-5 rounded-full" src="https://assets.turbologo.com/blog/en/2019/11/19084834/gaming-logo-cover.jpg" alt=""></img>
            <h1>Indian Tourism</h1>
          </div>
          <div className="flex flex-row items-center justify-evenly w-1/3">
            <Link to="/" >Home</Link>
            <Link to="/about" >About</Link>
            <Link to="/contactus" >Contact Us</Link>
          </div>
        </nav>
      </header>


      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/contactus" component={ContactUs} />
      </Switch>

      <footer className="flex justify-center w-full h-2/3 bg-gray-500">
        <table className=" flex-wrap w-5/6 inline-block p-5">
          <thead>
            <tr>
            <th> State Tourism Websites</th>
            <th></th>
            <th> Union Territory Websites</th>
            <th></th>
            <th></th>
            <th>Contact Us</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <a href="https://www.gujarattourism.com/">Gujrat</a>
            </td>
            <td>
              <a href="https://www.keralatourism.org/">Kerela</a>
            </td>
            <td>
              <a href="https://tourism.assam.gov.in/">Assam</a>
            </td>
            <td>
              <a href="http://www.pondytourism.in/">Pudduchery</a>
            </td>
            <td>
              <a href="http://chandigarhtourism.gov.in/">Chandigarh</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://www.gujarattourism.com/">Gujrat</a>
            </td>
            <td>
              <a href="https://www.keralatourism.org/">Kerela</a>
            </td>
            <td>
              <a href="https://tourism.assam.gov.in/">Assam</a>
            </td>
            <td>
              <a href="http://www.pondytourism.in/">Pudduchery</a>
            </td>
            <td>
              <a href="http://chandigarhtourism.gov.in/">Chandigarh</a>
            </td>
            <td>
              Ph No.-7778889990
            </td>
          </tr>
          <tr>
            <td>
              <a href="http://www.mptourism.com/">Madhya Pradesh</a>
            </td>
            <td>
              <a href="http://www.uptourism.gov.in/">Uttar Pradesh</a>
            </td>
            <td>
              <a href="http://www.jktourism.jk.gov.in/">Jammu & Kashmir</a>
            </td>
            <td>
              <a href="http://www.delhitourism.gov.in/">Delhi</a>
            </td>
            <td>
              <a href="https://www.tourismdddnh.in/">Daman and Diu</a>
            </td>
            <td>
              Address:- Abc Nagar
            </td>
          </tr>
          <tr>
            <td>
              <a href="http://www.bihartourism.gov.in/">Bihar</a>
            </td>
            <td>
              <a href="https://uttarakhandtourism.gov.in/">Uttrakhand</a>
            </td>
            <td>
              <a href="https://www.maharashtratourism.gov.in/ ">Maharastra</a>
            </td>
            <td>
              <a href="https://www.lakshadweeptourism.com/">Lakswadweep</a>
            </td>
            <td>
              <a href="http://www.jktourism.jk.gov.in/ ">Ladakh</a>
            </td>
            <td>
              110001,Delhi,India
            </td>
          </tr>
          <tr>
            <td>
              <a href="http://odishatourism.gov.in/">Odhisa</a>
            </td>
            <td>
              <a href="http://www.sikkimtourism.gov.in/">Sikkim</a>
            </td>
            <td>
              <a href="http://www.wbtourismgov.in/">West Bengal</a>
            </td>
            <td>
              <a href="https://www.tourismdddnh.in/">Dadar & Nagar Havelli</a>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <a href="http://megtourism.gov.in/">Meghalya</a>
            </td>
            <td>
              <a href="https://jharkhandtourism.gov.in/">Jharkhand</a>
            </td>
            <td>
              <a href="http://www.tamilnadutourism.org/">Tamil Nadu</a>
            </td>
            <td>
              <a href="https://www.andaman.gov.in/">Andaman & Nicobar</a>
            </td>
            <td></td>
            <td></td>
          </tr>
          </tbody>
        </table>

      </footer>

      {/* <footer className=" bg-dark text-white-50 p-5">
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
      </footer> */}
    </div>
  );
}

export default App;
