import React, { Component } from 'react';
import './styles/App.css';
import Profile, {ProfileEditor} from './components/Profile';
import Summary, {SummaryEditor}from './components/Summary';
import Experience, { ExperienceEditor } from './components/Experience';
import Education,{EducationEditor} from './components/Education';
import Skills, {SkillsEditor}from './components/Skills';
import { GrClose } from "react-icons/gr";
import initial_data from './seed_data';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state={editing:false,component:{name:null,index:null},resume_data:initial_data}
    }
     
    toggleEdit = (componentName,index=null)=>{
            this.setState({
            editing:true,
            component:{name:componentName,index:index}
            });
    }

    render(){
        let editorElement = null;
        if(this.state.component.name){
            //console.log(`Render method, componentName: ${this.state.component.name}`);
            switch(this.state.component.name){
                case 'profile':
                    editorElement = <ProfileEditor profileData={this.state.resume_data.profile} handleEdit={(isSave,stateData)=>{
                        isSave && this.setState({resume_data:{...this.state.resume_data,profile:stateData}});
                        this.setState({editing:false});
                    }} />;
                    break;
                case 'summary':
                    editorElement = <SummaryEditor summaryData={this.state.resume_data.summary} handleEdit={(isSave,stateData)=>{
                        isSave && this.setState({resume_data:{...this.state.resume_data,summary:stateData}});
                        this.setState({editing:false});
                    }} />;
                    break;
                case 'experience':
                        const index = this.state.component.index;
                        editorElement = <ExperienceEditor experienceData={index!==null ? this.state.resume_data.experience[index]: null} handleEdit={(isSave,stateData)=>{
                            isSave && this.setState({resume_data:{
                                ...this.state.resume_data,
                                experience:index=== null ? this.state.resume_data.experience.concat(stateData): this.state.resume_data.experience.map((experience,i)=>i===index?stateData:experience)
                                }
                                });
                                //console.log(`App.js handleEdit experience data: `, this.state.resume_data.experience);
                        this.setState({editing:false});
                        }} />;
                        break;
                case 'skills':
                    editorElement = <SkillsEditor skillsData={this.state.resume_data.skills} handleEdit={(isSave,stateData)=>{
                        isSave && this.setState({resume_data:{
                            ...this.state.resume_data,
                            skills:stateData
                            }
                            });
                    this.setState({editing:false});
                    }} />;
                    break;
                case 'education':
                    const _index = this.state.component.index;
                    editorElement = <EducationEditor educationData={_index!==null ? this.state.resume_data.education[_index]: null} handleEdit={(isSave,stateData)=>{
                        isSave && this.setState({resume_data:{
                            ...this.state.resume_data,
                            education:_index=== null ? this.state.resume_data.education.concat(stateData):this.state.resume_data.education.map((education,i)=>i===_index?stateData:education)
                            }
                            });
                    this.setState({editing:false});
                    }} />;
                    break;
            }
        }

        return  (
        <main>
            <header>Resume Builder</header>
            <div className='main-container'>
                <div className='title'>My Resume</div>
                <div className="resume-container">
                    <div className='resume-view-container'>
                        <Profile profileData={this.state.resume_data.profile} toggleEdit={()=>this.toggleEdit('profile')}/>
                        <Summary summaryData={this.state.resume_data.summary} toggleEdit={()=>this.toggleEdit('summary')}/>
                        <Experience experienceData = {this.state.resume_data.experience}
                            editExperience={index=>this.toggleEdit('experience',index)}
                            deleteExperience={index=>this.setState({resume_data:{
                                ...this.state.resume_data,
                                experience:this.state.resume_data.experience.filter((experience,i)=>i!==index)
                                }})}
                             />
                        <Skills skillsData={this.state.resume_data.skills} toggleEdit={()=>this.toggleEdit('skills')}/>
                        <Education educationData={this.state.resume_data.education}
                            editEducation={index=>this.toggleEdit('education',index)}
                            deleteEducation={index=>this.setState({resume_data:{
                                ...this.state.resume_data,
                                education:this.state.resume_data.education.filter((education,i)=>i!==index)
                                }})}
                          />
                    </div>
                    {this.state.editing && (
                        <div className='resume-edit-container'>
                        {editorElement}
                        <GrClose className='close' onClick={()=>this.setState({editing:false})}/>
                        </div>
                            
                        )}
                </div>
            </div>
        </main>)
    }
       
}