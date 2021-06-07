import * as d3 from 'd3';
import React,{useRef,useEffect,useState} from 'react'

import {select,line, scaleLinear,max, axisBottom,axisLeft,scaleBand}from "d3"


function BarChart({ width, height, data,xdata }){
    const ref = useRef();
    const [data2,setData2]=useState([
        {name:"Total",value:23},{name:"up",value:98},{name:"down"}
      ]);
    useEffect(() => {
        const svg = d3.select(ref.current)
            .attr("width", 200)
            .attr("height", height)
            .style("border", "1px solid black")
    }, []);

    useEffect(() => {
        draw();
    }, [data]);
   // const colors = d3.scaleOrdinal(d3.schemeCategory10);
   var colors = ['#005B9F','#005B9F','#005B9F'];
    const draw = () => {
        
        const svg = d3.select(ref.current);
        var selection = svg.selectAll("rect").data(data);

     
const xScale = scaleBand()
.domain(data2.map(d => d.name)).rangeRound([0,70]).padding(0);

const xAxis = axisBottom(xScale);
const yAxis = axisLeft(yScale);
svg.select(".x-axis").style("transform","translateY(200px)").call(xAxis);

        var yScale = d3.scaleLinear()
                            .domain([0, max(data,entry=>entry.value)])
                            .range([0, height-100]);
        
        selection
            .transition().duration(300)
                .attr("height", (d) => yScale(d))
                .attr("y", (d) => height - yScale(d))

        selection
            .enter()
            .append("rect")
            .attr("x", (d, i) =>i*30)
            .attr("y", (d) => height)
            .attr("width", 10)
            .attr("height", 0)
            .attr("fill", function(d, i) {
                return colors[i]})
            .transition().duration(300)
                .attr("height", (d) => yScale(d))
                .attr("y", (d) => height - yScale(d))
        
        selection
            .exit()
            .transition().duration(300)
                .attr("y", (d) => height)
                .attr("height", 0)
            .remove()
    }


    return (
        <div className="chart">
            <svg ref={ref}>
            <g className="x-axis"/>
            </svg>
        </div>
        
    )

}

export default BarChart;