// Core
import React from "react";
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    
    var canvas = document.getElementById("lol");
    var ctx = canvas.getContext("2d");

    var ball_x = canvas.width/2
    var ball_y = canvas.height/2

    setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.draw(ctx, ball_x, ball_y);
      ball_x += -2;
      ball_y += -2;
    }, 8);

  }

  draw = (ctx, ball_x, ball_y) => {
    
    // rectangle
    ctx.beginPath();
    ctx.rect(190, 10, 100, 20);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();

    // circle
    ctx.beginPath();
    ctx.arc(ball_x, ball_y, 15, 0, Math.PI*2, false);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
    
    //border
    // ctx.beginPath();
    // ctx.rect(160, 10, 100, 40);
    // ctx.strokeStyle = "green";
    // ctx.stroke();
    // ctx.closePath();

    // rectangle
    ctx.beginPath();
    ctx.rect(190, 290, 100, 20);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
  }
  render() {
    return (
      <div className="app">
        Dr Clover is the best
        <canvas width={480} height= {320}
           id = "lol"></canvas>
      </div>
    );
  }
}


export default App;