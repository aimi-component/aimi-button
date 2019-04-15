import React from 'react';
import ReactDOM from 'react-dom';

// import AimiButton from 'aimi-button';
import AimiButton from './AimiButton.js'
import './AimiButton.scss';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            buttonDisable:true
        }
    }
    render(){
        return(
            <div>
                <div>
                    <p>Aimi Button Component</p>
                    <div>
                        <AimiButton>Button Normal</AimiButton>
                    </div>
                    <div>
                        <AimiButton disable>Button Normal</AimiButton>
                    </div>
                    <div>
                        <AimiButton primary={true} >Button Normal</AimiButton>
                    </div>
                    <div>
                        <AimiButton primary={true} size={'lg'}>Button Normal</AimiButton>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
