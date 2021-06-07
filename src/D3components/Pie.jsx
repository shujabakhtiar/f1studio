import React,{useRef,useState,useEffect} from 'react'
import * as d3 from "d3"

const Pie = ({outerRadius,innerRadius,piecolors,pieData,text,textlight,text2}) => {
    const pieChart = useRef()
    const [radius,setRadius]=useState(outerRadius)
    const cache = useRef(pieData);
    const createPie = d3
    .pie()
    .value(d => d.value)
    .sort(null);
    const [data,setData]=useState(
       pieData
    )
    const createArc = d3
    .arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);

    const arc= d3.arc().innerRadius(innerRadius).outerRadius(radius)
function mouseOver(){
   // setRadius(35)
}
function mouseOut(){
  //  setRadius(10)
    console.log("hEY")
}
    useEffect(() => {
    console.log(outerRadius,innerRadius,piecolors,pieData)
    setData(pieData)
    const piedata= d3.pie().value(d=>d.count)(data)
    //const arc= d3.arc().innerRadius(10).outerRadius(20)
    const colors=d3.scaleOrdinal(piecolors)
    const prevData = createPie(cache.current);

    const svg= d3.select(pieChart.current)
    .attr('width',20)
    .attr('height',20)
    .append('g')
    .style('background-color','yellow')
    .attr('transform','translate(300,300')

    const arcTween = (d, i) => {
        const interpolator = d3.interpolate(prevData[i], d);

        return t => createArc(interpolator(t));
      };

    svg.append('g')
    .selectAll('path')
    .data(piedata)
    .join('path')
    .attr('d',arc)
    .attr('fill',(d,i)=>colors(i))
    .transition(1000)
        .attrTween("d", arcTween);
    
    
  //  console.log(piedata)
    }, [radius])

    return (
        <div id="chartArea">
            <svg ref={pieChart} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                     </svg>
               <div className="posi-fixed">
               <h2>{text}<br/>
                {text2}
                <p className="mttd-grey" style={{fontSize:"10px"}}>{textlight}</p>
               </h2>
            
            
                </div>      
 
        </div>
    )
}

export default Pie
