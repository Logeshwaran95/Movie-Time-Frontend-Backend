import Row from "react-bootstrap/esm/Row";
import { useState,useEffect } from "react";
import { useParams } from "react-router";
import axios from 'axios';
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import MoreLikeThis from "./MoreLikeThis";
import Swal from "sweetalert2";

import SwiperCore, {
  Navigation,Pagination,Autoplay
} from 'swiper';

SwiperCore.use([Navigation,Pagination,Autoplay]);

export default function SingleMovieView() {
    const {title} = useParams();
    const [singledata, setSingleData] = useState([]);
    useEffect(async () => {
        try {
            const response = await axios.get(`https://movie-time-backend.herokuapp.com/movies/search/${title}`);
            console.log(response);
            setSingleData(response.data);
            console.log([response.data]);
        } catch (error) {
            console.error(error);
        }
    }, []); 

    if (!singledata.length) {
        return <div>
            <h2 style={{textAlign:"center",marginTop:"5rem"}}>No movie found with the title "{title}"</h2>
            <h3 style={{textAlign:"center",marginTop:"3rem"}}>Check some related movies to your search below</h3>
            <MoreLikeThis genre="romance"/>
        </div>
      }
      return (
        <div style={{margin:"40px 40px",marginTop:"3%"}}>
    <h3>Search results</h3>
    <Row style={{height:"330px"}} className="row">
    <Swiper slidesPerView={2} autoplay={{
  "delay": 2500,
  "disableOnInteraction": false
}}  spaceBetween={13}  navigation pagination={{
  "clickable": true,
  "type":"none"
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
  { singledata.map((mov) => 
      <SwiperSlide className="slider">
          <Col style={{marginTop:"25px"}} onClick={() => window.location.href="/movies/"+mov._id}>
                         <Card className="card">
                             <Card.Img variant="top" src={mov.image} style={{height:"250px"}}/>
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