import React from 'react';
import Item from './Item';
import Header from './header';
import PostBike from './PostBike';

class List extends React.Component{

    state = {  
        searchTerm: ""
    }

    inputHandler = (event)=> {
       
        this.setState({
            searchTerm: event.target.value
        });
    }

    render(){
    return(
        <div className="search">
        
        <Header showSearch inputHandler={this.inputHandler} />
        <PostBike />
        {/* <input onChange={this.inputHandler} type="text" placeholder="Search" value={this.searchTerm}/> */}
        <div>
        {this.props.shows.filter(item => `${item.name} ${item.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase())>= 0).map(el => <Item {...el} key={el.id} />)}
        </div>
    
    </div>
    )
  }
}


    
export default List;