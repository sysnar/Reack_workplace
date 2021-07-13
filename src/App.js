import React, { Component } from 'react';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Content from './components/Content';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode:'welcome',
      subject: {title:'WEB', sub:'World Wide Web'},
      welcome:{title:'Wellcome', desc:'Hello React!!'},
      content:[
        {id:1, title:'HTML', desc:'HTML is for informaiton'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }
  render() {
    console.log('App render');
    let _title, _desc = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      _title = this.state.content[0].title;
      _desc = this.state.content[0].desc;
    }
    return (
      <div className="App">
        {/* <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}></Subject> */}
        <header>
          <h1><a href="/" onClick={function(e) {
            console.log(e);
            e.preventDefault();
            this.setState({mode: 'welcome'});
            // alert('hello react');
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header>
        <TOC data={this.state.content}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    )
  }
}

export default App;
