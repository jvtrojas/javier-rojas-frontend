import React, { Component } from 'react';
import Konva from 'konva';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';

export default class CanvasComponent extends Component {

    constructor(props) {
        super(props);
        this.circles= [];
        this.circle= [];

        this.width = window.innerWidth;
        var height = window.innerHeight;
    }

    componentDidMount() {
        var amplitude = 100 ;
        var period = 10000;
        // in ms
        var centerX = this.width / 2;
        for(let i=0; i < 40; i++){
            var anim = new Konva.Animation(frame => {
                this.circle[i].x(amplitude * Math.sin((frame.time * 2 * Math.PI) / period) + this.circle[i].x())
           // this.circle[i].x((Math.sin(frame.time * 2 * Math.PI) / period )+ this.circle[i].x());
        //    console.log("---->>>>", this.circle[i].x() +
        //    (amplitude * Math.sin((frame.time * 2 * Math.PI * Math.random() * 10) / period)))
        //             this.circle[i].x(this.circle[i].x() +
        //             (amplitude * Math.sin((frame.time * 2 * Math.PI * Math.random() * 10) / period)));
        //             this.circle[i].y(this.circle[i].y() +
        //             (amplitude * Math.sin((frame.time * 2 * Math.PI * Math.random() * 10) / period)));
        //             console.log()
                // this.circle[i].x(this.circle[i].x() + (Math.random() - 0.5) * 10);
               //  this.circle[i].y(this.circle[i].y() + (Math.random() - 0.5) * 10);
              }, this.circle[i].getLayer());
              anim.start();
        }
        }
    render() {
        //var circles = [];
        for(let i=0; i < 40; i++){
        var r = 7;
        var x = window.innerWidth*Math.random();
        var y = window.innerHeight*Math.random();
        this.circles.push(<Circle ref = {node => {this.circle[i] = node;}} x={x} y={y} radius={r} fill="green" />)
    }
    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
                {this.circles}
            </Layer>
      </Stage>
    );
  }
}
