import React from 'react';
import {Link} from 'react-router-dom';


class Header extends React.Component{

    render(){

    let smth;
    if(this.props.showSearch){
        smth = <input onChange={this.props.inputHandler} type="text" placeholder="Search" value={this.props.searchTerm} />
    } else{
        smth = <h2><Link to="/list">Back to all bikes</Link></h2>
    }

        return(
             <header>
                 <h1><Link to="/">Best Bikes Catalog</Link></h1>
             {smth}
            </header>
        
        )
    }
 
}

Header.defaultProps = {
    showSearch:false
}
export default Header;