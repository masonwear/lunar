import React, { Component } from 'react';
import styled from 'styled-components'


const WhiteSquare = styled.section`
background: #FFFFFF;
box-shadow: 9.67784px 9.67784px 22.8749px rgba(40, 42, 74, 0.25);
border-radius: 18.4759px;
width: 466px;
height: 454px;
left: 329px;
top: 1738px;
position: absolute;
margin-bottom: 280px;


`

const GreenSquare = styled.section`
background: #15888D;
box-shadow: 9.67784px 9.67784px 22.8749px rgba(40, 42, 74, 0.25);
border-radius: 18.4759px;
width: 466px;
height: 454px;
left: 605px;
top: 1620px;
position: absolute;
display: flex;
flex-direction: column;
justify-content: center;


`

const List = styled.ul`
font-family: 'Circular Std';
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 181.1%;
display: flex;
flex-direction: column; 
justify-content: center;


color: #fff;




`

const Item = styled.li`


text-align: left;



`

const WeLove = styled.div`
display: flex;
flex-direction: column;
align-self: center;







`


class Squares extends Component {
    render() {
        return (
            <>
                <WhiteSquare />
                <GreenSquare>

                    <WeLove>
                        <h3>We love designing for:</h3>
                        <List>
                            <Item>Ecommerce Websites</Item>
                            <Item>Other Agencies</Item>
                            <Item>Simple Marketing Sites</Item>
                            <Item>Small Businesses</Item>
                            <Item>Products & Startups</Item>
                            <Item>Large Corporate Site Redesigns</Item>


                        </List>
                    </WeLove>

                </GreenSquare>




            </>
        );
    }
}

export default Squares;