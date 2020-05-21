import React from 'react';
import styled from 'styled-components';
import another_retro_tv from '../another_retro_tv.png';
import HomePage from './HomePage';
import tv_static2 from '../tv_static2.jpg';
import axios from 'axios';
import PostScore from './PostScore';
import { connect } from 'react-redux';

const LeaderboardBackground = styled.div`
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
        width: 30rem;
        height: 34rem;
        margin: 0 auto;
        position: relative;
        top: 8rem;
        background-color: whitesmoke;
        border-radius: 0.875rem;
        box-sizing: border-box;
        border: solid 0.2rem black;
    }

    @media (width: 64rem) and (height: 85.375rem) {
        position: relative;
        top: 15rem;
        width: 34rem;
        height: 38rem;
    }

    @media screen and (max-width: 48rem) {
        margin: 0 8rem;  
    } 

    @media (width: 48rem) and (height: 64rem) {
        position: relative;
        top: 14rem;
        left: 0.5rem;
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
        margin: 0 0.6rem;   
    }

    @media screen and (max-width: 26.563rem) {
        margin: 0 0.8rem;
        position: relative;
        top: 8rem;
        width: 25rem;
        height: 30rem;   
    }

    @media (width: 25.875rem) and (height: 46rem) {
        position: relative;
        top: 7.5rem;
        right: 0.35rem;
    }

    @media (width: 25.688rem) and (height: 51.438rem) {
        position: relative;
        top: 9.5rem;
        right: 0.5rem;
    }

    @media (width: 25.688rem) and (height: 45.688rem) {
        position: relative;
        top: 7.5rem;
        right: 0.5rem;
    }

    @media screen and (max-width: 23.438rem) {
        width: 20.5rem;
        margin: 0 1.4rem;  
    }

    @media (width: 23.438rem) and (height: 41.688rem) {
        position: relative;
        top: 5rem;
    }

    @media (width: 23.438rem) and (height: 50.75rem) {
        position: relative;
        top: 10rem;
    }

    @media (width: 22.5rem) and (height: 40rem) {
        position: relative;
        top: 5rem;
        right: 0.4rem;

    }

    @media screen and (max-width: 20rem) {
        margin: 0 1.4rem;
        position: relative;
        top: 8rem;
        width: 17rem; 
    } 
    
    @media (width: 20rem) and (height: 35.5rem) {
        position: relative;
        top: 2.5rem;
    }
`

const StyledLeaderboard = styled.div`
    display: flex;
    align-items: center;
    flex-flow: column;
    width: 43.75rem;
    height: 43.75rem;
    margin: 0 auto;
    position: relative;
    top: 9rem;
    right: 10rem;

    @media screen and (max-width: 90rem) {
        margin: 0 24.375rem;
        position: relative;
        right: 10rem;
        width: 43.75rem;
        height: 43.75rem;

    }

    @media screen and (max-width: 87.5rem) {
        margin: 0 23.75rem;
        width: 41.25rem;
        height: 41.25rem;

    }
    @media screen and (max-width: 86.875rem) {
        margin: 0 23.125rem;
        width: 38.75rem;
        height: 38.75rem;
    }

    @media screen and (max-width: 83.75rem) {
        width: 36.25rem;
        height: 36.25rem;
    }

    @media screen and (max-width: 80.625rem) {
        margin: 0 23.5rem;
        width: 33.75rem;
        height: 33.75rem;
    }

    @media screen and (max-width: 74.375rem) {
        margin: 0 20.5rem;
    }

    @media screen and (max-width: 71.25rem) {
        margin: 0 18.5rem;
    }

    @media screen and (max-width: 68.125rem) {
        margin: 0 17.5rem;
    }

    @media screen and (max-width: 64rem) {
        position: relative;
        top: 3.5rem;
        right: 3.5rem;
        margin: 0 17.5rem;
        width: 34rem;
        height: 34rem;
    }

    @media screen and (max-width: 43.125rem) {
        margin: 0 17rem;
    }

    @media screen and (max-width: 41.6rem) {
        margin: 0 16rem;
    }

    @media screen and (max-width: 40.8rem) {
        margin: 0 13rem;
    }

    @media screen and (max-width: 40rem) {
        margin: 0 10rem;
    }

    @media screen and (max-width: 26.563rem) {
        margin: 0 9rem;
    }

    @media screen and (max-width: 23.438rem) {
        margin: 0 7.5rem;
        position: relative;
        right: 1.7rem;
    }
`;

const LeaderboardTitle = styled.h1`
    font-family: 'Retro', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 3rem;
    text-align: center;
    position: relative;
    left: 0.938rem;

    @media screen and (max-width: 81.25rem) {
        position: relative;
        left: 2.5rem;
    }

    @media screen and (max-width: 64rem) {
        position: relative;
        bottom: 3rem;
        left: 3.5rem;
    }
`;

const LeaderboardTableWrapper = styled.div`

    list-style-type: none;
    position: relative;
    left: 0.75rem;
    bottom: 0.5rem;
    overflow-x: hidden;
    overflow-y: scroll;
    width: 31.25rem;

    @media screen and (max-width: 64rem) {
        position: relative;
        left: 6.75rem;
        bottom: 3rem;
    }

    .notLoggedInLeaderboardText {
        position: relative;
        left: 4rem;
        font-size: 1.125rem;
        white-space: nowrap;

        @media screen and (max-width: 80.625rem) {
            position: relative;
            left: 6rem;
        }

        @media screen and (max-width: 64rem) {
            position: relative;
            left: 1rem;
        }
    }

    td {
        font-size: 1.5rem;
        font-weight: bolder;
        color: pink;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
        position: relative;
        left: 0.75rem;
        top: 0.25rem;

        -webkit-columns: 2;
        -moz-columns: 2;
        columns: 2;
        -webkit-column-gap: 22rem;
        -moz-column-gap: 22rem;
        column-gap: 22rem;
        font-weight: bolder;
        font-size: 20px;

    @media screen and (max-width: 80.625rem) {
       position: relative;
       left: 3rem;
       -webkit-column-gap: 20rem;
        -moz-column-gap: 20rem;
        column-gap: 20rem;

    }

    @media screen and (max-width: 64rem) {
        position: relative;
        left: 0rem;
        top: 0rem;
        -webkit-column-gap: 17rem;
        -moz-column-gap: 17rem;
        column-gap: 17rem;
    }

    }
    
`

const ButtonLine = styled.div`
    display: flex;
`

const ReturnHomeButton = styled.button`
    background-color: pink;
    color: black;
    :hover {color: white};
    transition: color .1s;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 1.125rem;
    padding: 0.625rem;
    margin: 0.313rem;
    width: 9.375rem;
    border-radius: 0.5rem;
    box-sizing: border-box;
    border: solid 0.188rem black;
    position: relative;
    top: 1rem;

    @media screen and (max-width: 81.25rem) {
        position: relative;
        left: 1.8rem;
    }

    @media screen and (max-width: 64rem) {
        position: relative;
        left: 3rem;
        top: 1rem;
    }
`;

class Leaderboard extends React.Component {

    state = {
        clickedReturn: false,
        list: [],
    }

    componentDidMount() {
        this.getList();
    }

    handleClickReturn () {
        this.setState({
          clickedReturn: true
        })
      }

    getList = () => {
        fetch('/api/scores')
        .then(res => res.json())
        .then(list => this.setState({ list }))
    }
    
    handleSubmit = (event) => {
        // Remove this and pop up score submitted modal screen?
        event.preventDefault();
        //(event.target)
        const data = {
            name: this.state.name, 
            score: this.props.currentScore
        };
        
        fetch('http://localhost:5000/api/scores/post', {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              },
            body: JSON.stringify(data),

            //implement an auto redirect to home screen after letting them know (not through alert) score entry was submitted
            
        });
    }
    
    inputChangeHandler(e) {
        let formFields = {...this.state.formFields};
        formFields[e.target.name] = e.target.value;
        this.setState({
            formFields
        });
       }
    
    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeScore(e) {
        this.setState({
            score: e.target.value
        });
    }
    
    renderContent1() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li>
                            <a href="/auth/google"
                            >Login With Google
                            </a>
                        </li>
            default: 
                return <li>
                            <a href="/api/logout">
                                Logout
                            </a>
                        </li>
        }
    }

    renderContent2() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return;
            default: 
                return <PostScore/>
        }
    }

    formHandler(formFields) {
    axios.post('/api/scores/post', formFields)
        .then(function(response){
        console.log(response);
        //Perform action based on response
    })
        .catch(function(error){
        console.log(error);
        //Perform action based on error
        });
    }

    render() {

        const { list } = this.state;

        if (this.state.clickedReturn === false) {

        return(
            <LeaderboardBackground>
                <CardWrapper>
                    <StyledLeaderboard>
                            <LeaderboardTitle>
                                Greatest Bingemasters
                            </LeaderboardTitle>
                                <LeaderboardTableWrapper>
                                    {list.length ? (
                                    <table>
                                    {list.map((item) => {
                                        return(
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        {item.name}
                                                    </td>
                                                    <td>
                                                        {item.score}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        );
                                    })}
                                    </table>
                                    ) : (
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className="notLoggedInLeaderboardText">
                                                    Users must login to see the leaderboard
                                                </td>  
                                            </tr>
                                        </tbody>
                                    </table>
                                    )}
                                </LeaderboardTableWrapper>
                            <ButtonLine>
                                <ReturnHomeButton 
                                    type="submit"
                                    onClick={this.handleClickReturn.bind(this)}
                                    >Return Home      
                                </ReturnHomeButton>
                            </ButtonLine>
                        </StyledLeaderboard>
                    </CardWrapper>
                </LeaderboardBackground>
        )} else {
            return <HomePage/> 
        }
    }
}

function mapStateToProps ({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Leaderboard);