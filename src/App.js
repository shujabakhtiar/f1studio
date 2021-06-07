import React, { useEffect, useState } from 'react';
import PieChart from "./D3components/PieChart"
import Pie from "./D3components/Pie"
import './App.css';
import LineChart from "./D3components/LineChart"
import BarChart from "./D3components/BarChart"
import HorizontalBar from './D3components/HorizontalBar';
const datas = [
  [10, 30, 40, 200,10],
 
]
var i = 0;

function App() {
  const [data, setData] = useState(  [10, 30, 40, 200,10]);

  useEffect(() => {
    //  changeData();
  }, []);

  const changeData = () => {
      setData(datas[i++]);
      if(i === datas.length) i = 0;
  }

  return (
    <div className="App">
    <div className="main-container">
      <div className="inner-container">
           {/*Name and timestamp*/}
           <div>
               <h3>Hello David</h3>
               <p className="timestamp">Last updated on: 23.2.20</p>
           </div>
           {/* MTTD and score */}
           <div className="mttd">
             <div className="mttd-data flex" >
               <div className="mttd-pie"> 
               <Pie outerRadius={40} innerRadius={30} piecolors={["#D2D7D8","#47987A"]} pieData={ [
            {item:"A",count:75},
            {item:"B",count:25},
                   
            
        ]}  text="25%" textlight="Health"/>
               </div>
               <div className="mttd-info">
                  <h2>Good</h2>
                  <p className="mttd-grey">Your score is up by 5% since yesterday</p>
               </div>
             </div>
             <div className="vline"></div>
             <div className="mttd-data" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
             <div>
             <div className="mttd-mid"><h2 className="bold" style={{marginRight:"5px"}}>401 </h2>  Applications </div>
               <div className="mttd-mid"><h2 className="bold"  style={{marginRight:"5px"}}>57 </h2> Critical (14% of Total)</div>
               <div className="mttd-mid"><h2 className="bold"  style={{marginRight:"5px"}}>20 </h2>  Warning (06% of Total) </div>
   
             </div>
             
             </div>
             <div className="vline"></div>
             <div className="mttd-data" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
             <div>
             <h2 className="bold">MTTD-25s</h2> 
             <h2 className="bold">MTTA-2m 3s</h2> 
             <h2 className="bold">MTTR-4h 36m 6s</h2> 
   
             </div>
             
             </div>           </div>

           {/* Health Status and Critical Issue */}
           <div className="container-spacebetween">
             <div className="health-block flex-column">
               <h3>Heath Status</h3>
               <div className="health-chart">
               <Pie outerRadius={64} innerRadius={54} piecolors={["#FFBD35","#00B59B","#FF4333"]} pieData={ [
            {item:"A",count:75},
            {item:"B",count:25},
            {item:"C",count:35},
          ]}text="407" text2="total" textlight=""/>
               </div>
               <div className="h-indicators">
                  <div className="flex ai-center" ><div className="circle" style={{backgroundColor:"#00B59B",marginLeft:"20px"}} ></div>Good</div>
                  <div className="flex ai-center"><div className="circle" style={{backgroundColor:"#FFBD35"}}></div>Warning</div>
                  <div className="flex ai-center"><div className="circle" style={{backgroundColor:"#FF4333"}}></div>Critical</div>
               </div>
               <hr className="hr"/>
               <p className="blue-info">10% Increase in Critical Issues</p>
             </div>

             <div className="critical-block flex-column">
               {/* Line Chart Goes here  */}
               <h3>Critical Issue Trend ( This year )</h3>
               <div className="ci-Line">               <LineChart data2={[
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
        
      ] } Pwidth={700} height={80} color={50} dotColor={88}/>
</div>
            
               <hr className="hr"/>
               <p className="blue-info">69% Increase in Critical Issues in the last month</p>
             </div>
           </div>

           {/* Infrastructure Discovered and service status*/}
           <div className="container-spacebetween">
             <div className="ID-block flex-column" style={{marginRight:"30px"}}>
             <h3>Infrastructure Discovered</h3>
               <div className="id-charts">  
               <div className="id-piechart"> 
               <Pie outerRadius={80} innerRadius={68} piecolors={["#7974CA","#13ABDC","#4B71F7"]} pieData={ [
            {item:"A",count:75},
            {item:"B",count:25},
            {item:"C",count:35},
            
        ]} text="" text2="" textlight=""/>
                </div>
                <div  className="id-piechart">
            <HorizontalBar data={[ {
     name:"Good",
     value:20,
     color:"#00B69B"   
    },
    {
        name:"Warning",
        value:30,
        color:"#FFBD35"   
       }, {
        name:"Critical",
        value:5,
        color:"#FF4333"   
       }, {
        name:"Total",
        value:10,
        color:"#486CFB"   
       }]}/></div>
</div>
               <div className="h-indicators">
               <div className="flex ai-center" style={{marginRight:"17px",marginLeft:"20px"}} ><div className="circle" style={{backgroundColor:"#92D4DC"}}></div>On Prem</div>
               <div className="flex ai-center" style={{marginRight:"17px"}} ><div className="circle" style={{backgroundColor:"#7972CD"}}></div>AWS</div>
               <div className="flex ai-center" style={{marginRight:"17px"}} ><div className="circle" style={{backgroundColor:"#13ABDC"}}></div>Azure</div>
               <div className="flex ai-center"  style={{marginRight:"17px"}}><div className="circle" style={{backgroundColor:"#4567FF"}}></div>Oracle</div>

               </div>
               <hr className="hr"/>
               <p className="blue-info">Oracle has the most number of critical issues</p>

            </div>
            <div className="ID-block flex-column">
            <h3>Service Status</h3>

            <div className="id-charts">
            <div className="id-piechart">
            <Pie outerRadius={80} innerRadius={68} piecolors={["#005D9D","#16B49B","#8ED4DE"]} pieData={ [
            {item:"A",count:75},
            {item:"B",count:15},
            {item:"C",count:35},
            
        ]} text="" text2="" textlight=""/></div>
                         <div className="id-piechart">
     <BarChart width={300} height={200} data={[10,33,20]} xdata={[{name:"Total"},{name:"up"},{name:"down"}]}/>

</div>
            </div>
            
               <div className="h-indicators">
               <div className="flex ai-center" style={{marginRight:"17px",marginLeft:"20px"}} ><div className="circle" style={{backgroundColor:"#92D4DC"}}></div>App</div>
               <div className="flex ai-center" style={{marginRight:"17px"}} ><div className="circle" style={{backgroundColor:"#00A9E0"}}></div>Database</div>
               <div className="flex ai-center" style={{marginRight:"17px"}} ><div className="circle" style={{backgroundColor:"#005B9F"}}></div>Web</div>
               </div>
               <hr className="hr"/>
               <p className="blue-info">Number of database services that are down have decreased by 5%</p>

              
            </div>
           </div>

           {/* Current expenses and cost trend */}
           <div className="container-spacebetween">
            <div className="current-expenses flex-column">
            <h3>Current Expenses</h3>
               <div>         
                 

</div>
<div className="h-indicators">
               <div className="flex ai-center" style={{marginRight:"17px",marginLeft:"20px"}} ><div className="circle" style={{backgroundColor:"#92D4DC"}}></div>Budget</div>
               <div className="flex ai-center" style={{marginRight:"17px"}} ><div className="circle" style={{backgroundColor:"#00A9E0"}}></div>Spent</div>
               </div>                    <hr className="hr"/>
               <p className="blue-info">Based on previous expenses, suggest a 10% increase</p>

              </div> 
              <div className="cost-trend flex-column">
              <h3>Cost Trend</h3>
               <div className="ci-Line">            

               <LineChart data2={[
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
        
      ] } Pwidth={600} height={80} color={50} dotColor={88}/>
</div>
<div className="h-indicators">
               <div className="flex ai-center" style={{marginRight:"17px",marginLeft:"20px"}} ><div className="circle" style={{backgroundColor:"#92D4DC"}}></div>Budget</div>
               <div className="flex ai-center" style={{marginRight:"17px"}} ><div className="circle" style={{backgroundColor:"#00A9E0"}}></div>Spent</div>
               <div className="flex ai-center" style={{marginRight:"17px"}} ><div className="circle" style={{backgroundColor:"#005B9F"}}></div>Forecast</div>
               </div>             
               
            <hr className="hr"/>
               <p className="blue-info">Current spending is higher than budgeted</p>

              </div>
           </div>

           {/*  OverAll Security */}
           <div className="OS flex-column">
           <h3>Overall Security</h3>
    <div className="OS-container">
      <div className="flex-column" style={{height:"80%"}}>
        <h2 className="bold">15</h2>
        <p className="mttd-grey">Incidents</p>  
        <span style={{height:"5px",width:"48px",background:"#FFBA5B"}}></span>

      </div>
      <div className="vline"></div>  
        <div className="flex-between"  style={{width:"35%"}}>
       <div className="flex-column">
        <h2 className="bold">4</h2>
        <p className="mttd-grey">Network</p>
      </div> <div className="flex-column">
        <h2 className="bold">4</h2>
        <p className="mttd-grey">Code</p>
      </div> <div className="flex-column">
        <h2 className="bold">4</h2>
        <p className="mttd-grey">Web</p>
      </div> <div className="flex-column">
        <h2 className="bold">3</h2>
        <p className="mttd-grey">Oss</p>
      </div>

       </div>
      <div className="vline">
        
      </div>
      <div className="flex"  style={{width:"35%"}}>
       <div className="flex-column">
        <h2 className="bold">2m 5s</h2>
        <p className="mttd-grey">MTTD</p>
      </div> <div className="flex-column">
        <h2 className="bold">3d4h5m</h2>
        <p className="mttd-grey">MTTR</p>
      </div> <div className="flex-column">
        <h2 className="bold">5h 30m</h2>
        <p className="mttd-grey">Patch Implant</p>
      </div> 
       </div>

    </div>
           </div>

           {/* Vulnerability */}
           <div className="container-spacebetween">
             <div className="vulnerability-block flex-column" style={{marginRight:"30px"}}>
             <h3>Network Vulnerability ( This week )</h3>
               <div className="id-charts">  
               <div className="id-piechart">
               <Pie outerRadius={60} innerRadius={45} piecolors={["#FF4333","#6490DE","#FFBD35"]} pieData={ [
            {item:"A",count:75},
            {item:"B",count:25},
            {item:"C",count:35},
            
        ]} text="" text2="" textlight=""/>     
                 
                 </div>        
                 <div className="id-piechart">

                       <LineChart data2={[
        { name: 'S', value: 30 },
        { name: 'M', value: 10 },
        { name: 'T', value: 50 },
        { name: 'W', value: 20 },
        { name: 'Th', value: 80 },
        { name: 'F', value: 30 },
        { name: 'Sa', value: 0 },
      
        
      ] } Pwidth={300} height={70} color={50} dotColor={88}/></div>

</div>

<div className="h-indicators">
               <div className="flex ai-center" style={{marginRight:"7px",marginLeft:"20px"}} ><div className="circle" style={{backgroundColor:"#92D4DC"}}></div>Critical</div>
               <div className="flex ai-center" style={{marginRight:"7px"}} ><div className="circle" style={{backgroundColor:"#00A9E0"}}></div>High</div>
               <div className="flex ai-center" style={{marginRight:"7px"}} ><div className="circle" style={{backgroundColor:"#00A9E0"}}></div>Medium</div>
               </div>


               <hr className="hr"/>
               <p className="blue-info">The infrastructure that was down has increased by 10% since yesterday.</p>


             </div>



 <div className="vulnerability-block flex-column" >
             <h3>Network Vulnerability ( This week )</h3>
               <div className="id-charts">  
               <div className="id-piechart">
               <Pie outerRadius={60} innerRadius={45} piecolors={["#FF4333","#6490DE","#FFBD35"]} pieData={ [
            {item:"A",count:75},
            {item:"B",count:25},
            {item:"C",count:35},
            
        ]} text="" text2="" textlight=""/>     
                 
                 </div>        
                 <div className="id-piechart">

                       <LineChart data2={[
        { name: 'S', value: 30 },
        { name: 'M', value: 10 },
        { name: 'T', value: 50 },
        { name: 'W', value: 20 },
        { name: 'Th', value: 80 },
        { name: 'F', value: 30 },
        { name: 'Sa', value: 0 },
      
        
      ] } Pwidth={300} height={70} color={50} dotColor={88}/></div>

</div>

<div className="h-indicators">
               <div className="flex ai-center" style={{marginRight:"7px",marginLeft:"20px"}} ><div className="circle" style={{backgroundColor:"#92D4DC"}}></div>Critical</div>
               <div className="flex ai-center" style={{marginRight:"7px"}} ><div className="circle" style={{backgroundColor:"#00A9E0"}}></div>High</div>
               <div className="flex ai-center" style={{marginRight:"7px"}} ><div className="circle" style={{backgroundColor:"#00A9E0"}}></div>Medium</div>
               </div>


               <hr className="hr"/>
               <p className="blue-info">The infrastructure that was down has increased by 10% since yesterday.</p>


             </div>           </div> 
           
           <div className="container-spacebetween">
             <div className="vulnerability-block" style={{marginRight:"30px"}}></div>
             <div className="vulnerability-block"></div>
           </div>

      </div>
    </div>
   </div>
  );
}

export default App;
