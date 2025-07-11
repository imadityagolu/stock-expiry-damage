import './Damage.css';
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import { MdDateRange } from "react-icons/md";

const damageData = [
    {
        id: 1,
        name: "Product 01",
        quantityReceived: "85 Kg",
        category: "WH-01",
        status: "Ramesh",
        reason: "--"
    },
    {
        id: 2,
        name: "Product 01",
        quantityReceived: "22 Kg",
        category: "WH-01",
        status: "Suresh",
        reason: "--"
    },
    {
        id: 3,
        name: "Product 01",
        quantityReceived: "567 Boxes",
        category: "WH-01",
        status: "Ramesh",
        reason: "53 Boxes are Damaged"
    },
    {
        id: 4,
        name: "Product 01",
        quantityReceived: "567 Boxes",
        category: "WH-01",
        status: "Ramesh",
        reason: "--"
    },
    {
        id: 5,
        name: "Product 01",
        quantityReceived: "567 Boxes",
        category: "WH-01",
        status: "Ramesh",
        reason: "Need more 1000 Ltr"
    },
    {
        id: 6,
        name: "Product 01",
        quantityReceived: "567 Boxes",
        category: "WH-01",
        status: "Ramesh",
        reason: "53 Boxes are Damaged"
    },
    {
        id: 7,
        name: "Product 01",
        quantityReceived: "567 Boxes",
        category: "WH-01",
        status: "Ramesh",
        reason: "--"
    },
    {
        id: 8,
        name: "Product 01",
        quantityReceived: "654 Bundle",
        category: "WH-01",
        status: "Ramesh",
        reason: "--"
    },
    {
        id: 9,
        name: "Product 01",
        quantityReceived: "889 Ltr",
        category: "WH-01",
        status: "Ramesh",
        reason: "Need more 1000 Ltr"
    },
]

function Damage() {
  return (
    <div className='container-fluid'>
        <div className='m-2 bg-white rounded-3 dbody'>
            
            {/* header */}
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'15px 15px', marginTop:'20px'}}>

                <div>
                    <span className='dhead'>Damaged or Returned Items</span>
                </div>

                <div style={{display:'flex', gap:'15px'}} className='dfilter'>

                    <div style={{borderRadius:'10px', border:'1px solid gray',padding:'10px', width:'200px', color:'gray', display:'flex', justifyContent:'space-between', alignItems:'center'}}  className='dinput-date'>
                        <label>Date</label>
                        <input type="date" placeholder='Date' />
                        <MdDateRange />
                    </div>

                </div>
            </div>

            {/* table */}
            <div style={{padding:'0px 15px 10px'}}>
                <table style={{width:'100%'}}>
                    <thead>
                        <tr style={{width:'100%', backgroundColor:'#007AFF', color:'white'}}>
                            <td style={{borderTopLeftRadius:'10px', padding:'5px 5px', width:'40%'}}>Product name</td>
                            <td style={{width:'12%'}}>Quantity</td>
                            <td style={{width:'12%'}}>Category</td>
                            <td style={{width:'12%'}}>Status</td>
                            <td style={{borderTopRightRadius:'10px', width:'12%'}}>Reason for Return</td>
                        </tr>
                    </thead>
                    <tbody>
                    {damageData.map((e) => 
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
                            <td style={{color:'gray'}}>{e.category}</td>
                            <td style={{color:'gray'}}>{e.status}</td>
                            <td style={{color:'gray'}}>{e.reason}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Damage