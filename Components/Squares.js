import React, { Component } from 'react';
import styled from 'styled-components'


const WhiteSquare = styled.section`
background: #FFFFFF;
box-shadow: 9.67784px 9.67784px 22.8749px rgba(40, 42, 74, 0.25);
border-radius: 18.4759px;
width: 466px;
height: 454px;


`

const GreenSquare = styled.section`
background: #15888D;
box-shadow: 9.67784px 9.67784px 22.8749px rgba(40, 42, 74, 0.25);
border-radius: 18.4759px;
width: 466px;
height: 454px;


`

const List = styled.ul`
font-family: 'Circular Std';
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 181.1%;
display: flex;
flex-direction: column; 
justify-content: center;


`

const Item = styled.li`
list-style: square;


`



class Squares extends Component {
    render() {
        return (
            <>
            <WhiteSquare/>
            <GreenSquare>
                <h3>We love designing for:</h3>
                <List>
                <Item>Ecommerce Websites</Item>
                <li>Other Agencies</li>
                <li>Simple Marketing Sites</li>
                <li>Small Businesses</li>
                <li>Products & Startups</li>
                <li>Large Corporate Site Redesigns</li>


                </List>

            </GreenSquare>
            
            
            
            
            </>
        );
    }
}

export default Squares;