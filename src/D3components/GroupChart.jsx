import React,{useRef,useEffect,useState} from 'react'
import * as d3 from 'd3';
import {select,line, scaleLinear,max, axisBottom,axisLeft,scaleBand}from "d3"


const GroupChart = () => {
    const ref = useRef();
    const [data2,setData2]=useState();
    const margin = {top: 20, right: 20, bottom: 30, left: 40};
   const  width = 960 - margin.left - margin.right;
  const  height = 500 - margin.top - margin.bottom;
    useEffect(() => {
        const svg = d3.select(ref.current)
        draw();
            
    }, []);
    return (
        <div className="chart">
        <svg ref={ref}>
        <g className="x-axis"/>
        <g className="y-axis"/>
        </svg>
    </div>
    )
}

export default GroupChart
