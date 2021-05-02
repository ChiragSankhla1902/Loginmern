import React,{useState} from 'react';
import "./form.css";
import {useDispatch} from "react-redux";
import { useHistory } from 'react-router-dom';
import {signin,signup} from "../../action/useraction";


const Form = () => {
    const [formdata,setformdata]=useState({email:"",password:"",mobile:"",address:'',username:'',name:''});
    const [data,setdata]=useState({email:"",password:""});
    const history=useHistory();
    const [Signed,setSigned]=useState(false);
    const dispatch=useDispatch();
    const switchmode=()=>{
        setSigned((pre)=>!pre);
    }
    const clear=()=>{
        setformdata({email:"",password:"",mobile:"",address:'',username:'',name:''});
    }
    const clear1=()=>{
        setdata({email:"",password:""});
    }
    const Send=(e)=>{
        e.preventDefault();
        if(Signed){
            dispatch(signup(formdata,history))
            clear();
        }else{
            dispatch(signin(data,history))
            clear1();

        }
    };


    return (
        Signed?(
        <>
        <div className="jumbopro2">
            <h6 style={{fontSize:20,color:'white',textAlign:'center'}}>Sign Up</h6>
            <form className="center" onSubmit={Send}>
                <div>
                    <label>email</label>
                    <input type="text" placeholder="xyz@email.com" value={formdata.email} onChange={(e)=>setformdata({...formdata,email:e.target.value})} /> 
                </div>
                <div>
                    <label>Name</label>
                    <input type="text" placeholder="name" value={formdata.name} onChange={(e)=>setformdata({...formdata,name:e.target.value})} /> 
                </div>
                <div>
                    <label>Username</label>
                    <input type="text" placeholder="username" value={formdata.username} onChange={(e)=>setformdata({...formdata,username:e.target.value})}/>
                </div> 
                <div>
                    <label>Address</label>
                    <input type="text" placeholder="Address" value={formdata.address} onChange={(e)=>setformdata({...formdata,address:e.target.value})}/> 
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" placeholder="password" value={formdata.password} onChange={(e)=>setformdata({...formdata,password:e.target.value})}/>
                </div>
                <div>
                    <label>Mobile num</label> 
                    <input type="number" placeholder="mobilenumber" value={formdata.mobile} onChange={(e)=>setformdata({...formdata,mobile:e.target.value})}/> 
                </div>
                <div>
                    <button className="left"  className="button1" onClick={Send}>signup</button>
                    <button className="right"  className="button1" onClick={switchmode}>have an account</button>
                </div>
            </form>
        </div>
        </>
        ):(
            <>
            <div className="jumbopro2">
                <h6 style={{fontSize:20,color:'white',textAlign:'center'}}>Sign In</h6>
                <form className="center" onSubmit={Send}>
                    <div>
                        <label>email</label>
                        <input type="text" placeholder="xyz@email.com"  value={data.email} onChange={(e)=>setdata({...data,email:e.target.value})} /> 
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" placeholder="password" value={data.password} onChange={(e)=>setdata({...data,password:e.target.value})}/>
                    </div>
                    <div>
                        <button className="left"  className="button1" onClick={Send}>signIn</button>
                        <button className="right"  className="button1" onClick={switchmode}> don't have an account</button>
                    </div>
                </form>
            </div>
            </>
        )
    )
}

export default Form
