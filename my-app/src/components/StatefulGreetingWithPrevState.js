import React from "react";

class StatefulGreetingWithPrevState extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: 'Hello!',
            buttonText: 'Exit!',
            count: 0
        };
    }

    increment() {
        this.setState((prevState, prevProps) => {
            console.log('Previous state', prevState)
            console.log('Previous props', prevProps)
            return {
                count: prevState.count + 1
            }
        });
    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        }
    
        
    

    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log('Previous state', prevState)
            console.log('Previous props', prevProps)
            return {
                introduction: prevState.introduction === 'Hello' ? 'Goodbye' : 'Hello',
                buttonText: prevState.buttonText === 'Exit' ? 'Enter' : 'Exit'
            }
        
        })
    }



    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.greeting}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <button onClick={() => this.incrementFive()}>Increment by 5</button>
                <p>You've clicked {this.state.count} times</p>
            </div>
        )
    }
};


export default StatefulGreetingWithPrevState;