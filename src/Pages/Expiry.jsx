import './Expiry.css';
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

const ExpiryData = [
    {
        id: 1,
        name: "Product 01",
        quantityReceived: "85 Kg",
        warehouse: "WH-01",
        category: "AB Industries",
        exptime: "Today",
        source: "--"
    },
    {
        id: 2,
        name: "Product 01",
        quantityReceived: "22 Kg",
        warehouse: "WH-01",
        category: "AB Industries",
        exptime: "Today",
        source: "--"
    },
    {
        id: 3,
        name: "Product 01",
        quantityReceived: "567 Boxes",
        warehouse: "WH-01",
        category: "AB Industries",
        exptime: "Tomorrow",
        source: "53 Boxes are Damaged"
    },
    {
        id: 4,
        name: "Product 01",
        quantityReceived: "567 Boxes",
        warehouse: "WH-01",
        category: "AB Industries",
        exptime: "Tomorrow",
        source: "--"
    },
    {
        id: 5,
        name: "Product 01",
        quantityReceived: "567 Boxes",
        warehouse: "WH-01",
        category: "AB Industries",
        exptime: "Tomorrow",
        source: "Need more 1000 Ltr"
    },
    {
        id: 6,
        name: "Product 01",
        quantityReceived: "567 Boxes",
        warehouse: "WH-01",
        category: "AB Industries",
        exptime: "21/09/2025",
        source: "53 Boxes are Damaged"
    },
    {
        id: 7,
        name: "Product 01",
        quantityReceived: "567 Boxes",
        warehouse: "WH-01",
        category: "AB Industries",
        exptime: "21/09/2025",
        source: "--"
    },
    {
        id: 8,
        name: "Product 01",
        quantityReceived: "654 Bundle",
        warehouse: "WH-01",
        category: "AB Industries",
        exptime: "21/09/2025",
        source: "--"
    },
    {
        id: 9,
        name: "Product 01",
        quantityReceived: "889 Ltr",
        warehouse: "WH-01",
        category: "AB Industries",
        exptime: "21/09/2025",
        source: "Need more 1000 Ltr"
    },
]

const exptime = (exptime) => {
    switch (exptime) {
        case "Today": return "today";
        case "Tomorrow": return "tomorrow";
        default: return "other";
    }
}

function Expiry() {
  return (
    <div className='container-fluid'>
        <div className='m-2 bg-white rounded-3 ebody'>
            
            {/* header */}
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'15px 15px', marginTop:'20px'}}>

                <div>
                    <span className='ehead'>Expiry Items</span>
                </div>

                <div style={{display:'flex', gap:'15px'}} className='efilter'>

                    <input type="text" placeholder='Search items here...' style={{borderRadius:'10px', border:'1px solid gray', padding:'10px', width:'400px', color:'gray'}} className='einput-search' />

                    <div style={{borderRadius:'10px', border:'1px solid gray',padding:'10px', width:'200px', color:'gray'}}  className='einput-date'>
                    <label>Date</label>
                    <input type="date" placeholder='Date' />
                    </div>

                    <select style={{borderRadius:'10px', border:'1px solid gray',padding:'10px', width:'200px', color:'gray'}} className='eselect-transaction'>
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
                            <td style={{width:'12%'}}>Quantity Received</td>
                            <td style={{width:'12%'}}>Warehouse</td>
                            <td style={{width:'12%'}}>Category</td>
                            <td style={{width:'12%'}}>Expiry Date</td>
                            <td style={{borderTopRightRadius:'10px', width:'12%'}}>Remarks / Notes</td>
                        </tr>
                    </thead>
                    <tbody>
                    {ExpiryData.map((e) => 
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
                            <td style={{color:'gray'}}>{e.quantityReceived}</td>
                            <td style={{color:'gray'}}>{e.warehouse}</td>
                            <td style={{color:'gray'}}>{e.category}</td>
                            <td style={{color:'gray'}}><span className={`${exptime(e.exptime)}`} style={{padding:'2px 5px', borderRadius:'5px'}}>{e.exptime}</span></td>
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

export default Expiry