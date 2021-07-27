import { Carousel, Container, Button, Collapse, Row, Card, Col, Image } from 'react-bootstrap';
import { useState } from 'react';

export default function Home() {
  const [open, setOpen] = useState(false);
  var [readmore, setRead] = useState("Read More");

  return (
    <div className="Home">

      <Carousel fade controls={false} indicators={false}>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1455620611406-966ca6889d80?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=720&ixid=MnwxfDB8MXxyYW5kb218MHx8aW5kaWEsbW9udW1lbnRzfHx8fHx8MTYyNzEwODY2NA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1597109216022-71b4810ed4c0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=720&ixid=MnwxfDB8MXxyYW5kb218MHx8aW5kaWEsdGVtcGxlc3x8fHx8fDE2MjcxMDg3OTQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1609670289875-590e8ec05c88?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=720&ixid=MnwxfDB8MXxyYW5kb218MHx8aW5kaWEsbW9udW1lbnRzfHx8fHx8MTYyNzEwODczMA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <br />
      <Container>
        <Row>
          One of the oldest civilisations in the world, India is a mosaic of multicultural experiences. With a rich heritage and myriad attractions,
          the country is among the most popular tourist destinations in the world. It covers an area of 32, 87,263 sq. km, extending from the snow-covered
          Himalayan heights to the tropical rain forests of the south. As the 7th largest country in the world,
          India stands apart from the rest of Asia, marked off as it is by mountains and the sea, which give the country a distinct geographical entity.

          <Collapse in={open} style={{ "padding": "0px" }}>
            <div id="example-collapse-text">
              Fringed by the Great Himalayas in the north, it stretches southwards and at the Tropic of Cancer,
              tapers off into the Indian Ocean between the Bay of Bengal on the east and the Arabian Sea on the west.
              As you travel the expanse of the country, you are greeted by diverse nuances of cuisines, faiths, arts, crafts,
              music, nature, lands, tribes, history and adventure sports. India has a mesmeric conflation of the old and the new.
              As the bustling old bazaars rub shoulders with swanky shopping malls, and majestic monuments accompany luxurious heritage hotels,
              the quintessential traveller can get the best of both worlds.Head to the mountains, enjoy a beach retreat or
              cruise through the golden Thar, India has options galore for all.
            </div>
          </Collapse>
        </Row>
        <br />
        <Row >
          <Button variant="link"
            onClick={() => {
              setOpen(!open);
              (readmore === "Read More") ? setRead("Read Less") : setRead("Read More")
            }}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            {readmore}
          </Button>
        </Row>
        <br />
        <Row>
          <Carousel className="carausel" variant="dark" indicators={false}>
            <Carousel.Item>
              <div className="items">
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://www.incredibleindia.org/content/dam/incredibleindia/images/places/munnar/munnar-pampadum-shola-national-park-20.jpg/jcr:content/renditions/cq5dam.web.256.256.jpeg" />
                  <Card.Body>
                    <Card.Title>Munnar</Card.Title>
                    <Card.Text>
                      Munnar  is a town and hill station on Western Ghats mountain ranges located in the Idukki district of the southwestern Indian state of Kerala.
                    </Card.Text>
                    <Button variant="primary" onClick={()=>{
                     
                    }}>Learn More</Button>
                  </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://www.incredibleindia.org/content/dam/incredible-india-v2/images/home/orignial.jpg/jcr:content/renditions/cq5dam.web.256.256.jpeg" />
                  <Card.Body>
                    <Card.Title>Statue of Unity</Card.Title>
                    <Card.Text>
                      This is a colossal statue of Indian statesman and independence activist Vallabhbhai Patel
                    </Card.Text>
                    <Button variant="primary" onClick={() => {
                     
                    }}>Learn More</Button>
                  </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://www.incredibleindia.org/content/dam/incredibleindia/images/places/kochi/kochi-chinese-fishing-nets-1.jpg/jcr:content/renditions/cq5dam.web.256.256.jpeg" />
                  <Card.Body>
                    <Card.Title>Kochi</Card.Title>
                    <Card.Text>
                      Kochi is a major port city on the Malabar Coast of India bordering the Laccadive Sea, which is a part of the Arabian Sea
                    </Card.Text>
                    <Button variant="primary" onClick={() => {
                      console.log(Card.Title)
                    }}>Learn More</Button>
                  </Card.Body>
                </Card>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="items">
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://www.incredibleindia.org/content/dam/incredibleindia/images/places/goa/goa-vagator-beach-1.jpg/jcr:content/renditions/cq5dam.web.256.256.jpeg" />
                  <Card.Body>
                    <Card.Title>Goa</Card.Title>
                    <Card.Text>
                      Goa is a state on the southwestern coast of India within the region known as the Konkan, and geographically separated from the Deccan highlands by the Western Ghats.
                    </Card.Text>
                    <Button variant="primary" onClick={() => {
                     
                    }}>Learn More</Button>
                  </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://www.incredibleindia.org/content/dam/incredible-india-v2/images/video/poster/shillong.jpg/jcr:content/renditions/cq5dam.web.256.256.jpeg" />
                  <Card.Body>
                    <Card.Title>Shillong</Card.Title>
                    <Card.Text>
                      Shillong is a hill station in the northeastern part of India and the capital of Meghalaya, which means "The Abode of Clouds".
                    </Card.Text>
                    <Button variant="primary" onClick={() => {
                      
                    }}>Learn More</Button>
                  </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://www.incredibleindia.org/content/dam/incredible-india-v2/images/places/khajuraho/khajuraho-khajuraho-group-of-monuments-khajuraho-group-of-monuments.jpg/jcr:content/renditions/cq5dam.web.256.144.jpeg" />
                  <Card.Body>
                    <Card.Title>Khajuraho</Card.Title>
                    <Card.Text>
                      The Khajuraho Group of Monuments are a group of Hindu and Jain temples in Chhatarpur district, Madhya Pradesh, India, about 175 kilometres southeast of Jhansi.
                    </Card.Text>
                    <Button variant="primary" onClick={() => {
                      
                    }}>Learn More</Button>                  
                    </Card.Body>
                </Card>
              </div>
            </Carousel.Item>
          </Carousel>
        </Row>
        <br />
        <Row>
          <Col xs={6} md={4}>
            <Image src="https://www.incredibleindia.org/content/dam/incredible-india-v2/images/experiences/spiritual/buddhism/1920-1080.jpg/jcr:content/renditions/cq5dam.web.512.384.jpeg" thumbnail />
            <caption>Heritage</caption>
          </Col>
          <Col xs={6} md={4}>
            <Image src="https://www.incredibleindia.org/content/dam/incredible-india-v2/images/experiences/adventure/river-rafting-rishikesh/river-rafting-rishikesh.jpg/jcr:content/renditions/cq5dam.web.512.384.jpeg" thumbnail />
            <caption>Adventure</caption>
          </Col>
          <Col xs={6} md={4}>
            <Image style={{ "width": "34rem", "height": "15rem" }} src="https://www.incredibleindia.org/content/dam/incredible-india-v2/images/places/amritsar/sarson-da-saag.jpg/jcr:content/renditions/cq5dam.web.512.384.jpeg" thumbnail />
            <caption>Food</caption>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={6} md={4}>
            <Image src="https://www.incredibleindia.org/content/dam/incredible-india-v2/images/experiences/art/musica-forms/musica-forms.jpg/jcr:content/renditions/cq5dam.web.512.384.jpeg" thumbnail />
            <caption>Art</caption>
          </Col>
          <Col xs={6} md={4}>
            <Image src="https://www.incredibleindia.org/content/dam/incredible-india-v2/images/experiences/nature/1920-1080.jpg/jcr:content/renditions/cq5dam.web.512.384.jpeg" thumbnail />
            <caption>Nature</caption>
          </Col>
          <Col xs={6} md={4}>
            <Image style={{ "width": "34rem", "height": "15rem" }} src="https://www.incredibleindia.org/content/dam/incredible-india-v2/images/experiences/spiritual/Spiritual-Banner.jpg/jcr:content/renditions/cq5dam.web.512.384.jpeg" thumbnail />
            <caption>Spiritual</caption>
          </Col>
        </Row>

      </Container>

    </div>
  );
}
