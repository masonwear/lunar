
import React, { Component } from 'react';
import styled from 'styled-components'
import Wrapper from '../Components/Wrapper'

const Section = styled.div`


text-align: center;
display: flex;
justify-content: center;
flex-direction: row;
align-items: center;
margin-top: 129px;




`;
const AstroBoi = styled.div`

width: 176.45px;
height: 487.49px;



transform: rotate(-2.81deg);


`

const Navigation = styled.div`

font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 19px;
color: #EBF0FF;
font-family: 'Circular Std';
display: flex;
list-style-type: none;
  margin: 0;
  padding: 0;





`

const NavList = styled.ul`
 list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;

`

const NavItem = styled.li`
display: block;
  color: white;
  text-align: center;
  padding: 29px;
  text-decoration: none;


`

const Button = styled.button`

width: 154px;
height: 48px;
background: #15888D;
border-radius: 45px;
border: 0;
font-family: 'Circular Std';
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 19px;

/* identical to box height */
text-align: center;

color: #FFF;
display: inline-block;
margin-top: 44px;

`

const Heading = styled.div`

margin-bottom: 31px;


`

const Introduction = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-self: center;
max-width: 631px;
padding-left: 75px;




`

class Intro extends Component {
  render() {
    return (
      <>



        <Wrapper />
        <Section>
          <AstroBoi>
            <img src="/astro.svg" alt="Astro Boi" />
          </AstroBoi>

          <Introduction> <h1>We design awesome landing pages</h1>
            <p>Lunar is a service that offers beautiful landing page design at a flat product rate. Whether you're testing out an entire website redesign, need a quick marketing page, or want to give your website a facelift.</p>

            <Navigation><NavList>
              <NavItem>How It Works</NavItem>
              <NavItem>Landing Page Examples</NavItem>
              <NavItem>FAQs</NavItem>
              <NavItem>Pricing</NavItem>


            </NavList></Navigation>

            <Button

              href="https://github.com/styled-components/styled-components"
              target="_blank"
              rel="noopener"
              primary

            >
              Get Started
      </Button>
          </Introduction>
        </Section>






      </>
    );
  }
}

export default Intro;