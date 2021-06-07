import * as d3 from 'd3';
import React,{useRef,useEffect,useState} from 'react'

import {select,line, scaleLinear,max, axisBottom,axisLeft,scaleBand}from "d3"


function BarChart({ width, height, data,xdata,space }){
    const ref = useRef();
    const [data2,setData2]=useState(xdata);
    useEffect(() => {
        const svg = d3.select(ref.current)
            
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
.domain(data2.map(d => d.name)).rangeRound([0,width]).padding(0);



var yScale = d3.scaleLinear()
.domain([0, max(data,entry=>entry)])
.range([0, height]);

const xAxis = axisBottom(xScale).tickSize(0);
const yAxis = axisLeft(yScale).tickSize(0);

svg.select(".x-axis").style("transform","translateY(120px)").call(xAxis);
svg.select(".y-axis").style("transform","translateY(0px)").call(yAxis);

      
        
        selection
            .transition().duration(300)
                .attr("height", (d) => yScale(d))
                .attr("y", (d) => height - yScale(d))

        selection
            .enter()
            .append("rect")
            .attr("x", (d, i) =>i*space)
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
            <g className="y-axis"/>
            </svg>
        </div>
        
    )

}

export default BarChart;