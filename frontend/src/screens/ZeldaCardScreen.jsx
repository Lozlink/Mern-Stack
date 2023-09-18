import React, { useState, useEffect }from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import axios from 'axios'
import { toast } from 'react-toastify';

const ZeldaCardScreen = () => {
  const [zeldaGames, setZeldaGames ] = useState([]);

  const retrieveGames = () => {
    try {
      axios.get('https://zelda.fanapis.com/api/games')
      .then(res => setZeldaGames(res.data))
      console.log(zeldaGames)
    } catch (error) {
      toast.error(err?.data?.message || error.error)
    }
  };

  useEffect(() => {
    retrieveGames();
  }, [setZeldaGames])

  return (
    <Card>

    </Card>
  )
}

export default ZeldaCardScreen