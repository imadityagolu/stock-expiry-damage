import './Stock.css';
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

const data = [
    {
        id: 1,
        name: "Product 01",
        quantity: "85 Kg",
        status: "Stock-In",
        handedby: "Aman",
        time: "11:09 am",
        source: "--"
    },
    {
        id: 2,
        name: "Product 01",
        quantity: "22 Kg",
        status: "Stock-Out",
        handedby: "Ajay",
        time: "11:09 am",
        source: "--"
    },
    {
        id: 3,
        name: "Product 01",
        quantity: "567 Boxes",
        status: "Stock-In",
        handedby: "Aman",
        time: "11:09 am",
        source: "53 Boxes are Damaged"
    },
    {
        id: 4,
        name: "Product 01",
        quantity: "567 Boxes",
        status: "Stock-In",
        handedby: "Aman",
        time: "11:09 am",
        source: "--"
    },
    {
        id: 5,
        name: "Product 01",
        quantity: "567 Boxes",
        status: "Stock-In",
        handedby: "Anup",
        time: "11:09 am",
        source: "Need more 1000 Ltr"
    },
    {
        id: 6,
        name: "Product 01",
        quantity: "567 Boxes",
        status: "Stock-In",
        handedby: "Abhay",
        time: "11:09 am",
        source: "53 Boxes are Damaged"
    },
    {
        id: 7,
        name: "Product 01",
        quantity: "567 Boxes",
        status: "Stock-In",
        handedby: "Aman",
        time: "11:09 am",
        source: "--"
    },
    {
        id: 8,
        name: "Product 01",
        quantity: "654 Bundle",
        status: "Stock-In",
        handedby: "Ajay",
        time: "11:09 am",
        source: "--"
    },
    {
        id: 9,
        name: "Product 01",
        quantity: "889 Ltr",
        status: "Stock-In",
        handedby: "Amar",
        time: "11:09 am",
        source: "Need more 1000 Ltr"
    },
]

const status = (status) => {
    switch (status) {
        case "Stock-In": return "stockin";
        case "Stock-Out": return "stockout";
        default: return "";
    }
}

function Stock() {
  return (
    <div className='container-fluid'>
        <div className='m-2 bg-white rounded-3 sbody'>
            
            {/* header */}
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'15px 15px', marginTop:'20px'}}>

                <div>
                    <span className='shead'>Stocks In/Out</span>
                </div>

                <div style={{display:'flex', gap:'15px'}} className='sfilter'>

                    <input type="text" placeholder='Search items here...' style={{borderRadius:'10px', border:'1px solid gray', padding:'10px', width:'400px', color:'gray'}} className='sinput-search' />

                    <div style={{borderRadius:'10px', border:'1px solid gray',padding:'10px', width:'200px', color:'gray'}}  className='sinput-date'>
                    <label>Date</label>
                    <input type="date" placeholder='Date' />
                    </div>

                    <select style={{borderRadius:'10px', border:'1px solid gray',padding:'10px', width:'200px', color:'gray'}} className='sselect-transaction'>
                        <option>Transaction type</option>
                        <option>option 2</option>
                    </select>

                </div>
            </div>

            {/* table */}
            <div style={{padding:'0px 15px 10px'}}>
                <table style={{width:'100%'}}>
                    <thead>
                        <tr style={{width:'100%', backgroundColor:'#007AFF', color:'white'}}>
                            <td style={{borderTopLeftRadius:'10px', padding:'5px 5px', width:'40%'}}>Product name</td>
                            <td style={{width:'12%'}}>Quantity</td>
                            <td style={{width:'12%'}}>Status</td>
                            <td style={{width:'12%'}}>Handled By</td>
                            <td style={{width:'12%'}}>Time</td>
                            <td style={{borderTopRightRadius:'10px', width:'12%'}}>Source/Destination</td>
                        </tr>
                    </thead>
                    <tbody>
                    {data.map((e) => 
                        <tr key={e.id} style={{borderTop:'1px solid gray'}}>
                            <td style={{display:'flex', alignItems:'center', gap:'5px'}}>
                                <div>
                                    <input type="checkbox"/>
                                </div>
                                <div>
                                <span style={{color:'#007AFF'}}>{e.name}</span>
                                <br/>
                                <span style={{color:'gray'}}>(SKU)</span>
                                </div>
                            </td>
                            <td style={{color:'gray'}}>{e.quantity}</td>
                            <td style={{color:'gray'}}><span className={`${status(e.status)}`} style={{padding:'2px 5px', borderRadius:'5px'}}>{e.status}</span></td>
                            <td style={{color:'gray'}}>{e.handedby}</td>
                            <td style={{color:'gray'}}>{e.time}</td>
                            <td style={{color:'gray'}}>{e.source}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>

            {/* result index */}
            <div style={{display:'flex', justifyContent:'space-between', padding:'5px 15px 20px', alignItems:'center'}}>
                <div style={{display:'flex', gap:'10px'}}>
                    <span style={{color:'gray'}}>Result Per page</span> 
                    <select style={{border:'1px solid gray', color:'gray', borderRadius:'5px'}}>
                        <option>10</option>
                        <option>20</option>
                    </select>
                </div>
                <div style={{display:'flex', gap:'10px', alignItems:'center'}}>
                    <GrFormPrevious style={{color:'#007AFF'}}/>
                    <div style={{}}>
                        <button style={{backgroundColor:'#007AFF', color:'white', border:'1px solid gray'}}>01</button>
                        <button style={{border:'1px solid gray', color:'gray'}}>02</button>
                        <button style={{border:'1px solid gray', color:'gray'}}>03</button>
                    </div>
                    <MdNavigateNext style={{color:'#007AFF'}}/></div>
            </div>
        </div>
    </div>
  )
}

export default Stock