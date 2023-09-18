import React, { useState, useEffect }from 'react';
import { Container, Button, Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import { toast } from 'react-toastify';
import Loader from '../components/Loader';

const ZeldaCardScreen = () => {
  const [zeldaGames, setZeldaGames ] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const retrieveGames = async () => {
    try {
      await axios.get('https://zelda.fanapis.com/api/games')
      .then(res => setZeldaGames(res.data))
      setIsLoading(false)
      console.log(zeldaGames.data)
    } catch (error) {
      toast.error(err?.data?.message || error.error)
      setIsLoading(false)
    }
  };

  useEffect(() => {
    retrieveGames();
  }, [isLoading])

  return (
    <Container>
      {isLoading ? (
        <>
          <Loader />
          <p>Help</p>
        </>
      ) : (
        <Row xs={1} md={2} lg={3} className='g-4'>
          {zeldaGames.data.map((game) => (
            <Col key={game.id}>
              <Card style={{ height: '300px', width: '300px', padding: '10px' }} className='overflow-auto'>
                <Card.Body style={{ height: '300px', width: '300px' }}>
                  <Card.Title>{game.name}</Card.Title>
                  <Card.Text>{game.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};


export default ZeldaCardScreen