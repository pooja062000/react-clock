import { Component } from 'react'
class Lifecycle extends Component{
    constructor(props){
        super(props);
        this.state = {
            timenow : new Date()
        };
    }

    componentWillMount(){
        console.log('component Will Mount')
        clearInterval(this.timer)
    }

    componentDidMount(){
        console.log('component Did Mount')
        this.timer = setInterval(() => {
            this.setState({
                timenow : new Date()
            })
        }, 1000);
    }

render(){
    return(
        <>
        <h1>React Digital Clock</h1>
        <h2>Time is {this.state.timenow.toLocaleTimeString()} PM</h2>       
        </>
    )
}

}
export default Lifecycle


















