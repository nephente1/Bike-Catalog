import React from 'react';
import Header from './Header';


class Details extends React.Component{
    render(){
        return(
    <div className="details">
        <Header />
    <section>
        <h1>{this.props.show.name}</h1>
        <h2>({this.props.show.price})</h2>
       
        <img src={`/public/img/${this.props.show.img}`} alt={`Poster for ${this.props.show.title}`}/>
        <p>{this.props.show.description}</p>
    </section>
    </div>
        )
    }
}
    

export default Details;