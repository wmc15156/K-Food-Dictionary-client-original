import React from 'react';
import img from './images/logo.jpg'
import { BrowserRouter } from 'react-router-dom'
import Nav from './pages/Nav'
import Main from './pages/Main';
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <img className="mainPageLogo" src={img} alt="logo"></img>
        <Nav></Nav>

        <Main></Main>
      </BrowserRouter>

    );
  }
}
export default App;