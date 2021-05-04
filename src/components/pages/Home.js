import React from 'react';
import { Button } from 'semantic-ui-react';
import './Home.css';

class Home extends React.Component {
    render() {
        return (
            <div className="homepage">
                <Button.Group size="massive">
                    <a href="/login">
                        <Button color="black">
                            Login
                        </Button>
                    </a>
                    <Button.Or />
                    <a href="/register">
                        <Button color="black" >
                            Sign Up
                        </Button>
                    </a>
                </Button.Group>
            </div>
        )
    }
}

export default Home;