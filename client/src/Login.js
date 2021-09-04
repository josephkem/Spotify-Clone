import React from "react";
import { Container } from "react-bootstrap";
const auth_url =
  "https://accounts.spotify.com/authorize?client_id=62eb3eb3f3204d979323b9244059aeaf&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

export default function Login() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <a href={auth_url} className="btn btn-success btn-lg">
        Login With Spotify
      </a>
    </Container>
  );
}
