import React from 'react';
import Chat from './Chat.jsx';
import io from 'socket.io-client';



class App extends React.Component {
  constructor() {
    super();

    this.socket = io('http://localhost:3000')
  }

  componentDidMount() {
    this.socket.on('connect', () => console.log('client side socket'))
  }

  socketTestFunc() {
    console.log('socket test func called')
    this.socket.emit('news', {hello: 'world'});
    this.socket.on('my other event', function (data) {
      console.log(data);
    });
  }


  render() {
    return (
      <div>
        <Chat />
        <button onClick={this.socketTestFunc.bind(this)}>Test Button</button>
      </div>

    )
  }
}

export default App;
