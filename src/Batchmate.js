import React, { useEffect, useState } from 'react'
import { info } from './Batchinfo'
import './batch.css'



function Batchmate()
{

    const [search,setsearch]=useState(null)
    const [found,setfound]=useState(false)
    const [total,settotal]=useState(null)
    const [c,setc]=useState(null)
    const [it,setit]=useState(null)
    const [m,setm]=useState(null)
    const [e,sete]=useState(null)

  

   
    useEffect(()=>{
        var tot;
        var c;
    var i;
    var e;
    var m;
    setfound(false);

        info.map((item)=>{
            if(item.id===search)
            {
                
                setfound(true);
                 tot=(item.computer)+(item.it)+(item.electrical)+(item.mechanical);
                 c=item.computer;
                 i=item.it;
                 e=item.electrical;
                 m=item.mechanical;
               
            }
        });
        settotal(tot);
        setc(c);
        setit(i);
        sete(e);
        setm(m);

    },[search])

    return(
        <div className="b">
            
            <div className="batchcard">
             
            
            <div className="bhead">Search For Your Batchmates</div>
            <div className="sbatch"><input type="text" placeholder="Enter year"  onChange={e=>{setsearch(e.target.value)}}></input></div>
            <div className="bcard">
            
                {search===null?<div>Search result will be reflected here!! </div>:
                <div>

{found?<div>
                  <div className="batch">Batch of {search}</div>
                 <div className="hline"></div>
                 <div className="binf">
                <div className="Total bi">Total students were : {total}</div>
                <div className="computer bi"> Computer ststudents were : {c}</div>
                <div className="it bi"> IT students were : {it}</div>
                <div className="electrical bi"> Electrical students were : {e}</div>
                <div className="mechanical bi"> Mechanical students were : {m}</div>
                </div>
                {/* {setfound(false)} */}
               
              </div>:
              <div className="notfound">No search found !<br/>
              <div className="warn">  Please search year between 2000-2020 </div>
              </div>}

                </div>
                }
              

            </div>
            </div>
            
        </div>
    );
}
export default Batchmate;
