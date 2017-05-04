import React from 'react'

class Logout extends React.Component{
    render(){
        return(
            <div className="logout">
                    <form>
                        <input type="submit" value="Logout"/>
                    </form>
            </div>
        )
    }
}

export default Logout