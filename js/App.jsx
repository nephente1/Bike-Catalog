import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import List from './List';

import Homepage from'./Homepage';
import Details from './Details';
import data from '../db.json';

const FourOFour = () => (
    <div><h1>error 404</h1></div>
)

const App = () => (
    <BrowserRouter>
    <div className="app">
   
    <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/list" component={(props) => <List shows={data.items} {...props} />}/>
        <Route path="/details/:id" component={(props)=> <Details show={data.items.find(item => item.itemId === props.match.params.id)} />}/>
        <Route component={FourOFour}/>
        </Switch>
    </div>
    </BrowserRouter>
    );

    // App.propTypes = {
    //     match: PropTypes.shape({
    //       params: PropTypes.shape({
    //         field1: PropTypes.number.isRequired,
    //         field2: PropTypes.string
    //       })
    //     }),
       
    //   }


render(<App />, document.getElementById('app'));