import React, { useState, useEffect }from 'react';
import { Container, Button} from 'react-bootstrap';
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
    <div>
      {isLoading ? (
        <>
          <Loader />
          <p>Help</p>
        </>
      ) : (
        <div>
          {zeldaGames.data.length > 0 && zeldaGames.data.map(( game) => 
            <Card key={game.id} style={{height: '300px', width: '300px'}}>
              <Card.Body>
                <Card.Title>{game.name}</Card.Title>
                <Card.Text>{game.description}</Card.Text>
              </Card.Body>
            </Card>
          )}
        </div>
      )}
    </div>
  );
}

export default ZeldaCardScreen