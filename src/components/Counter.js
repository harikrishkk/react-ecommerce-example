// import React, { Component } from 'react'

// export default class Counter extends Component {
//   state = {
//     count: 0, 
       
//   }
//    increment = () => {
//      this.setState(prevState => {
//        return {
//          count: prevState.count + 1
//        }
//      })
//   }
//   render() {
//     return (
//       <div>
//          <h1> { this.state.count }</h1>
//         <button onClick={this.increment}> Incrment </button>
//       </div>
//     )
//   }
// }

import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Hari');
  
  return (
      <div>
         <h1> { count }</h1> 
         <h2> { name } </h2>
        <button onClick={() => setCount(count + 1)}> Incrment </button>
        <button onClick={() => setName('CHanged name')}> Change Name </button>
      </div>
  )
}

export default Counter

