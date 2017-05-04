import React from 'react'
import Login from './login.js'
import Logout from './logout.js'

class Header extends React.Component{
    render(){
        let compation =true;
        return (
            <div className="header-wp">
               {(compation)?(<h3 className="fl-left">Would you like to LogIn?</h3>):(<h3 className="fl-left">Nguyen thanh cong</h3>)}
                {(compation)?(<Login/>):(<Logout/>)}
            </div>
        ) 
    }
}

export default  Header