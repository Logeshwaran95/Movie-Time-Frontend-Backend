import React from "react";
import { useState,useEffect } from "react";
import axios from 'axios';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";

import SwiperCore, {
  Navigation,Pagination,Autoplay
} from 'swiper';

SwiperCore.use([Navigation,Pagination,Autoplay]);

export default function Subscription(props) {

  const handleSubscribe = () => {
    Swal.fire({
      title: 'Alert !',
      text: "You are about to Subscribe",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Continue!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Subscribtion Request Sent!',
          'Check Your Email for Payment Details',
          'success'
        )
      }
    })
  }

  return (
    <div style={{margin:"2%"}}>
      <h2 style={{textAlign:"center"}}>Subscribe to watch all content on Movie Time</h2>
      <br></br>
    <Table borderless style={{width:"65%",margin:"auto",background:"#182032",color:"white"}}>
  <thead>
    <tr>
      <th></th>
      <th>Super</th>
      <th>Premium</th>
  
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td>All content</td>
      <td><span style={{}}>&#10004;</span></td>
      <td><span style={{}}>&#10004;</span></td>
    </tr>
    <tr>
    
      <td>Watch on TV or Laptop</td>
      <td><span style={{}}>&#10004;</span></td>
      <td><span style={{}}>&#10004;</span></td>
    </tr>
    <tr>
   
      <td>Ads free movies and shows (except sports)</td>
      <td><span style={{}}>&#10008;</span></td>
      <td> <span style={{}}>&#10004;</span></td>
    </tr>
    <tr>
   
      <td>Number of devices that can be logged in</td>
      <td>2</td>
      <td>4</td>
    </tr>
    <tr>
   
      <td>Max video quality</td>
      <td>Full HD (1080p)</td>
      <td>4K (2160p)</td>
    </tr>
    <tr>
   
      <td>Max audio quality</td>
      <td>Dolby 5.1</td>
      <td>Dolby 5.1</td>
    </tr>
    <tr>
      <td>Choose your Plan</td>
      <td><Button onClick={handleSubscribe}>Continue with Super <br></br> ₹899/Year</Button></td>
      <td><Button onClick={handleSubscribe}>Continue with Premium <br></br>₹1499/Year</Button></td>
    </tr>
  </tbody>
</Table>
    </div>
  )
}