import React, { Component,useState } from 'react';
import '../styles/Summary.css';
import { CiEdit } from 'react-icons/ci';

// export default class Summary extends Component {
//     constructor(props){
//         super(props);
//     }

//     render(){
//         return  (
//         <div className='section-container'>
//             <div className='section-title section-heading'>Summary</div>
//             <div className='section-text'>
//                {this.props.summaryData}
//             </div>
//             <CiEdit className='section-top-icon icon none' onClick={this.props.toggleEdit}/>
//         </div>
//         )
//     }    
// }

// export class SummaryEditor extends Component {
//     constructor(props){
//         super(props);
//         this.state= {summary:this.props.summaryData}
//     }

//     render(){
//         return  (
//         <div className='editor-container'>
//             <div className='editor-header'>
//                 <span className='editor-header-title'>Summary</span>
//             </div>
//             <div className='editor-content summary-content'>
//                 {/* <div className='summary'> */}
//                     <label htmlFor='summaryText'>How can you describe yourself?</label>
//                     <textarea id='sumaryText' onChange={(e)=> this.setState({summary:e.target.value})} value={this.state.summary}></textarea>
//                 {/* </div> */}
//             </div>
//             <div className='editor-footer'>
//                 <button className='btn' onClick={()=>this.props.handleEdit(false,null)}>Cancel</button>
//                 <button className='btn save' onClick={()=>this.props.handleEdit(true,this.state.summary)}>Save</button>
//             </div>
//         </div>
//         )
//     }    
// }

export default function Summary({summaryData,toggleEdit}){
    // constructor(props){
    //     super(props);
    // }

    // render(){
    return  (
    <div className='section-container'>
        <div className='section-title section-heading'>Summary</div>
        <div className='section-text'>
            {summaryData}
        </div>
        <CiEdit className='section-top-icon icon none' onClick={toggleEdit}/>
    </div>
    )
    // }    
}

export function SummaryEditor({summaryData,handleEdit}){
    // constructor(props){
    //     super(props);
    //     this.state= {summary:this.props.summaryData}
    // }

    const [summary_data,setSummary_data] = useState(summaryData);

    // render(){
    return  (
    <div className='editor-container'>
        <div className='editor-header'>
            <span className='editor-header-title'>Summary</span>
        </div>
        <div className='editor-content summary-content'>
            {/* <div className='summary'> */}
                <label htmlFor='summaryText'>How can you describe yourself?</label>
                <textarea id='sumaryText' onChange={(e)=> setSummary_data(e.target.value)} value={summary_data}></textarea>
            {/* </div> */}
        </div>
        <div className='editor-footer'>
            <button className='btn' onClick={()=>handleEdit(false,null)}>Cancel</button>
            <button className='btn save' onClick={()=>handleEdit(true,summary_data)}>Save</button>
        </div>
    </div>
    )
    // }    
}