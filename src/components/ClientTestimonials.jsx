import React from "react";
import { Card, Carousel, CarouselItem } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles/test.css";

function ClientTestimonials() {
  return (
    <>
      <div className="TestimonialSection desktop">
        <Card className="TestCardComponent">
          <Card.Img
            className="CardImages"
            variant="top"
            src="https://preview.redd.it/rnb3syrx44c81.png?auto=webp&s=60f049e33b26f62ef27ef0b72f40d56bb49e3e2c"
          />
          <Card.Body>
            <Card.Title className="title">Genshin Impact</Card.Title>
            <Card.Title className="stars">⭐⭐⭐⭐⭐</Card.Title>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </span>
          </Card.Body>
        </Card>
        <Card className="TestCardComponent">
          <Card.Img
            className="CardImages"
            variant="top"
            src="https://preview.redd.it/rnb3syrx44c81.png?auto=webp&s=60f049e33b26f62ef27ef0b72f40d56bb49e3e2c"
          />
          <Card.Body>
            <Card.Title className="title">Genshin Impact</Card.Title>
            <Card.Title className="stars">⭐⭐⭐⭐⭐</Card.Title>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </span>
          </Card.Body>
        </Card>
        <Card className="TestCardComponent">
          <Card.Img
            className="CardImages"
            variant="top"
            src="https://preview.redd.it/rnb3syrx44c81.png?auto=webp&s=60f049e33b26f62ef27ef0b72f40d56bb49e3e2c"
          />
          <Card.Body>
            <Card.Title className="title">Genshin Impact</Card.Title>
            <Card.Title className="stars">⭐⭐⭐⭐⭐</Card.Title>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </span>
          </Card.Body>
        </Card>
        <Card className="TestCardComponent">
          <Card.Img
            className="CardImages"
            variant="top"
            src="https://preview.redd.it/rnb3syrx44c81.png?auto=webp&s=60f049e33b26f62ef27ef0b72f40d56bb49e3e2c"
          />
          <Card.Body>
            <Card.Title className="title">Genshin Impact</Card.Title>
            <Card.Title className="stars">⭐⭐⭐⭐⭐</Card.Title>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </span>
          </Card.Body>
        </Card>
      </div>

      {/* mobile carousel */}
      <div className="TestimonialSection mobile">
        <Carousel>
          <CarouselItem>
            <Card className="TestCardComponent">
              <Card.Img
                className="CardImages"
                variant="top"
                src="https://preview.redd.it/rnb3syrx44c81.png?auto=webp&s=60f049e33b26f62ef27ef0b72f40d56bb49e3e2c"
              />
              <Card.Body>
                <Card.Title className="title">Genshin Impact</Card.Title>
                <Card.Title className="stars">⭐⭐⭐⭐⭐</Card.Title>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </span>
              </Card.Body>
            </Card>
          </CarouselItem>

          <CarouselItem>
            <Card className="TestCardComponent">
              <Card.Img
                className="CardImages"
                variant="top"
                src="https://preview.redd.it/rnb3syrx44c81.png?auto=webp&s=60f049e33b26f62ef27ef0b72f40d56bb49e3e2c"
              />
              <Card.Body>
                <Card.Title className="title">Genshin Impact</Card.Title>
                <Card.Title className="stars">⭐⭐⭐⭐⭐</Card.Title>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </span>
              </Card.Body>
            </Card>
          </CarouselItem>

          <CarouselItem>
            <Card className="TestCardComponent">
              <Card.Img
                className="CardImages"
                variant="top"
                src="https://preview.redd.it/rnb3syrx44c81.png?auto=webp&s=60f049e33b26f62ef27ef0b72f40d56bb49e3e2c"
              />
              <Card.Body>
                <Card.Title className="title">Genshin Impact</Card.Title>
                <Card.Title className="stars">⭐⭐⭐⭐⭐</Card.Title>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </span>
              </Card.Body>
            </Card>
          </CarouselItem>

          <CarouselItem>
            <Card className="TestCardComponent">
              <Card.Img
                className="CardImages"
                variant="top"
                src="https://preview.redd.it/rnb3syrx44c81.png?auto=webp&s=60f049e33b26f62ef27ef0b72f40d56bb49e3e2c"
              />
              <Card.Body>
                <Card.Title className="title">Genshin Impact</Card.Title>
                <Card.Title className="stars">⭐⭐⭐⭐⭐</Card.Title>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam,
                </span>
              </Card.Body>
            </Card>
          </CarouselItem>
        </Carousel>
      </div>
    </>
  );
}

export default ClientTestimonials;
