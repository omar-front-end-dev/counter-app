import { Component } from 'react'

export class Counter extends Component {
    state = {
        count: 0,
    }
    
    increase = () =>{
        this.setState({
            count: this.state.count + 1
        })
    }
    decrease = () => {
        if (this.state.count > 0) {
            this.setState({
                count: this.state.count - 1
            });
        }
    }

    reset = () =>{
        this.setState({
            count: 0
        })
    }

  render() {
    return (
    <>    
        <div className='counter-container d-flex justify-content-center align-items-center flex-column'>
        <h1 className='text-center mb-3'># counter App</h1>
            <div className="counter__content p-5 w-50 text-center rounded-3 shadow-lg">
                <h1 className="counter__content__count mb-5 display-2">{this.state.count}</h1>
                <div className="counter__content__control">
                    <button onClick={this.decrease} className='btn btn-danger mx-2'>Decrease</button>
                    <button onClick={this.reset} className='btn btn-warning mx-2'>Reset</button>
                    <button onClick={this.increase} className='btn btn-success mx-2'>Increase</button>
                </div>
            </div>
        </div>
    </>  
    )
  }
}
