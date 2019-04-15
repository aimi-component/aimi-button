## Install

```
npm i aimi-button
```

## Usage

```
import React from 'react';
import ReactDOM from 'react-dom';

import AimiButton from 'aimi-button';

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
                <p>Aimi Button Component</p>
                <AimiButton>Button Normal</AimiButton>
                <AimiButton disable>Button Normal</AimiButton>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

```

