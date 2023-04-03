import React, { Component,useState } from 'react';
import '../styles/Experience.css';
import { CiEdit } from 'react-icons/ci';
import { AiOutlinePlus } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import { GrClose } from "react-icons/gr";


// export default class Experience extends Component {
//     constructor(props){
//         super(props);
//     }
//     render(){
//         return  (
//             <div className='section-container'>
//                 <div className='section-title section-heading'>Experience</div>
//                 <div className='section-details section-text'>
//                     {this.props.experienceData.map((experience,index)=>{
//                         return (
//                             <section className='sub-section' key={index}>
//                                 <div className='item-content'>
//                                     <span>{experience.company} | </span>
//                                     <span>{experience.location.city}, </span>
//                                     <span>{experience.location.state}</span>
//                                 </div>
//                                 <div className='item-content'>
//                                     <span>{experience.title} | </span>
//                                     <span>{experience.date.start} - {experience.date.end}</span>
//                                 </div>
//                                 <div className='item-description'>
//                                     <ul>
//                                         {experience.responsibilities.map((responsibility,index)=><li key={index}>{responsibility}</li>)}
//                                     </ul>
//                                 </div>
//                                 <div className="section-top-icon icons">
//                                     <CiEdit className='icon none' onClick={()=>this.props.editExperience(index)}/>
//                                     <BiTrash className='icon none' onClick={()=>this.props.deleteExperience(index)}/>
//                                 </div>
//                             </section>
//                         );
//                     })}
//                 </div>
//                 <AiOutlinePlus className='section-top-icon icon none' onClick={()=>this.props.editExperience(null)}/>
//             </div>
//         )
//     }    
// }

// export class ExperienceEditor extends Component {
//     constructor(props){
//         super(props);
//         this.state= {experience_data:this.props.experienceData?this.props.experienceData:
//             {
//                 company:null,
//                 title:null,
//                 date:{start:null,end:null},
//                 location:{
//                     city:null,
//                     state:null
//                 },
//                 responsibilities:[]
//             }}
//     }

//     static getDerivedStateFromProps(props,state){
//         if(!props.experienceData)
//             return {
//                 experience_data: {
//                     company:null,
//                     title:null,
//                     date:{start:null,end:null},
//                     location:{
//                         city:null,
//                         state:null
//                     },
//                     responsibilities:[]
//                 }
//             }
//         if(props.experienceData && (props.experienceData.company !== state.experience_data.company ||props.experienceData.title !== state.experience_data.title ||
//             props.experienceData.date.start !== state.experience_data.date.start || props.experienceData.date.end !== state.experience_data.date.end ||
//             props.experienceData.location.city !== state.experience_data.location.city || props.experienceData.location.city !== state.experience_data.location.city ||
//             props.experienceData.responsibilities.some((responsibility,i)=> responsibility !== state.experience_data.responsibilities[i] )))
        
//                 return {experience_data:props.experienceData}
//         return null;
//     }
//     render(){
//         return  (
//         <div className='editor-container'>
//             <div className='editor-header'>
//                 <span className='editor-header-title'>Experience</span>
//             </div>
//             <div className='editor-content experience-editor-content'>
//                 <div className='company'>
//                     <label htmlFor='company'>Employer</label>
//                     <input type='text' id='company' onChange={(e)=> this.setState({experience_data:{...this.state.experience_data,company:e.target.value}})} value={this.state.experience_data.company?this.state.experience_data.company:''} placeholder='Company A'></input>
//                 </div>
//                 <div className='role'>
//                     <label htmlFor='role'>Role of job title</label>
//                     <input type='text' id='role' onChange={(e)=> this.setState({experience_data:{...this.state.experience_data,title:e.target.value}})} value={this.state.experience_data.title? this.state.experience_data.title: ''} placeholder='Sales Representative'></input>
//                 </div>
//                 <div className='start'>
//                     <label htmlFor='start'>Start Date</label>
//                     <input type='text' id='start' 
//                         onChange={(e)=> this.setState({experience_data:{...this.state.experience_data,date:{...this.state.experience_data.date,start:e.target.value}}})}
//                         value={this.state.experience_data.date.start?this.state.experience_data.date.start:''}
//                         placeholder='MM/YYYY'
//                         >
//                     </input>
//                 </div>
//                 <div className='end'>
//                     <label htmlFor='end'>End Date</label>
//                     <input type='text' id='end' 
//                         onChange={(e)=> this.setState({experience_data:{...this.state.experience_data,date:{...this.state.experience_data.date,end:e.target.value}}})}
//                         value={this.state.experience_data.date.end?this.state.experience_data.date.end:''}
//                         placeholder='MM/YYYY'
//                         >
//                     </input>
//                 </div>
//                <div className='city'>
//                     <label htmlFor='city'>City</label>
//                     <input type='text' id='city' onChange={(e)=> this.setState({experience_data:{...this.state.experience_data,location:{...this.state.experience_data.location,city:e.target.value}}})} value={this.state.experience_data.location.city?this.state.experience_data.location.city:''} placeholder='New York'></input>
//                 </div>
//                 <div className='state'>
//                     <label htmlFor='state'>State</label>
//                     <input type='text' id='state' onChange={(e)=> this.setState({experience_data:{...this.state.experience_data,location:{...this.state.experience_data.location,state:e.target.value}}})} value={this.state.experience_data.location.state?this.state.experience_data.location.state:''} placeholder='NY'></input>
//                 </div>
//                 <div className='responsibilities list'>
//                     <label htmlFor='responsibilities'>What were your responsibilities and accomplishments?</label>
//                     <ul id='responsibilities'>
//                         {this.state.experience_data.responsibilities.map((responsibility,i)=>
//                             <li key={i}>
//                                 <input type='text'
//                                     onChange={(e)=> 
//                                         this.setState({
//                                             experience_data:{
//                                                 ...this.state.experience_data,
//                                                 responsibilities:this.state.experience_data.responsibilities.map((responsibility,index)=> index===i?e.target.value:responsibility)     
//                                             }
//                                         })
//                                     } 
//                                     value={this.state.experience_data.responsibilities[i]}
//                                     placeholder='Add responsibility or accomplishment'
//                                     >
//                                 </input>
//                                 <GrClose className='delete' onClick={()=>this.setState({
//                                             experience_data:{
//                                                 ...this.state.experience_data,
//                                                 responsibilities:this.state.experience_data.responsibilities.filter((responsibility,index)=> index!==i)     
//                                             }
//                                         })}/>
//                             </li>)}
//                     </ul>
//                     <AiOutlinePlus className='add icon' onClick={()=>this.setState({
//                                             experience_data:{
//                                                 ...this.state.experience_data,
//                                                 responsibilities:this.state.experience_data.responsibilities.concat('')     
//                                             }
//                                         })}/>
//                  </div>

//             </div>
//             <div className='editor-footer'>
//                 <button className='btn' onClick={()=>this.props.handleEdit(false,null)}>Cancel</button>
//                 <button className='btn save' onClick={()=>{
//                     //console.log(`Experience Editor: Saving data: `, this.state.experience_data );
//                     this.props.handleEdit(true,this.state.experience_data);
//                     }}>Save</button>
//             </div>
//         </div>
//         )
//     }    
// }

export default function Experience({experienceData,editExperience,deleteExperience}) {
    // constructor(props){
    //     super(props);
    // }
    // render(){
    return  (
        <div className='section-container'>
            <div className='section-title section-heading'>Experience</div>
            <div className='section-details section-text'>
                {experienceData.map((experience,index)=>{
                    return (
                        <section className='sub-section' key={index}>
                            <div className='item-content'>
                                <span>{experience.company} | </span>
                                <span>{experience.location.city}, </span>
                                <span>{experience.location.state}</span>
                            </div>
                            <div className='item-content'>
                                <span>{experience.title} | </span>
                                <span>{experience.date.start} - {experience.date.end}</span>
                            </div>
                            <div className='item-description'>
                                <ul>
                                    {experience.responsibilities.map((responsibility,index)=><li key={index}>{responsibility}</li>)}
                                </ul>
                            </div>
                            <div className="section-top-icon icons">
                                <CiEdit className='icon none' onClick={()=>editExperience(index)}/>
                                <BiTrash className='icon none' onClick={()=>deleteExperience(index)}/>
                            </div>
                        </section>
                    );
                })}
            </div>
            <AiOutlinePlus className='section-top-icon icon none' onClick={()=>editExperience(null)}/>
        </div>
    )
    // }    
}

export function ExperienceEditor({experienceData,handleEdit}) {

    const [experience_data,setExperience_data] = useState(experienceData?
        experienceData:
        {
            company:null,
            title:null,
            date:{start:null,end:null},
            location:{
                city:null,
                state:null
            },
            responsibilities:[]
        });
    // render(){

    function canSaveData(){
        return experience_data.company && experience_data.company.length>0 &&
               experience_data.title && experience_data.title.length>0  &&
               experience_data.date.start && experience_data.date.start.length>0 &&
               experience_data.date.end && experience_data.date.end.length>0 &&
               experience_data.location.city && experience_data.location.city.length>0 &&
               experience_data.location.state && experience_data.location.state.length>0 &&
               experience_data.responsibilities.length>0 
    }

    return  (
      <div className='editor-container'>
        <div className='editor-header'>
            <span className='editor-header-title'>Experience</span>
        </div>
        <div className='editor-content experience-editor-content'>
            <div className='company'>
                <label htmlFor='company'>Employer</label>
                <input type='text' id='company' onChange={(e)=> setExperience_data(prev_data => {
                        return{...prev_data,company:e.target.value}
                })} 
                value={experience_data.company?experience_data.company:''} placeholder='Company A'></input>
            </div>
            <div className='role'>
                <label htmlFor='role'>Role of job title</label>
                <input type='text' id='role' onChange={(e)=> setExperience_data(prev_data => {
                        return{...prev_data,title:e.target.value}
                })} 
                value={experience_data.title? experience_data.title: ''} placeholder='Sales Representative'></input>
            </div>
            <div className='start'>
                <label htmlFor='start'>Start Date</label>
                <input type='text' id='start' 
                    onChange={(e)=> setExperience_data(prev_data => {
                        return{...prev_data,
                             date:{...prev_data.date,start:e.target.value}}})}
                    value={experience_data.date.start?experience_data.date.start:''}
                    placeholder='MM/YYYY'
                    >
                </input>
            </div>
            <div className='end'>
                <label htmlFor='end'>End Date</label>
                <input type='text' id='end' 
                    onChange={(e)=> setExperience_data(prev_data => {
                        return{
                             ...prev_data,
                             date:{...prev_data.date,end:e.target.value}}})}
                    value={experience_data.date.end?experience_data.date.end:''}
                    placeholder='MM/YYYY'
                    >
                </input>
            </div>
            <div className='city'>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' 
                    onChange={(e)=> setExperience_data(prev_data => {
                        return{...prev_data,
                        location:{...prev_data.location,city:e.target.value}}})}
                    value={experience_data.location.city?experience_data.location.city:''} placeholder='New York'></input>
            </div>
            <div className='state'>
                <label htmlFor='state'>State</label>
                <input type='text' id='state'  
                    onChange={(e)=> setExperience_data(prev_data => {
                        return{...prev_data,
                        location:{...prev_data.location,state:e.target.value}}})} 
                    value={experience_data.location.state?experience_data.location.state:''} placeholder='NY'></input>
            </div>
            <div className='responsibilities list'>
                <label htmlFor='responsibilities'>What were your responsibilities and accomplishments?</label>
                <ul id='responsibilities'>
                    {experience_data.responsibilities.map((responsibility,i)=>
                        <li key={i}>
                            <input type='text'
                                onChange={(e)=> 
                                    setExperience_data(prev_data => {
                                        return{
                                            ...prev_data,
                                            responsibilities:prev_data.responsibilities.map((responsibility,index)=> index===i?e.target.value:responsibility)     
                                        }
                                    })
                                } 
                                value={experience_data.responsibilities[i]}
                                placeholder='Add responsibility or accomplishment'
                                >
                            </input>
                            <GrClose className='delete' onClick={()=>setExperience_data(prev_data => {
                                        return{
                                            ...prev_data,
                                            responsibilities:prev_data.responsibilities.filter((responsibility,index)=> index!==i)     
                                        }
                                    })}/>
                        </li>)}
                </ul>
                <AiOutlinePlus className='add icon' onClick={()=>setExperience_data(prev_data => {
                                        return{
                                            ...prev_data,
                                            responsibilities:prev_data.responsibilities.concat('')     
                                        }
                                    })}/>
                </div>

        </div>
        <div className='editor-footer'>
            <button className='btn' onClick={()=>handleEdit(false,null)}>Cancel</button>
            <button className='btn save' disabled={!canSaveData()} onClick={()=>{
                //console.log(`Experience Editor: Saving data: `, this.state.experience_data );
                handleEdit(true,experience_data);
                }}>Save</button>
        </div>
    </div>
    )
}    