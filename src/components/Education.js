import React, { Component } from 'react';
import '../styles/Education.css';
import { CiEdit } from 'react-icons/ci';
import { AiOutlinePlus } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import { GrClose } from "react-icons/gr";

export default class Education extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return  (
            <div className='section-container'>
            <div className='section-title section-heading'>Education</div>
            <div className='section-details section-text'>
                {this.props.educationData.map((education,index)=>{
                    return (
                        <section className='sub-section' key={index}>
                            <div className='item-content'>
                                <span>{education.school} | </span>
                                <span>{education.location.city}, </span>
                                <span>{education.location.state}</span>
                            </div>
                            <div className='item-content'>
                                <span>{education.degree} | </span>
                                <span>{education.graduationDate}</span>
                            </div>
                            <div className='item-description'>
                                <ul>
                                    {education.achievements.map((achievement,index)=><li key={index}>{achievement}</li>)}
                                </ul>
                            </div>
                            <div className="section-top-icon icons">
                                <CiEdit className='icon none' onClick={()=>this.props.editEducation(index)}/>
                                <BiTrash className='icon none' onClick={()=>this.props.deleteEducation(index)}/>
                            </div>
                        </section>
                    );
                })}
            </div>
            <AiOutlinePlus className='section-top-icon icon none' onClick={()=>this.props.editEducation(null)}/>
        </div>
        )
    }    
}

export class EducationEditor extends Component {
    constructor(props){
        super(props);
        this.state= {education_data:this.props.educationData?this.props.educationData:
            {
                school:null,
                degree:null,
                graduationDate:null,
                location:{
                    city:null,
                    state:null
                },
                achievements:[]
            }}
    }

    static getDerivedStateFromProps(props,state){
        if(!props.educationData)
            return {
                education_data: {
                    school:null,
                degree:null,
                graduationDate:null,
                location:{
                    city:null,
                    state:null
                },
                achievements:[]
                }
            }
        if(props.educationData && (props.educationData.school !== state.education_data.school ||props.educationData.degree !== state.education_data.degree ||
            props.educationData.graduationDate !== state.education_data.graduationDate || 
            props.educationData.location.city !== state.education_data.location.city || props.educationData.location.city !== state.education_data.location.city ||
            props.educationData.achievements.some((achievement,i)=> achievement !== state.education_data.achievements[i] )))
        
                return {education_data:props.educationData}
        return null;
    }

    render(){
        return  (
        <div className='editor-container'>
            <div className='editor-header'>
                <span className='editor-header-title'>Education</span>
            </div>
            <div className='editor-content education-editor-content'>
                <div className='school'>
                    <label htmlFor='school'>School</label>
                    <input type='text' id='school' onChange={(e)=> this.setState({education_data:{...this.state.education_data,school:e.target.value}})} value={this.state.education_data.school?this.state.education_data.school:''} placeholder='School A'></input>
                </div>
                <div className='degree'>
                    <label htmlFor='degree'>Degree or Field of Study</label>
                    <input type='text' id='degree' onChange={(e)=> this.setState({education_data:{...this.state.education_data,degree:e.target.value}})} value={this.state.education_data.degree? this.state.education_data.degree: ''} placeholder='Bachelor of Business Administration'></input>
                </div>
                <div className='grad-date'>
                    <label htmlFor='grad-date'>Graduation Date</label>
                    <input type='text' id='grad-date' 
                        onChange={(e)=> this.setState({education_data:{...this.state.education_data,graduationDate:e.target.value}})}
                        value={this.state.education_data.graduationDate?this.state.education_data.graduationDate:''}
                        placeholder='MM/YYYY' pattern='[0-1]\d/\d{4}'
                        >
                    </input>
                </div>
               <div className='city'>
                    <label htmlFor='city'>City</label>
                    <input type='text' id='city' onChange={(e)=> this.setState({education_data:{...this.state.education_data,location:{...this.state.education_data.location,city:e.target.value}}})} value={this.state.education_data.location.city?this.state.education_data.location.city:''} placeholder='New York'></input>
                </div>
                <div className='state'>
                    <label htmlFor='state'>State</label>
                    <input type='text' id='state' onChange={(e)=> this.setState({education_data:{...this.state.education_data,location:{...this.state.education_data.location,state:e.target.value}}})} value={this.state.education_data.location.state?this.state.education_data.location.state:''} placeholder='NY'></input>
                </div>
                <div className='achievements list'>
                    <label htmlFor='achievements'>What were your academic achievements?</label>
                    <ul id='achievements'>
                        {this.state.education_data.achievements.map((achievement,i)=>
                            <li key={i}>
                                <input type='text'
                                    onChange={(e)=> 
                                        this.setState({
                                            education_data:{
                                                ...this.state.education_data,
                                                achievements:this.state.education_data.achievements.map((achievement,index)=> index===i?e.target.value:achievement)     
                                            }
                                        })
                                    } 
                                    value={this.state.education_data.achievements[i]}
                                    placeholder='Add academic achievement'
                                    >
                                </input>
                                <GrClose className='delete' onClick={()=>this.setState({
                                            education_data:{
                                                ...this.state.education_data,
                                                achievements:this.state.education_data.achievements.filter((achievement,index)=> index!==i)     
                                            }
                                        })}/>
                            </li>)}
                    </ul>
                    <AiOutlinePlus className='add' onClick={()=>this.setState({
                                            education_data:{
                                                ...this.state.education_data,
                                                achievements:this.state.education_data.achievements.concat('')     
                                            }
                                        })}/>
                 </div>

            </div>
            <div className='editor-footer'>
                <button className='btn' onClick={()=>this.props.handleEdit(false,null)}>Cancel</button>
                <button className='btn save' onClick={()=>this.props.handleEdit(true,this.state.education_data)}>Save</button>
            </div>
        </div>
        )
    }    
}

