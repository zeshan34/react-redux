import React, { Component } from 'react'
import { addRecipe } from '../actions'

class App extends Component {
  state={
    calender:null
  }
  componentDidMount(){
    const{store} = this.props
    store.subcribe = ( ()=>{
      this.setState( ()=>({
        calender:store.getState()
      }))
    } ) 
  }
  submitFood = () =>{
      this.props.store.dispatch(addRecipe({
        day:'monday',
        meal:'breakfast',
        recipes:{
          label:this.input.value
        }

      }))
      this.input.value=""
  }
  render() {
    return (
      <div>
        <input 
          type="text"
          ref={(input) =>this.input = input}
          placeholder="Monday is Breakfast"
          />
          <button onClick={this.submitFood}>Submit</button>

          <pre>
            Monday's Breakfast :{this.state.calender && this.state.calender.monday.breakfast}
          </pre>
        

      </div>
    )
  }
}

export default App