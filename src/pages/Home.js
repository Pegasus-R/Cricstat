import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css"


const myStyle={
  backgroundImage:`url(${process.env.PUBLIC_URL+ "/ground1.jpg"})`,
  height:'100vh',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const Home = () => (
  <main class="background" style={myStyle}>
    {/* <div class="container"><button onClick={routeChange} class="btn btn-lg btn-warning btn-block" style={myStyle1}>Get Started!</button></div> */}
    <h1>Welcome to <span>API enabled</span> webapp which wil give you a detailed database on <span>Cricket Players.</span></h1>
  </main>
);

export default Home;
