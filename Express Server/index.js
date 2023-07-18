const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors());

// Token for authentication
const authToken = process.env.TOKEN;

// Middleware to validate the token
const validateToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || authorization !== authToken) {
    return res.status(401).json({ error: 'Unauthorized access' });
  }

  next();
};

// API for rockets
app.get('/rockets', validateToken, async (req, res) => {
  try {
    const response = await axios.get('https://api.spacexdata.com/v4/rockets');
    const rockets = response.data;
    res.json(rockets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// API for capsules
app.get('/capsules', validateToken, async (req, res) => {
  try {
    const response = await axios.get('https://api.spacexdata.com/v4/capsules');
    const capsules = response.data;
    res.json(capsules);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// API for crews
app.get('/crews', validateToken, async (req, res) => {
  try {
    const response = await axios.get('https://api.spacexdata.com/v4/crew');
    const crews = response.data;
    res.json(crews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.get('/',(req,res)=>{
    res.send("SpaceXapp Server Runnig")
})

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
