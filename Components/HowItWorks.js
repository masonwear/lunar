import styled from 'styled-components'
import React, { Component } from 'react';


const Button = styled.button `

width: 243px;
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
margin-top: 122px;

`

const TextBox = styled.div `

width: 362px;
padding-top: 213.36px;
padding-left: 241px;
text-align: left;
display: flex;
flex-direction: column;



`

const Heading = styled.h2 `
text-align: left;
margin-bottom: 0px;


`

const Paragraph = styled.p `

text-align: left;
width: 362px;


`

const Steps = styled.ul `

font-family: 'Circular Std';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 23px;
/* identical to box height */


color: #FFFFFF;

list-style-image: url('/static/Ellipse 1.svg');
display: flex;
flex-direction: column;
padding: 48px;
width: 362px;
padding-top: 235.36px;
padding-left: 241px;
text-align: left;

`

const List = styled.li `
list-style-image: url('/static/Ellipse 1.svg');
text-align: left;

`

const Section = styled.div `
display: flex;
flex-direction: row;




`



class HowItWorks extends Component {
    render() {
        return (
            <>

           <Section>
            
            <TextBox>

            <Heading>How it works</Heading> 
            <Paragraph>Avoid going through the standard agency model for good design. Our team will quickly hand over a developer-ready file and assets for you to use however you choose.</Paragraph>
            <Button      

    href="https://github.com/styled-components/styled-components"
      target="_blank"
      rel="noopener"
      primary

      >
          Frequently Asked Questions
      </Button>
      </TextBox>

      <Steps>

     <List>Fill out your short discovery brief</List>
        <List>Upload your company logo or any additional files you want</List>
        <List>Confirm your project and purchase your landing page</List>
        <List>Receive your landing page design for approval in 3 days</List>
        <List>We wrap up and send you the files you need for development</List>



      </Steps>

      </Section>


            </>
        );
    }
}

export default HowItWorks;