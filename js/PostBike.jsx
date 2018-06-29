import React from 'react';
// import axios from 'axios';



class PostBike extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            description:'',
            price:''
        }
    }

    inputHandler = (event)=> {
        this.setState({
            name: event.target.value
        });
    }
    inputHandler2 = (event)=> {
        this.setState({
            description: event.target.value
        });
    }
    inputHandler3 = (event)=> {
        this.setState({
            price: event.target.value
        });
    }

    submitClick = (e) => {
        e.preventDefault();
        const url = 'http://localhost:3000/items';
        let name = this.state.name; 
        let desc = this.state.description;
        let price = this.state.price;
            
        fetch(url, {
            method: 'POST', 
            headers: {'Accept': 'application/json, text/plain, */*', 'Content-type':'application/json'},
            body: JSON.stringify({name:name, description:desc, price:price})
            
            }).then(response => response.json())
            
            .then(data => {
                console.log("data : "+data);
            })
            .catch(function (error) {
                console.log('Request failed', error);
              });
}
    
    render(){
       
        return(
        <div className="postbike">
        <h3>Add your own best bike</h3>
            <form onSubmit={this.submitClick}>
            <label> Type bike name:
                <input onChange={this.inputHandler} type="text" className="get_name"/>
            </label>
            <label> Type description:
                <input onChange={this.inputHandler2} type="text" className="get_description"/>
            </label>
            <label> Type price:
                <input onChange={this.inputHandler3} type="text" className="get_price"/>
            </label>
            <button type="submit">Submit</button>
        </form>
        </div>
        )
    }
}

export default PostBike;