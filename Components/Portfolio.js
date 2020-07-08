import React, { Component } from 'react';
import styled from 'styled-components'


const Heading = styled.div`

width: 437px;
height: 96px;
padding-top: 880px;
padding-left: 241px;



`

const LeftColumn = styled.div`

padding-left: 185px;
padding-top: 74.93px;

`
const RightColumn = styled.div`

padding-left: 43.11px;
padding-top: 74.93px;

`
const Wrapper = styled.div`

display: flex;

`




class Portfolio extends Component {
    render() {
        return (
            <>


                <Heading><h2>Some of the landing pages we've designed</h2></Heading>


                <Wrapper>
                    <LeftColumn>
                        <img src="static/Homepage - Transparent Nav@2x 1.png" alt="Senseye"></img>
                    </LeftColumn>


                    <RightColumn>
                        <img src="static/yourstore.png" alt="YourStore"></img>

                    </RightColumn>
                </Wrapper>
            </>
        );
    }
}

export default Portfolio;