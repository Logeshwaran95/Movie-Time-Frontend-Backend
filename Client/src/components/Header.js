import React from 'react'
import { useState } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import Swal from "sweetalert2";

const Header= () => {
  const [disable, setDisable] = React.useState(false);
  const [emailaddress, setEmailAddress] = useState("");
  const [passwordd, setPasswordd] = useState("");
  const [login,setLogin] = useState("Login");

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  function clearInput() {
    setEmailAddress("");
    setPasswordd("");
}
const brandTrigger = () => {
  Swal.fire({
    // title: 'Sweet!',
    // text: 'Modal with a custom image.',
    imageUrl: 'https://i.postimg.cc/jdsLzLZR/new.png',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
    background:'#131A28',
    confirmButtonText: 'Continue Watching !',
  })
}
async function UserPost() {
  const userDetails = {
      "email": emailaddress,
      "password": passwordd,
      "LoggedIn":"true"
  }
  if(emailaddress=="" || passwordd==""){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please Fill All the Fields'
    })
  }
  else
  await axios.post('https://movie-time-backend.herokuapp.com/user-login', userDetails).then((data)=>{ 
  Toast.fire({
    icon: 'success',
    title: 'Logged in successfully'
  })
  setDisable(true);
  setLogin("Logged In");
  handleClose();
  clearInput()})
  .catch((err)=>Swal.fire({
    icon: 'error',
    title: `<strong>${err.message}</strong>`,
     showCloseButton: true,
      }));
}
  let [title,setTitle] = useState("");
  function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
 }
  const handleEnter = (event) => {
    if (event.key === "Enter"){
   setTitle(event.target.value);
   if(event.target.value===""){
    window.location.href=`/movies/search/none`;
   }
   else{
    window.location.href=`/movies/search/${titleCase(title)}`;
   }
    }
  }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <div>
  <Navbar expand="lg" variant='dark' style={{background:'#131A28'}}>
  <Container fluid style={{margin:"0px 80px"}}>
    <Navbar.Brand onClick={brandTrigger}><img src="https://i.postimg.cc/jdsLzLZR/new.png" alt="logo" style={{height:"60px",marginLeft:"-60px",cursor:"pointer"}}/></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" style={{marginRight:"-50px"}}/>
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px'}}
        navbarScroll
      >
        <Nav.Link style={{margin:"0px 15px"}} href="/">Home</Nav.Link>
        <Nav.Link href="/AllMovies" style={{margin:"0px 15px"}}>Movies</Nav.Link>
        
        <NavDropdown title="Genre" id="navbarScrollingDropdown" onClick={() => { Toast.fire({
    icon: 'info',
    title: 'Choose a genre to Filter'
  })}}>
          <NavDropdown.Item href="/movies/genre/action">Action</NavDropdown.Item>
          <NavDropdown.Item href="/movies/genre/horror">Horror</NavDropdown.Item>
          <NavDropdown.Item href="/movies/genre/romance">Romance</NavDropdown.Item>
          <NavDropdown.Item href="/movies/genre/crime">Crime</NavDropdown.Item>
          <NavDropdown.Item href="/movies/genre/superheroes">Superheroes</NavDropdown.Item>
          {/* <NavDropdown.Divider /> */}
        </NavDropdown>
      <Button variant="primary" style={{margin:"0px 15px"}} href="/subscription" id="subs">Subscribe</Button>
      </Nav>
     
      <Form className="d-flex" onSubmit={e => { e.preventDefault(); }}>
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e) => setTitle(e.target.value)}
          onKeyPress={handleEnter}
          id="search"
        />
        {/* <Button variant="primary" onClick={handleSearch} style={{margin:"0px 15px"}}>Search</Button> */}
        <Button style={{margin:"0px 15px",width:"150px"}} onClick={handleShow} id="login" disabled={disable}>{login}</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
     
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login to Continue</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={emailaddress} onChange={(e) => setEmailAddress(e.target.value)}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" value={passwordd} onChange={(e) => setPasswordd(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Remember Me" />
  </Form.Group>
  {/* <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Dont have an account ?</Form.Label>
    <Button variant="primary" style={{marginLeft:"2rem"}}>
    Sign Up
  </Button>
  </Form.Group> */}

</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={UserPost}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
</div>
    )
}

export default Header;

