import React from 'react';
import ReactDOM from 'react-dom';

// import AimiButton from 'aimi-button';
import AimiButton from './AimiButton.js'
// import './AimiButton.scss';
import './app.scss';

class LoadingBtn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            buttonText:'Click Countdown'
        }
    }

    handleClick = (e) =>{
        console.log(e)
        // this.handleClick()
    }

    handleCount = () =>{
        console.log('count button')
    }

    render(){
        return(
            <div>
                <AimiButton onClick={this.handleClick}>{this.state.buttonText}</AimiButton>
            </div>
        )
        
    }
}

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
                <div className="demo-container">
                    <p className="demo-title">Aimi Button Component</p>
                    <div className="demo-btn-panel">
                        <AimiButton>Button Normal</AimiButton>
                    </div>
                    <div className="demo-btn-panel">
                        <AimiButton disable>Button Disable</AimiButton>
                    </div>
                    <div className="demo-btn-panel">
                        <AimiButton primary={true} >Button Primary</AimiButton>
                    </div>
                    <div className="demo-btn-panel">
                        <AimiButton primary={true} disable>Button Primary</AimiButton>
                    </div>
                    <div className="demo-btn-panel">
                        <AimiButton primary={true} size={'lg'}>Button Large</AimiButton>
                    </div>
                    <div className="demo-btn-panel">
                        <AimiButton primary={true} size={'sm'}>Button Small</AimiButton>
                    </div>
                    <div className="demo-btn-panel">
                        <LoadingBtn />
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
