import React, { Component } from 'react';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Control from './components/Control';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/CreateContent';
// import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode:'read',
      subject: {title:'WEB', sub:'World Wide Web'},
      welcome:{title:'Wellcome', desc:'Hello React!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for informaiton'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }

  

  render() {
    console.log('App render');
    let _title, _desc, _article = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if (this.state.mode === 'read') {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if (this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function(_title, _desc) {
        this.max_content_id = this.max_content_id + 1;
        // let _contents = this.state.contents.concat(
        //   {id:this.max_content_id, title:_title, desc:_desc}
        // );

        let newContent = Array.from(this.state.contents);
        newContent.push({id:this.max_content_id, title:_title, desc:_desc});
        this.setState({
          // contents:_contents
          contents:newContent
        });
      }.bind(this)}></CreateContent>
    }
    // console.log("render", this);
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function() {
            this.setState({mode:'welcome'});
          }.bind(this)}
        >
        </Subject>
        <TOC onChangePage={function(id) {
          this.setState({
            mode:'read',
            selected_content_id:Number(id)
          });
        }.bind(this)}
        data={this.state.contents}></TOC>

        <Control onChangeMode={function(_mode) {
          this.setState({
            mode:_mode
          });
        }.bind(this)}></Control>
        {/* {this.getContent()} */}
        {/* <Content title={_title} desc={_desc}></Content> */}
      </div>
    )
  }
}

export default App;
