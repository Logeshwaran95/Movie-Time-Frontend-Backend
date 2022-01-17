import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";
import "swiper/swiper.scss";
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import { useState, useEffect } from "react";
import axios from 'axios';

import SwiperCore, {
  Navigation, Pagination, Autoplay
} from 'swiper';

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function AllMovies() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    try {
      const response = await axios.get('https://movie-time-backend.herokuapp.com/movies/latest');
      console.log(response);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div style={{ margin: "40px 75px", marginTop: "3%" }}>
      <h3>Latest Movie Picks For You</h3>
      <Row style={{ height: "100%" }}>
        {data.map((mov) =>
          <Col style={{ marginTop: "35px" }} onClick={() => window.location.href = "/movies/" + mov._id}>
            <Card className="card" style={{ width: "200px" }}>
              <Card.Img variant="top" src={mov.image} style={{ height: "250px" }} />
              <Card.Body>
                <Card.Title>{mov.title}</Card.Title>
                <Card.Text>
                  {mov.actor}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
    </div>
  )
}