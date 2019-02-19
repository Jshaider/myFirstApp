import React from 'react';
import Button from './Button'


class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: "Give me my Text", name : "A*******e", tri: 1};
        this.changeState=this.changeState.bind(this);
    };

 
    changeState(){
        const x = document.getElementById('txt').value;
        const y= x.toLowerCase();
        if (y === 'attribute'){
        this.setState({name: x, tri: 1});
        
    }
        else{
            let z=this.state.tri+1;
            this.setState({tri:z});
            alert('Sorry You entered wrong text, its your '+ this.state.tri+' try');
        }
        
    };
    
  render() {
    return (<div>
        <div>
            <header className='App-header'>
                <h1 >Guess the word, starts with 'A' and ends on 'e', its a 9 letters word</h1>
                <form >
                    <input type="text" id="txt"></input>
                </form>

                <Button onClick={this.changeState} name={this.state.value}/>
                <h1>{this.state.value}, {this.state.name}</h1>
            </header>
        
        </div>
        </div>); 
  }
};



export default Clock;