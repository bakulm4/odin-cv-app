import React, { Component,useState } from 'react';
import '../styles/Profile.css';
import { CiEdit } from 'react-icons/ci';


// export default class Profile extends Component {
//     constructor(props){
//         super(props);
//     }

//     render(){
//         return  (
//         <div className='section-container'>
//             <div className='section-title profile-name'>{this.props.profileData.name.first}{' '}{this.props.profileData.name.last}</div>
//             <div className='section-text'>
//                 <span>{this.props.profileData.phone} | {this.props.profileData.email} | {this.props.profileData.location.city}, {this.props.profileData.location.state}, {this.props.profileData.location.zip}</span>
//             </div>
//             <CiEdit className='section-top-icon icon none' onClick={this.props.toggleEdit}/>
//         </div>
//         )
//     }    
// }

// export class ProfileEditor extends Component {
//     constructor(props){
//         super(props);
//         this.state= {profile_data:this.props.profileData}
//     }

//     render(){
//         return  (
//         <div className='editor-container'>
//             <div className='editor-header'>
//                 <span className='editor-header-title'>Contact Info</span>
//             </div>
//             <div className='editor-content profile-editor-content'>
//                 <div className='first-name'>
//                     <label htmlFor='firstName'>First Name</label>
//                     <input type='text' id='firstName' onChange={(e)=> this.setState({profile_data:{...this.state.profile_data,name:{...this.state.profile_data.name,first:e.target.value}}})} value={this.state.profile_data.name.first}></input>
//                 </div>
//                 <div className='last-name'>
//                     <label htmlFor='lastName'>Last Name</label>
//                     <input type='text' id='lastName' onChange={(e)=> this.setState({profile_data:{...this.state.profile_data,name:{...this.state.profile_data.name,last:e.target.value}}})} value={this.state.profile_data.name.last}></input>
//                 </div>
//                 <div className='phone'>
//                     <label htmlFor='phone'>Phone Number</label>
//                     <input type='text' id='phone' onChange={(e)=> this.setState({profile_data:{...this.state.profile_data,phone:e.target.value}})} value={this.state.profile_data.phone}></input>
//                 </div>
//                 <div className='email'>
//                     <label htmlFor='email'>Email</label>
//                     <input type='text' id='email' onChange={(e)=> this.setState({profile_data:{...this.state.profile_data,email:e.target.value}})} value={this.state.profile_data.email}></input>
//                 </div>
//                 <div className='city'>
//                     <label htmlFor='city'>City</label>
//                     <input type='text' id='city' onChange={(e)=> this.setState({profile_data:{...this.state.profile_data,location:{...this.state.profile_data.location,city:e.target.value}}})} value={this.state.profile_data.location.city}></input>
//                 </div>
//                 <div className='state'>
//                     <label htmlFor='state'>State</label>
//                     <input type='text' id='state' onChange={(e)=> this.setState({profile_data:{...this.state.profile_data,location:{...this.state.profile_data.location,state:e.target.value}}})} value={this.state.profile_data.location.state}></input>
//                 </div>
//                 <div className='zip'>
//                     <label htmlFor='zip'>Zipcode</label>
//                     <input type='text' id='zip' onChange={(e)=> this.setState({profile_data:{...this.state.profile_data,location:{...this.state.profile_data.location,zip:e.target.value}}})} value={this.state.profile_data.location.zip}></input>
//                 </div>
//             </div>
//             <div className='editor-footer'>
//                 <button className='btn' onClick={()=>this.props.handleEdit(false,null)}>Cancel</button>
//                 <button className='btn save' onClick={()=>this.props.handleEdit(true,this.state.profile_data)}>Save</button>
//             </div>
//         </div>
//         )
//     }    
// }

export default function Profile({profileData,toggleEdit}) {
    // constructor(props){
    //     super(props);
    // }

    // render(){
        return  (
        <div className='section-container'>
            <div className='section-title profile-name'>{profileData.name.first}{' '}{profileData.name.last}</div>
            <div className='section-text'>
                <span>{profileData.phone} | {profileData.email} | {profileData.location.city}, {profileData.location.state}, {profileData.location.zip}</span>
            </div>
            <CiEdit className='section-top-icon icon none' onClick={toggleEdit}/>
        </div>
        )
    // }    
}

export function ProfileEditor({profileData,handleEdit}) {
    // constructor(props){
    //     super(props);
    //     this.state= {profile_data:this.props.profileData}
    // }

    const [profile_data,setProfile_data] = useState(profileData);

    // render(){
        return  (
        <div className='editor-container'>
            <div className='editor-header'>
                <span className='editor-header-title'>Contact Info</span>
            </div>
            <div className='editor-content profile-editor-content'>
                <div className='first-name'>
                    <label htmlFor='firstName'>First Name</label>
                    <input type='text' id='firstName'
                     onChange={(e)=> setProfile_data(prev_data =>{
                        return{
                            ...prev_data,
                            name:{...prev_data.name,first:e.target.value}
                        }})}
                     value={profile_data.name.first}></input>
                </div>
                <div className='last-name'>
                    <label htmlFor='lastName'>Last Name</label>
                    <input type='text' id='lastName'
                      onChange={(e)=> setProfile_data(prev_data =>{
                        return{
                            ...prev_data,
                            name:{...prev_data.name,last:e.target.value}
                        }})} 
                      value={profile_data.name.last}></input>
                </div>
                <div className='phone'>
                    <label htmlFor='phone'>Phone Number</label>
                    <input type='text' id='phone' 
                        onChange={(e)=> setProfile_data(prev_data =>{
                            return{
                                ...prev_data,
                                phone:e.target.value
                            }})}  
                        value={profile_data.phone}></input>
                </div>
                <div className='email'>
                    <label htmlFor='email'>Email</label>
                    <input type='text' id='email' 
                        onChange={(e)=> setProfile_data(prev_data =>{
                            return{
                                ...prev_data,
                                email:e.target.value
                            }})}  
                        value={profile_data.email}></input>
                </div>
                <div className='city'>
                    <label htmlFor='city'>City</label>
                    <input type='text' id='city' 
                        onChange={(e)=> setProfile_data(prev_data =>{
                            return{
                                ...prev_data,
                                location:{...prev_data.location,city:e.target.value}
                            }})} 
                        value={profile_data.location.city}></input>
                </div>
                <div className='state'>
                    <label htmlFor='state'>State</label>
                    <input type='text' id='state'
                        onChange={(e)=> setProfile_data(prev_data =>{
                            return{
                                ...prev_data,
                                location:{...prev_data.location,state:e.target.value}
                            }})}  
                        value={profile_data.location.state}></input>
                </div>
                <div className='zip'>
                    <label htmlFor='zip'>Zipcode</label>
                    <input type='text' id='zip' 
                        onChange={(e)=> setProfile_data(prev_data =>{
                            return{
                                ...prev_data,
                                location:{...prev_data.location,zip:e.target.value}
                            }})}  
                        value={profile_data.location.zip}></input>
                </div>
            </div>
            <div className='editor-footer'>
                <button className='btn' onClick={()=>handleEdit(false,null)}>Cancel</button>
                <button className='btn save' onClick={()=>handleEdit(true,profile_data)}>Save</button>
            </div>
        </div>
        )
    // }    
}