import React, { Component } from 'react';
import '../styles/Experience.css';
import { CiEdit } from 'react-icons/ci';
import { AiOutlinePlus } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import { GrClose } from "react-icons/gr";


export default class Experience extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return  (
            <div className='section-container'>
                <div className='section-title section-heading'>Experience</div>
                <div className='section-details section-text'>
                    {this.props.experienceData.map((experience,index)=>{
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
                                    <CiEdit className='icon none' onClick={()=>this.props.editExperience(index)}/>
                                    <BiTrash className='icon none' onClick={()=>this.props.deleteExperience(index)}/>
                                </div>
                            </section>
                        );
                    })}
                </div>
                <AiOutlinePlus className='section-top-icon icon none' onClick={()=>this.props.editExperience(null)}/>
            </div>
        )
    }    
}

export class ExperienceEditor extends Component {
    constructor(props){
        super(props);
        this.state= {experience_data:this.props.experienceData?this.props.experienceData:
            {
                company:null,
                title:null,
                date:{start:null,end:null},
                location:{
                    city:null,
                    state:null
                },
                responsibilities:[]
            }}
    }

    render(){
        return  (
        <div className='editor-container'>
            <div className='editor-header'>
                <span className='editor-header-title'>Experience</span>
            </div>
            <div className='editor-content experience-editor-content'>
                <div className='company'>
                    <label htmlFor='company'>Employer</label>
                    <input type='text' id='company' onChange={(e)=> this.setState({experience_data:{...this.state.experience_data,company:e.target.value}})} value={this.state.experience_data.company?this.state.experience_data.company:''} placeholder='Company A'></input>
                </div>
                <div className='role'>
                    <label htmlFor='role'>Role of job title</label>
                    <input type='text' id='role' onChange={(e)=> this.setState({experience_data:{...this.state.experience_data,title:e.target.value}})} value={this.state.experience_data.title? this.state.experience_data.title: ''} placeholder='Sales Representative'></input>
                </div>
                <div className='start'>
                    <label htmlFor='start'>Start Date</label>
                    <input type='text' id='start' 
                        onChange={(e)=> this.setState({experience_data:{...this.state.experience_data,date:{...this.state.experience_data.date,start:e.target.value}}})}
                        value={this.state.experience_data.date.start?this.state.experience_data.date.start:''}
                        placeholder='MM/YYYY'
                        >
                    </input>
                </div>
                <div className='end'>
                    <label htmlFor='end'>End Date</label>
                    <input type='text' id='end' 
                        onChange={(e)=> this.setState({experience_data:{...this.state.experience_data,date:{...this.state.experience_data.date,end:e.target.value}}})}
                        value={this.state.experience_data.date.end?this.state.experience_data.date.end:''}
                        placeholder='MM/YYYY'
                        >
                    </input>
                </div>
               <div className='city'>
                    <label htmlFor='city'>City</label>
                    <input type='text' id='city' onChange={(e)=> this.setState({experience_data:{...this.state.experience_data,location:{...this.state.experience_data.location,city:e.target.value}}})} value={this.state.experience_data.location.city?this.state.experience_data.location.city:''} placeholder='New York'></input>
                </div>
                <div className='state'>
                    <label htmlFor='state'>State</label>
                    <input type='text' id='state' onChange={(e)=> this.setState({experience_data:{...this.state.experience_data,location:{...this.state.experience_data.location,state:e.target.value}}})} value={this.state.experience_data.location.state?this.state.experience_data.location.state:''} placeholder='NY'></input>
                </div>
                <div className='responsibilities list'>
                    <label htmlFor='responsibilities'>What were your responsibilities and accomplishments?</label>
                    <ul id='responsibilities'>
                        {this.state.experience_data.responsibilities.map((responsibility,i)=>
                            <li key={i}>
                                <input type='text'
                                    onChange={(e)=> 
                                        this.setState({
                                            experience_data:{
                                                ...this.state.experience_data,
                                                responsibilities:this.state.experience_data.responsibilities.map((responsibility,index)=> index===i?e.target.value:responsibility)     
                                            }
                                        })
                                    } 
                                    value={this.state.experience_data.responsibilities[i]}
                                    placeholder='Add responsibility or accomplishment'
                                    >
                                </input>
                                <GrClose className='delete' onClick={()=>this.setState({
                                            experience_data:{
                                                ...this.state.experience_data,
                                                responsibilities:this.state.experience_data.responsibilities.filter((responsibility,index)=> index!==i)     
                                            }
                                        })}/>
                            </li>)}
                    </ul>
                    <AiOutlinePlus className='add icon' onClick={()=>this.setState({
                                            experience_data:{
                                                ...this.state.experience_data,
                                                responsibilities:this.state.experience_data.responsibilities.concat('')     
                                            }
                                        })}/>
                 </div>

            </div>
            <div className='editor-footer'>
                <button className='btn' onClick={()=>this.props.handleEdit(false,null)}>Cancel</button>
                <button className='btn save' onClick={()=>{
                    //console.log(`Experience Editor: Saving data: `, this.state.experience_data );
                    this.props.handleEdit(true,this.state.experience_data);
                    }}>Save</button>
            </div>
        </div>
        )
    }    
}
