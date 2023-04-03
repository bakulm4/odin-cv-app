import React, { Component,useState } from 'react';
import { useImmer } from 'use-immer';
import '../styles/Skills.css';
import { CiEdit } from 'react-icons/ci';
import { GrClose } from "react-icons/gr";

// export default class Skills extends Component {
//     constructor(props){
//         super(props);
//     }
//     render(){
//         return  (
//             <div className='section-container'>
//                 <div className='section-title section-heading'>Skills</div>
//                 <ul className='skills-details section-text'>
//                     {this.props.skillsData.map((skill,i)=><li key={i}>{skill}</li>)}
//                 </ul>
//                 <CiEdit className='section-top-icon icon none' onClick={this.props.toggleEdit}/>
//             </div>   
//         )
//     }    
// }

// export class SkillsEditor extends Component {
//     constructor(props){
//         super(props);
//         this.state= {skills:this.props.skillsData,newSkill:''}
//     }

//     render(){
//         return  (
//         <div className='editor-container'>
//             <div className='editor-header'>
//                 <span className='editor-header-title'>Skills</span>
//             </div>
//             <div className='editor-content skills-editor-content'>
//                 <div className='new-skill'>
//                     <label htmlFor='skills'>What are your standout skills?</label>
//                     <input id='skills' 
//                         onChange={(e)=> this.setState({newSkill:e.target.value})} value={this.state.newSkill}
//                         onKeyDown={(e)=>{
//                             if(e.key==='Enter'){ 
//                                 this.setState({skills:[...this.state.skills,this.state.newSkill]});
//                                 this.setState({newSkill:''});
//                             }
//                         }}    
//                          placeholder='Enter new skill'></input>
//                 </div>
//                 <div className='skills'>
//                     {this.state.skills.map((skill,i)=>{
//                        return(<div className='skill' key={i}>
//                             <span>{skill}</span>
//                             <GrClose className='delete' onClick={()=>this.setState({
//                                             skills: this.state.skills.filter((skill,index)=>index!==i)
//                                         })}/>
//                         </div>) 
//                         })}
//                 </div>
//             </div>
//             <div className='editor-footer'>
//                 <button className='btn' onClick={()=>this.props.handleEdit(false,null)}>Cancel</button>
//                 <button className='btn save' onClick={()=>this.props.handleEdit(true,this.state.skills)}>Save</button>
//             </div>
//         </div>
//         )
//     }    
// }


export default function Skills({skillsData,toggleEdit}) {
   
    // render(){
    return  (
        <div className='section-container'>
            <div className='section-title section-heading'>Skills</div>
            <ul className='skills-details section-text'>
                {skillsData.map((skill,i)=><li key={i}>{skill}</li>)}
            </ul>
            <CiEdit className='section-top-icon icon none' onClick={toggleEdit}/>
        </div>   
    )
    // }    
}

export function SkillsEditor({skillsData,handleEdit}) {

    const [skills_data, setSkills_data] = useImmer(skillsData);
    const [newSkill, setNewSkill] = useState('');

    return  (
    <div className='editor-container'>
        <div className='editor-header'>
            <span className='editor-header-title'>Skills</span>
        </div>
        <div className='editor-content skills-editor-content'>
            <div className='new-skill'>
                <label htmlFor='skills'>What are your standout skills?</label>
                <input id='skills' 
                    onChange={(e)=> setNewSkill(e.target.value)}
                     value={newSkill}
                    onKeyDown={(e)=>{
                        if(e.key==='Enter'){ 
                            setSkills_data(draft=> draft.concat(newSkill));
                            setNewSkill('');
                        }
                    }}    
                        placeholder='Enter new skill'></input>
            </div>
            <div className='skills'>
                {skills_data.map((skill,i)=>{
                    return(<div className='skill' key={i}>
                        <span>{skill}</span>
                        <GrClose className='delete' 
                        onClick={()=> 
                            setSkills_data(draft=> {draft.filter((skill,index)=>index!==i)
                         })}/>
                    </div>) 
                    })}
            </div>
        </div>
        <div className='editor-footer'>
            <button className='btn' onClick={()=>handleEdit(false,null)}>Cancel</button>
            <button className='btn save' onClick={()=>handleEdit(true,skills_data)}>Save</button>
        </div>
    </div>
    )
    // }    
}
