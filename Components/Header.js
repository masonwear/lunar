import react from 'react'
import styled from 'styled-components'

import React, { Component } from 'react';

const Button = styled.button`

background: #FFFFFF;
border-radius: 45px;
width: 154px;
height: 40px;
font-family: 'Circular Std';
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 19px;

/* identical to box height */
text-align: center;

color: #000000;
border: 0;




`;


const Lunar = styled.section`

font-family: 'Circular Std';
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 30px;

color: #EBF0FF;
top: calc(50% - 29px/2 - 4223.5px);


`;

const Wrapper = styled.section`

                display: flex;
                  justify-content: space-between;
                  margin-top: 48px;
                  margin-bottom: 65px;
                  margin-left: 91px;
                  margin-right: 62px;

`;




class Header extends Component {
    render() {
        return (


            <Wrapper>
                <Lunar>
                    Lunar
</Lunar>









                <Button

                    href="https://github.com/styled-components/styled-components"
                    target="_blank"
                    rel="noopener"
                    primary

                >
                    Get in Touch!
      </Button>
            </Wrapper>


        );
    }
}

export default Header;






