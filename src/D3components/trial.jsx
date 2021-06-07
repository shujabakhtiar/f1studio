import React,{useRef,useEffect,useState} from 'react'
import {select,line, scaleLinear, axisBottom,axisLeft,scaleBand}from "d3"

const LineChart = () => {
    const [data,setData]=useState([25,30,45,60,30,30,20,44,32 ]);
    const [data2,setData2]=useState([
        { name: 'Jan', value: 30 },
        { name: 'Feb', value: 10 },
        { name: 'Mar', value: 50 },
        { name: 'Apr', value: 20 },
        { name: 'May', value: 80 },
        { name: 'Jun', value: 30 },
        { name: 'July', value: 0 },
        { name: 'Aug', value: 20 },
        { name: 'Sep', value: 100 },
        { name: 'Oct', value: 55 },
        { name: 'Nov', value: 60 },
        { name: 'Dec', value: 80 },
      ],);
    const svgRef=useRef();
    const parentWidth = 500;

    const margins = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      };
useEffect(()=>{
const svg = select(svgRef.current);
const width = parentWidth - margins.left - margins.right;


const xScale = scaleLinear()
.domain([0,data.length - 1]).range([0, 300])

const xScale = scaleBand()
.domain(data2.map(d => d.name)).rangeRound([0, width]).padding(0.1);

const yScale = scaleLinear().domain([0,175]).range([150,0])

const xAxis = axisBottom(xScale);
const yAxis = axisLeft(yScale);
svg.select(".x-axis").style("transform","translateY(150px)").call(xAxis);


svg.select(".y-axis").style("transform","translateX(0px)").call(yAxis);
//generated the d attribute
const myLine=line()
.x((value,index)=>xScale(index))
.y(value=>yScale(value));
svg
.selectAll(".line").
data([data]).
join("path").
attr("class","line")
.attr("d",myLine)
.attr("fill","none")
.attr("stroke","blue")
},[data])
    return (
        <>
          <svg ref={svgRef}> 
          <g className="x-axis"/>
          <g className="y-axis"/>
       
         </svg>
        </>
    )
}

export default LineChart
