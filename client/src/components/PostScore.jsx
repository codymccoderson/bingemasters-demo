import React, { Component } from 'react';
import styled from 'styled-components';
import another_retro_tv from '../another_retro_tv.png';
import tv_static2 from '../tv_static2.jpg';

const PostScoreBackground = styled.div`
    background: url(${another_retro_tv}) no-repeat center center fixed;
    background-size: 80vw 92vh;
    height: 100vh;
    font-size: 16px; 
    @media screen and (max-width: 64rem) {
        background: url(${tv_static2}) no-repeat center center fixed;
        background-size: cover;
        height: 100vh;
    }
`

const CardWrapper = styled.div`
    @media screen and (max-width: 64rem) {
        display: flex;
        align-items: center;
        flex-flow: column;
        width: 28rem;
        height: 32rem;
        margin: 0 auto;
        position: relative;
        top: 8rem;
        right: 0.5rem;
        background-color: whitesmoke;
        border-radius: 0.875rem;
        box-sizing: border-box;
        border: solid 0.2rem black;
    }
    @media (width: 64rem) and (height: 85.375rem) {
        position: relative;
        top: 18rem;
        width: 38rem;
        height: 46rem;
    }
    @media (width: 64rem) and (height: 63.5rem) {
        position: relative;
        top: 8rem;
        width: 38rem;
        height: 46rem;
    }
    @media screen and (max-width: 48rem) {
        margin: 0 10rem;   
    }
    
    @media (width: 48rem) and (height: 64rem) {
        width: 28rem;
        height: 28rem;
        position: relative;
        top: 15rem;
        right: 0rem;
    }
    @media screen and (max-width: 44rem) {
        margin: 0 7rem;   
    }
    @media screen and (max-width: 40rem) {
        margin: 0 4rem;   
    } 
    @media screen and (max-width: 36rem) {
        margin: 0 2.5rem;   
    }
    @media screen and (max-width: 34rem) {
        margin: 0 1.8rem;   
    }
    @media screen and (max-width: 34rem) {
        margin: 0 1.4rem;   
    }
    @media screen and (max-width: 26.563rem) {
        margin: 0 1.3rem;
        position: relative;
        top: 8rem;
        width: 25rem;
        height: 30rem;   
    }
    @media (width: 26.563rem) and (height: 47.625rem) {
        position: relative;
        top: 0.5rem;
        height: 46.5rem;
    }
    @media (width: 25.875rem) and (height: 46rem) {
        position: relative;
        top: 6rem;
        right: 0.9rem;
        height: 25rem;
    }
    @media screen and (max-width: 25.688rem) {
        width: 23.5rem;
        height: 38rem;
        margin: 0 1.6rem;
        position: relative;
        top: 3.5rem;
    }
    @media (width: 25.688rem) and (height: 51.438rem) {
        position: relative;
        top: 10rem;
        height: 26rem;
    }
    @media (width: 25.688rem) and (height: 45.688rem) {
        position: relative;
        top: 8rem;
        right: 0.6rem;
        height: 26rem;
    }
    @media screen and (max-width: 23.438rem) {
        width: 22rem;
        height: 42rem;
        margin: 0 1.3rem; 
        position: relative;
        top: 3rem; 
    }
    @media (width: 23.438rem) and (height: 50.75rem) {
        position: relative;
        top: 10rem;
        right: 0.6rem;
        height: 25rem;
    }
    @media (width: 23.438rem) and (height: 47.875rem) {
        position: relative;
        top: 9rem;
        height: 26rem;
    }
    @media (width: 23.438rem) and (height: 47.625rem) {
        position: relative;
        top: 1rem;
        right: 0.6rem;
        height: 45.5rem;
    }
    @media (width: 23.438rem) and (height: 41.688rem) {
        position: relative;
        top: 6rem;
        right: 0.6rem;
        height: 25rem;
    }
    @media screen and (max-width: 22.5rem) {
        width: 20.8rem;
        height: 38rem;
        position: relative;
        top: 1rem;  
    }
    @media (width: 22.5rem) and (height: 40rem) {
        position: relative;
        top: 6rem;
        height: 25rem;
    }
    @media screen and (max-width: 20rem) {
        margin: 0 0.9rem;
        position: relative;
        top: 10rem;
        width: 19.2rem;
        height: 24rem;   
    }
    @media (width: 20rem) and (height: 47.625rem) {
        position: relative;
        top: 0.5rem; 
        height: 46.8rem;   
    }
    @media (width: 20rem) and (height: 35.5rem) {
        position: relative;
        top: 5rem;
        height: 24rem;
    }
    
`

const StyledCongrats = styled.div`
    display: flex;
    align-items: center;
    flex-flow: column;
    width: 43.75rem;
    height: 43.75rem;
    margin: 0 auto;
    position: relative;
    top: 10rem;
    right: 9.375rem;
    @media screen and (max-width: 90rem) {
        margin: 0 25rem;
        position: relative;
        top: 10rem;
    }
    @media screen and (max-width: 89rem) {
        margin: 0 24.5rem;
        width: 41.25rem;
        height: 41.25rem;
    }
    @media screen and (max-width: 87.5rem) {
        margin: 0 24rem;
        width: 38.75rem;
        height: 38.75rem;
    }
    @media screen and (max-width: 83.75rem) {
        margin: 0 25rem;
        width: 36.25rem;
        height: 36.25rem;
    }
    @media screen and (max-width: 80.625rem) {
        margin: 0 24rem;
        width: 33.75rem;
        height: 33.75rem;
    }
    @media screen and (max-width: 77.5rem) {
        margin: 0 22.5rem;
        width: 31.25rem;
        height: 31.25rem;
    }
    @media screen and (max-width: 74.375rem) {
        margin: 0 25rem;
        width: 28.75rem;
        height: 28.75rem;
    }
    @media screen and (max-width: 71.25rem) {
        margin: 0 24rem;
    }
    @media screen and (max-width: 68.125rem) {
        margin: 0 23rem;
    }
    @media screen and (max-width: 64rem) {
        position: relative;
        top: 3rem;
        right: -0.4rem;
        margin: 0 22.5rem;
        width: 24rem;
        height: 24rem;
    }
    @media (width: 64rem) and (height: 85.375rem) {
        position: relative;
        top: 2.5rem;
        left: 0.2rem;
        width: 30rem;
    }
    @media screen and (max-width: 48rem) {
        margin: 0 20rem;
        width: 24rem;
        height: 24rem;
    }
    @media (width: 48rem) and (height: 64rem) {
        position: relative;
        top: 1.5rem;
    }
    @media (width: 48rem) and (height: 47.625rem) {
        position: relative;
        top: -0.5rem;
    }
    @media screen and (max-width: 46.25rem) {
        margin: 0 15rem;
        width: 27.5rem;
        height: 27.5rem;
    }
    @media screen and (max-width: 43.125rem) {
        margin: 0 13.75rem;
        width: 26.25rem;
        height: 26.25rem;
    }
    @media screen and (max-width: 40rem) {
        margin: 0 12.5rem;
        width: 25rem;
        height: 25rem;
    }
    @media screen and (max-width: 26.563rem) {
        position: relative;
        top: 3rem;
        width: 20rem;
    }
    @media (width: 26.563rem) and (height: 47.625rem) {
        position: relative;
        top: 0.5rem;
    }
    @media (width: 25.875rem) and (height: 46rem) {
        position: relative;
        top: 0.5rem;
    }
    @media screen and (max-width: 25.688rem) {
        position: relative;
        top: 1rem;
    }
    @media screen and (max-width: 23.438rem) {
        position: relative;
        top: 1rem;
        right: -0.2rem;
        width: 18rem;
    }
    @media (width: 23.438rem) and (height: 50.75rem) {
        position: relative;
        top: 0.5rem;
    }
    @media (width: 23.438rem) and (height: 47.625rem) {
        position: relative;
        top: -0.5rem
    }
    @media screen and (max-width: 22.5rem) {
        position: relative;
        top: -0.5rem;
    }
    @media (width: 22.5rem) and (height: 40rem) {
        position: relative;
        top: 1.5rem;
    }
    @media screen and (max-width: 20rem) {
        position: relative;
        top: 2rem;
        width: 17rem;
    }
`;

const CongratsTitle = styled.h1`
    font-family: 'Retro', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 3rem;
    text-align: center;
    @media screen and (max-width: 87.5rem) {
        font-size: 2.25rem;
    }
    @media screen and (max-width: 64rem) {
        position: relative;
        right: 0.4rem;
    }
    @media (width: 48rem) and (height: 64rem) {
        position: relative;
        right: 0.4rem;
    }
    @media (width: 48rem) and (height: 47.625rem) {
        position: relative;
        right: 0.4rem;
    }
    @media (width: 25.688rem) and (height: 51.438rem) {
        position: relative;
        right: 0.5rem;
    }
    @media (width: 25.688rem) and (height: 45.688rem) {
        position: relative;
        right: 0.2rem;
    }
    @media (width: 23.438rem) and (height: 50.75rem) {
        font-size: 2rem;
    }
    @media (width: 23.438rem) and (height: 47.875rem) {
        font-size: 2rem;
    }
    @media (width: 23.438rem) and (height: 41.688rem) {
        font-size: 2rem;
    }
    @media (width: 22.5rem) and (height: 40rem) {
        font-size: 2rem;
    }
    @media screen and (max-width: 20rem) {
        font-size: 1.5rem;    
    }
    @media (width: 20rem) and (height: 35.5rem) {
        font-size: 1.5rem;
    }
`;

const ScoreSubmit = styled.h2`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 2rem;
    position: relative;
    bottom: 1.5rem;
    font-weight: bolder;
    color: pink;
    text-shadow: -1.1px 0 black, 0 1.1px black, 1.1px 0 black, 0 -1.1px black;
    @media screen and (max-width: 64rem) {
        font-size: 1.5rem;
    }
    @media screen and (max-width: 53.125rem) {
        font-size: 1rem;
    }
    @media (width: 48rem) and (height: 64rem) {
        position: relative;
        right: 0.6rem;
        font-size: 1.5rem;
    }
    @media (width: 48rem) and (height: 47.875rem) {
        position: relative;
        right: 0.6rem;
        font-size: 1.125rem;
    }
    @media (width: 48rem) and (height: 47.625rem) {
        font-size: 1rem;
    }
    @media screen and (max-width: 26.563rem) {
        font-size: 0.8rem;
    }
    @media (width: 26.563rem) and (height: 47.875rem) {
        font-size: 1.125rem;
        position: relative;
        right: 0.4rem;       
    }
    @media (width: 26.563rem) and (height: 47.625rem) {
        font-size: 1.125rem;
    }
    @media (width: 25.875rem) and (height: 46rem) {
        position: relative;
        right: 0.6rem;
        font-size: 1.25rem;
    }
    @media (width: 25.688rem) and (height: 51.438rem) {
        position: relative;
        right: 0.6rem;
        font-size: 1.125rem;
    }
    @media (width: 25.688rem) and (height: 45.688rem) {
        font-size: 1.125rem;
        position: relative;
        right: 0.6rem;
    }
    @media (width: 23.438rem) and (height: 50.75rem) {
        position: relative;
        right: 0.6rem;
        font-size: 1.125rem;
    }
    @media (width: 23.438rem) and (height: 47.625rem) {
        font-size: 1rem;
    }
    @media (width: 23.438rem) and (height: 47.875rem) {
        position: relative;
        right: 0.6rem;
        font-size: 1rem;
    }
    @media (width: 23.438rem) and (height: 41.688rem) {
        position: relative;
        right: 0.6rem;
        font-size: 1rem;
    }
    @media (width: 22.5rem) and (height: 40rem) {
        position: relative;
        right: 0.6rem;
        font-size: 1rem;
    }
    @media screen and (max-width: 20rem) {
        position: relative;
        right: 0.6rem;
        font-size: 1rem;    
    }
    @media (width: 20rem) and (height: 47.625rem) {
        font-size: 1rem;
    }
    
    @media (width: 20rem) and (height: 35.5rem) {
        font-size: 1.125rem;
    }
`

const TheFormWrapper = styled.div`
    position: relative;
    bottom: 2rem;
    @media screen and (max-width: 64rem) {
        position: relative;
        right: 0.5rem;
        bottom: 1.5rem;
    }
    .userInput {
        font-size: 0.875rem;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        border-radius: 0.25rem;
        box-sizing: border-box;
        border: solid 0.188rem black;
        height: 2rem;
    }
    .userSubmit {
        position: relative;
        left: 0.5rem;
        background-color: black;
        :hover {color: white};
        transition: color .1s;
        font-size: 1.5rem;
        font-weight: bolder;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        color: pink;
        border-radius: 0.8rem;
        box-sizing: border-box;
        border: solid 0.188rem black;
        width: 8rem;
        @media (width: 48rem) and (height: 64rem) {
            font-size: 1.5rem;
        }
        @media (width: 48rem) and (height: 47.875rem) {
            font-size: 1.5rem;
        }
        @media (width: 48rem) and (height: 47.625rem) {
            font-size: 1.5rem;
        }
    }
`

const Text = styled.p`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 1.5rem;
    font-weight: bolder;
    color: black;
    @media screen and (max-width: 64rem) {
        font-size: 1.25rem;
    }
    @media (width: 64rem) and (height: 85.375rem) {
        font-size: 1.125rem;
    }
    @media (width: 64rem) and (height: 63.5rem) {
        font-size: 1.125rem;
    }
    @media (width: 48rem) and (height: 64rem) {
        font-size: 1.125rem;
    }
    @media (width: 48rem) and (height: 47.625rem) {
        font-size: 1rem;
    }
    @media (width: 26.563rem) and (height: 47.625rem) {
        font-size: 1.125rem;
    }
    @media (width: 25.875rem) and (height: 46rem) {
        font-size: 1rem;
    }
    @media (width: 25.688rem) and (height: 51.438rem) {
        font-size: 1.125rem;
    }
    @media (width: 25.688rem) and (height: 45.688rem) {
        font-size: 1rem;
    }
    @media (width: 23.438rem) and (height: 50.75rem) {
        font-size: 1.125rem;
    }
    @media (width: 23.438rem) and (height: 47.625rem) {
        font-size: 1rem;
    }
    @media (width: 20rem) and (height: 47.625rem) {
        font-size: 1rem;
    }
    @media (width: 20rem) and (height: 35.5rem) {
        font-size: 1rem;
    }
`

class PostScore extends Component {
    state = {
        clickHome: false
    };

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }  

handleSubmit = (event) => {
    // Remove this and pop up score submitted modal screen?
    event.preventDefault();
    //(event.target)
    const data = {name: this.state.name, score: this.props.currentScore}
    
    fetch('http://localhost:5000/api/scores/post', {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
        body: JSON.stringify(data),

        //implement an auto redirect to home screen after letting them know (not through alert) score entry was submitted
    });
    alert('Score Submitted!')
}

render() {
    return (
        <PostScoreBackground>
                <CardWrapper>
                    <StyledCongrats>
                        <CongratsTitle>
                            Congratulations, You made it to the Leaderboard!
                        </CongratsTitle>
                        <ScoreSubmit>
                        Submit your score below
                        </ScoreSubmit>
                        <TheFormWrapper>
                       
                        <form onSubmit={this.handleSubmit.bind(this)} >
                   
                            <input  
                                type="text"
                                placeholder="Enter your name"
                                value={this.state.name}
                                required
                                maxLength="3"
                                onChange={this.onChangeName.bind(this)}
                            />
                            
                            <Text>
                            <p>Streak: {this.props.currentScore}</p>
                            </Text>
                        
                            <input 
                                type="submit"
                                value="Submit"
                                onClick= {() => {window.open("/","_self")}}
                            />
                        </form>
                        </TheFormWrapper>
                    </StyledCongrats>
                </CardWrapper>
            </PostScoreBackground>
    )
    } }

export default PostScore;