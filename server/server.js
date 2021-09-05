const express = require("express");
const SpotifyWebApi = require("spotify-web-api-node");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/refresh", (req, res) => {
  const refreshToken = req.body.refreshToken;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:3000",
    clientId: "62eb3eb3f3204d979323b9244059aeaf",
    clientSecret: "e8736211e4164424afaa4f57cc129415",
    refreshToken,
  });

  spotifyApi
    .refreshAccessToken()
    .then((data) => {
      res.json({
        accessToken: data.body.accessToken,
        expiresIn: data.body.expiresIn,
      });
    })
    .catch(() => {
      res.sendStatus(400);
    });
});

app.post("/login", (req, res) => {
  const code = req.body.code;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:3000",
    clientId: "62eb3eb3f3204d979323b9244059aeaf",
    clientSecret: "e8736211e4164424afaa4f57cc129415",
  });

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(400);
    });
});

app.listen(3001);
