import React,{useRef,useEffect,useState} from 'react'
import {select,line, scaleLinear, axisBottom,axisLeft,scaleBand}from "d3"
import { extent } from 'd3-array';


const LineChart = ({data2,Pwidth}) => {
    const [data,setData]=useState([25,30,45,60,30,30,20,44,32 ]);

    const svgRef=useRef();
    const parentWidth = Pwidth;

    const margins = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      };
useEffect(()=>{
  const svg = select(svgRef.current);
const width = parentWidth - margins.left - margins.right;
const svgContent = svg.select(".content");

  
//const xScale = scaleLinear()
//.domain([0,data.length - 1]).range([0, width])

const xScale = scaleBand()
.domain(data2.map(d => d.name)).rangeRound([0, width]).padding(0.1);

const yScale = scaleLinear().domain(extent(data2, d => d.value)).range([167,0])

    



const xAxis = axisBottom(xScale);
const yAxis = axisLeft(yScale);
svg.select(".x-axis").style("transform","translateY(167px)")
.call(xAxis);


svg.select(".y-axis").style("transform","translateX(0px)").call(yAxis);
//generated the d attribute
const myLine=line()
.x((value,index)=>xScale(value.name))
.y(value=>yScale(value.value));

svg
.selectAll(".line").
data([data2]).
join("path").
attr("class","line")
.attr("d",myLine)
.attr("fill","none")
.attr("stroke","#646464")

svgContent.selectAll(".myDot")
.data([data2])
.join("circle")
.attr("class","myDot")
.attr("stroke","black")
.attr("r",4)
.attr("fill","orange")
.attr("cx",(value,index)=>xScale(value.name))
.attr("cy",(value=>yScale(value.value)))
}


,[data])
    return (
        <>
          <svg ref={svgRef}> 
          <g className="x-axis">
    
          {/*data.map((d, i) => {
    return <circle
      key={i}
      cx={d}
      cy={i}
      r={5}
      style={{
        fill: 'white',
        stroke: 'black'
      }}
    />
  })*/}

          </g>
          <g className="y-axis"/>

         </svg>
        </>
    )
}

export default LineChart
