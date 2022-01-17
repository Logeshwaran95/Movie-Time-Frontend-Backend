import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

function PopularInCrime() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    try {
      const response = await axios.get('https://movie-time-backend.herokuapp.com/movies/crime');
      console.log(response);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <div style={{ margin: "-30px 40px", marginTop: "-60px" }}>
      <h3>Popular in Crime</h3>
      <Row style={{ height: "330px" }} className="row">
        <Swiper slidesPerView={2} autoplay={{
          "delay": 2500,
          "disableOnInteraction": false
        }} spaceBetween={13} loop={true} loopFillGroupWithBlank={true} navigation pagination={{
          "clickable": true,
          "type": "none"
        }} breakpoints={{
          "640": {
            "slidesPerView": 2,
            "spaceBetween": 20
          },
          "768": {
            "slidesPerView": 4,
            "spaceBetween": 40
          },
          "1024": {
            "slidesPerView": 6,
            "spaceBetween": 50
          }
        }} className="mySwiper">
          {data.map((mov) =>
            <SwiperSlide className="slider">
              <Col style={{ marginTop: "25px" }} onClick={() => window.location.href = "/movies/" + mov._id}>
                <Card className="card">
                  <Card.Img variant="top" src={mov.image} style={{ height: "250px" }} />
                  <Card.Body>
                    <Card.Title>{mov.title}</Card.Title>
                    <Card.Text>
                      {mov.actor}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </SwiperSlide>
          )}
        </Swiper>
      </Row>
    </div>
  )
}

export default PopularInCrime;