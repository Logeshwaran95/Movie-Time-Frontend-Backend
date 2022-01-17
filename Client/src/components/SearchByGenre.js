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


export default function SearchByGenre() {
    const {genre}=useParams();
  return (
      <div>
          <h2 style={{textAlign:"center",marginTop:"3rem"}}>Popular in {genre}</h2>
    <MoreLikeThis genre={genre}/>
    </div>
  )
}