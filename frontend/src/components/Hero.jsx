import { Container, Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/";
import { toast } from 'react-toastify'



const Hero = () => {

  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.auth);
  //TODO DISABLE THIS SHIT WHEN LOGGED IN 

  const checkLoggedIn = () => {
    if (userInfo) {
      toast.error("You are already logged in. This is not your fault, this is the shitty developer's for letting you see this while logged in.")
      navigate('/profile')
    } else { 
      navigate('/login')
    }
  }

  return (
    <div className=" py-5">
      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
          <h1 className="text-center mb-4">Hyrule's Home</h1>
          <p className="text-center mb-4">
            This is now a Zelda API app that I'll routinely update. 
          </p>
          <div className="d-flex">
            <LinkContainer to='/login'>
              <Button variant="primary"  className="me-3" onClick={checkLoggedIn}>
                Sign In
              </Button>
            </LinkContainer>
            <LinkContainer to='/register'>
              <Button variant="secondary" onClick={checkLoggedIn}>
              Register
              </Button>
            </LinkContainer>
          </div>
        </Card>
      </Container>
    </div>
  )
}

export default Hero