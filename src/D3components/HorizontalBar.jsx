import React,{useRef,useEffect,useState} from 'react'
import {select,scaleBand,scaleLinear,max,axisBottom,axisLeft} from "d3"
const HorizontalBar = ({data}) => {
    const svgRef = useRef();
    const wrapperRef=useRef(); 
    
    useEffect(() => {
        const svg = select(svgRef.current)
        

        const yScale = scaleBand()
        .domain(data.map((value,index)=>value.name))
        .rangeRound([0,120])
        .paddingInner(0.7)

        const xScale= scaleLinear()
        .domain([0,max(data,entry=>entry.value)])
        .range([0,250])
        const xAxis = axisBottom(xScale);

        const yAxis = axisLeft(yScale);
        svg.select(".y-axis").style("transform","translateX(0px)").call(yAxis);

        svg.selectAll(".bar").data(data).join("rect").attr("class","bar")
        .attr("x",0)
        .attr("width",entry=>xScale(entry.value))
        .attr("y",(entry,index)=>yScale(entry.name))
        .attr("fill",entry=>entry.color)
        .transition()
        .attr("height",10);
        

    }, [])
    return (
        <div ref={wrapperRef} style={{}}>
            <svg ref={svgRef}>
            <g className="y-axis"/>

            </svg>
        </div>
    )
}

export default HorizontalBar
