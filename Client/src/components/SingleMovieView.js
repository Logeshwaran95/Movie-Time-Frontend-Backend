import Row from "react-bootstrap/esm/Row";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from 'axios';
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import MoreLikeThis from "./MoreLikeThis";

import SwiperCore, {
    Navigation, Pagination, Autoplay
} from 'swiper';

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function SingleMovieView() {
    const { movid } = useParams();
    const [singledata, setSingleData] = useState([]);
    useEffect(async () => {
        try {
            const response = await axios.get(`https://movie-time-backend.herokuapp.com/movies/${movid}`);
            console.log(response);
            setSingleData(response.data);
            console.log([response.data]);
        } catch (error) {
            console.error(error);
        }
    }, []);

    return (
        <div style={{ margin: "10px 18px", marginTop: "1%", color: "white" }}>
            <div class="card singleCard">
                {singledata.map((mov) =>
                    <div class="row no-gutters">
                        <div class="col-auto" id="img-wrap" style={{ background: "#030B17", padding: "3rem" }}>
                            <img src={mov.image} class="img-fluid" id="imgs" alt="" style={{ height: "450px", width: "330px", marginLeft: "1%" }} />
                        </div>
                        <div class="col" id="mobileDetail" style={{ background: "#030B17" }}>
                            <div class="card-block px-4" style={{ marginTop: "5%", marginLeft: "3%" }}>
                                <h5 style={{ color: "yellow" }}>Subscriber</h5>
                                <h1 class="card-title">{mov.title} ({mov.year})</h1>
                                <h6 class="card-title" style={{ color: "grey" }}> {mov.release} {mov.certificate}</h6>
                                <h5 class="card-title" >{mov.synopsis}</h5>


                                <h5 class="card-title">Genre</h5>
                                <h5 class="card-text" style={{ color: "grey" }}>{mov.genre}</h5>
                                <h5 class="card-title">Runtime</h5>
                                <h5 class="card-text" style={{ color: "grey" }}>{mov.runtime}</h5>
                                <h5 class="card-title">Overview</h5>
                                <p class="card-text" style={{ color: "rgb(179, 183, 188)" }}>{mov.plot}</p>
                                <a href={mov.trailer} class="btn btn-primary">Watch Now</a>

                            </div>
                        </div>


                        <div class="card-footer w-100 text-muted" style={{ color: "white", borderBottom: "2px solid black" }}>
                            Available in : Tamil &nbsp;Telugu &nbsp;Hindi
                </div>
                    </div>

                )}

            </div>
            <br></br>
            <h3 style={{ color: "black" }}>Trailer and Extras</h3>
            <br></br>
            {singledata.map((mov) =>
                <Card className="card" id="trailer" style={{ height: "240px", width: "135px" }}>
                    <iframe width="350" height="250" src={mov.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen id="frame"></iframe>
                </Card>

            )}
            <h3 style={{ color: "black", marginTop: "3rem" }}>More Like This</h3>
            {singledata.map((mov) =>
                <MoreLikeThis genre={mov.genre} />
            )}
        </div>
    )
}