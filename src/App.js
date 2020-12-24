// Core
import React from "react";
import './App.css'

var rect1_x = 190
var rect2_x = 190

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    
    var canvas = document.getElementById("lol");
    var ctx = canvas.getContext("2d");

    var ball_x = canvas.width/2
    var ball_y = canvas.height/7

    var x_direction = 1
    var y_direction = 1

    setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.draw(ctx, ball_x, ball_y);

      if (ball_x >= canvas.width && x_direction == 1){
        x_direction = -1
      }
      if (ball_x <= 0 && x_direction == -1){
        x_direction = 1
      }

      if (ball_y >= canvas.height-34 && y_direction == 1){
        // MAKE SURE THE BALL IS BETWEEN THE LEFT AND RIGHT OF THE RECTANGLE
        if(ball_x > rect1_x && ball_x < rect1_x + 100){
          y_direction = -1
        }
        else{
          console.log("game over")
        }
        //bounce up
      }

      if (ball_y <= 30 && y_direction == -1){
        // MAKE SURE THE BALL IS BETWEEN THE LEFT AND RIGHT OF THE RECTANGLE
        if(ball_x > rect2_x && ball_x < rect2_x + 100){
          y_direction = 1
        }
        else{
          console.log("game over")
        }
        //bounce down
      }

    //x = left/right
    //y = up/down
      
      ball_x += x_direction*1;
      ball_y += y_direction*2;
    }, 8);

  }

  draw = (ctx, ball_x, ball_y) => {
    
    // rectangle
    ctx.beginPath();
    ctx.rect(rect1_x, 10, 100, 20);
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
    ctx.rect(rect2_x, 290, 100, 20);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
  }
  render() {
    return (
      <div className="app" tabIndex="0" onKeyDown = {(e)=>{

      if(e.key == "a" && rect1_x > 0){
        rect1_x -= 11
        console.log(e.key)
        console.log("aiyo")
      }
      if(e.key == "d" && rect1_x < 480-100){
        rect1_x +=11
        console.log(e.key)
      }
      if(e.key == "ArrowLeft" && rect2_x > 0){
        rect2_x -= 11
        console.log(e.key)
      }
      if(e.key == "ArrowRight" && rect2_x < 480-100){
        rect2_x += 11
        console.log(e.key)
      }
      }}>
        Dr Clover is the best
        <canvas width={480} height= {320}
           id = "lol"></canvas>
      </div>
    );
  }
}


export default App;