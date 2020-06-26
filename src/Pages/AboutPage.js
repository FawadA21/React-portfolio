import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return (
        <div>

            <Hero title= {props.title} />

            <Content>
                <p>
                    Hello, my name is Fawad. I am currently learning to code.      
                </p>
                <p>
                    Coding is so complex, you have to practice everyday in order to keep up with the latest trends.
                      
                </p>
            </Content>
             

        </div>
    );
    
}


export default AboutPage;