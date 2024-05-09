import React, {useState} from 'react'
import {Menu} from './Menu'

export const Login = () => {

  var [miLogin, setLogin] = useState("false");
  const [usu,setUsu]=useState("");
  const [pass, setPass]=useState("");
  function iniciarSesion(e){
  e.preventDefault();

  var txtusu = document.getElementById("txtusu").value;
  var txtpass = document.getElementById("txtpass").value;
  if (txtusu.length===0||txtpass.length===0){
   alert("Debes indicar Usuario y Clave");
  }else{
    if(usu==="Admin" && pass==="1234" ){
      setLogin="true";
      document.getElementById("form_login").style.display="none";
    }else{
      setLogin="false";
      alert("Error de Usuario y Constraseña");
      document.getElementById("txtusu").value="";
      document.getElementById("txtpass").value="";
      document.getElementById("txtusu").focus();
    }
  }

  }

  return (
    

    <div className="container" style={{background:"lightgray", marginTop:20, padding:20}}>
        
    <form id="form_login">
        <div>
            <h1 style={{color:"blue", textalign:"center"}}>LOGIN</h1>
            <label htmlFor="txtusu"><strong>Username</strong></label>
            <input type="text" id="txtusu" style={{textAlign:"center"}} className="form-control" onChange={(e)=>setUsu(e.target.value)} required/>
        </div>
        <div>
            <label htmlFor="txtpas"><strong>Password</strong></label>
            <input type="password" id="txtpass" style={{textAlign:"center"}} className="form-control" onChange={(e)=>setPass(e.target.value)} required/>
        </div><br/>
        <input type="submit"  className="btn btn-primary" value="Login" onClick={iniciarSesion}/>
    </form>

</div>


  )
}
