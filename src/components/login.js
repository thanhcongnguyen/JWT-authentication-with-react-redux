import React from 'react'

class Login extends React.Component{
    render(){
        return(
            <div className="login">
                <form>
                    <input type="text" />
                    <input type="password" />
                    <input type="submit"  value="Login"/>
                 </form>   
            </div>
        )
    }
}

export default Login