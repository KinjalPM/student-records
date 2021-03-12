import React from 'react'
import {XYPlot,VerticalBarSeries ,XAxis,YAxis,HorizontalGridLines } from 'react-vis';
function Plot(){
    return(
<div>
{/* ---------------PLOT GRRAPH----------------------- */}
<h6><em>Top Employer Chat: </em></h6>
<XYPlot width={500} height={250} xType="ordinal">
            <HorizontalGridLines />
            <VerticalBarSeries
               data={[
                  { x: "Amazon", y: 20},
                  { x: "TCS", y: 5 },
                  { x: "Streich Inc", y: 15 },
                  { x: "Marquardt LLC", y: 10 },
                  { x: "Google", y: 25 }

               ]}
            />
            <XAxis />
            <YAxis />
            </XYPlot>
           
{/* ---------------------------------------------------- */}
</div>
    )
}

export default Plot;