import React,{useState,useEffect} from 'react'
import {useDispatch} from "react-redux";
import {Link,useHistory,useLocation} from "react-router-dom";
import decode from "jwt-decode";
import "./detail.css";

const Details = () => {
    const dispatch=useDispatch();
    const history=useHistory();
    const location=useLocation();
    const [user,setuser]=useState(JSON.parse(localStorage.getItem('profile')))
    console.log(user)

    const logout=()=>{
        dispatch({type:'LOGOUT'});
        history.push("/auth")
        setuser(null);
    }

    useEffect(() => {
        const token = user?.token;
    
        if (token) {
          const decodedToken = decode(token);
    
          if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
    
        setuser(JSON.parse(localStorage.getItem('profile')));
      }, [location]);
    

    return (
        user?(
            <>  
                <div className="jumbopro2">
                    <h6 style={{fontSize:20,color:'white',textAlign:'center'}}>Sign In</h6>
                    <form className="center">
                        <div>
                            <h4> Name  :   {user?.result.name} </h4>
                        </div>
                        <div>
                            <h4> Email  :   {user?.result.email} </h4>
                        </div>
                        <div>
                            <h4> Username  :  {user?.result.username} </h4>
                        </div>
                        <div>
                            <h4> Address   :  {user?.result.address} </h4>
                        </div>
                        <div>
                            <h4> Mobile   :  {user?.result.mobile} </h4>
                        </div>
                        <div>
                        <button className="button" onClick={logout}>Logout</button>
                        </div>
                    </form>
                </div>

            </>
        ):(
            <>
                <div className="jumbopro2">
                    <h1 >Please Signin</h1>
                    <form className="center">
                        <div>
                            <Link to="/auth">
                                <button className="button"> signin </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </>
        )
    )
}

export default Details;
