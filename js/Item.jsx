import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {string} from 'prop-types';

const Wrapper = styled(Link)`
    width:32%;
    box-shadow: -1px 0px 20px 0px rgba(0,0,0,0.6);
    background: #ffffff;
    border-radius: 0.25rem;
    margin-bottom: 25px;
    padding: 1rem;
    overflow:hidden;
    text-decoration: none;
`
const Image = styled.img`
    width:46%;
    float:left;
    margin-right:10px;
`

const Item = props => (
    
    <Wrapper to={`/details/${props.id}`}>
        <Image src={`/public/img/${props.img}`} alt={`${props.name} Cover`}/>
        <div>
            <h2>{props.name}</h2>
            <h3>{props.price}</h3>
            <p>{props.description}</p>
        </div>
    </Wrapper>
    
);

Item.propTypes = {
    img: string.isRequired,
    name: string.isRequired,
    price: string.isRequired,
    description: string.isRequired,
    id: string.isRequired
};

export default Item;