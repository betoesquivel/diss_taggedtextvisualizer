import React from 'react';
import Doc from './Doc.js';
import {rawTokens} from '../raw_tokens.js';
import {taggedWords} from '../coloured_words.js';


const style = {

  backgroundColor: 'tomato',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'center',

}



const tags = taggedWords[0] || [
  [{color:'white'}, {color:'white'}, {color: 'yellow'}],
  [{color:'white'}, {text:'loc', color:'tomato'}, {color: 'yellow'}],
  [{text: 'org', color:'royalblue'}, {color:'tomato'}, {color: 'yellow'}],
  [{color:'royalblue'}, {color:'tomato'}, {color: 'yellow'}],
  [{color:'royalblue'}, {color:'white'}, {color: 'white'}],
  [{color:'white'}, {color:'white'}, {color: 'yellow'}],
  [{color:'white'}, {color:'white'}, {color: 'yellow'}],
  [{color:'white'}, {text:'per', color:'tomato'}, {color: 'yellow'}],
  [{color:'white'}, {color:'white'}, {color: 'yellow'}],
  [{color:'white'}, {color:'tomato'}, {color: 'yellow'}],
  [{color:'white'}, {color:'white'}, {color: 'yellow'}],
  [{color:'white'}, {color:'white'}, {color: 'yellow'}],
  [{color:'white'}, {color:'white'}, {color: 'yellow'}],
  [{color:'white'}, {color:'tomato'}, {color: 'yellow'}],
  [{color:'royalblue'}, {color:'tomato'}, {color: 'yellow'}],
  [{color:'royalblue'}, {color:'tomato'}, {color: 'yellow'}],
  [{color:'royalblue'}, {color:'white'}, {color: 'yellow'}],
  [{color:'white'}, {color:'white'}, {color: 'white'}],
  [{color:'white'}, {color:'tomato'}, {color: 'white'}],
  [{color:'royalblue'}, {color:'tomato'}, {color: 'white'}],
  [{color:'royalblue'}, {color:'tomato'}, {color: 'white'}],
  [{color:'royalblue'}, {color:'white'}, {color: 'white'}],
  [{color:'white'}, {color:'white'}, {color: 'white'}],
  [{color:'white'}, {color:'tomato'}, {color: 'white'}],
  [{color:'white'}, {color:'white'}, {color: 'white'}],
  [{color:'white'}, {color:'tomato'}, {color: 'yellow'}],
  [{color:'royalblue'}, {color:'tomato'}, {color: 'yellow'}],
  [{color:'royalblue'}, {color:'tomato'}, {color: 'yellow'}],
  [{color:'royalblue'}, {color:'white'}, {color: 'yellow'}],
  [{color:'royalblue'}, {color:'tomato'}, {color: 'yellow'}],
  [{color:'royalblue'}, {color:'tomato'}, {color: 'yellow'}],
  [{color:'white'}, {color:'white'}, {color: 'yellow'}],
  [{color:'white'}, {color:'tomato'}, {color: 'yellow'}],
  [{color:'royalblue'}, {color:'tomato'}, {color: 'yellow'}],
  [{color:'royalblue'}, {color:'tomato'}, {color: 'yellow'}],
  [{color:'royalblue'}, {color:'white'}, {color: 'yellow'}],
  [{color:'white'}, {color:'white'}, {color: 'yellow'}],
  [{color:'white'}, {color:'tomato'}, {color: 'yellow'}],
  [{color:'royalblue'}, {color:'tomato'}, {color: 'yellow'}],
  [{color:'royalblue'}, {color:'tomato'}, {color: 'yellow'}],
  [{color:'royalblue'}, {color:'white'}, {color: 'yellow'}],
  [{color:'royalblue'}, {color:'white'}, {color: 'yellow'}],
  [{color:'white'}, {color:'tomato'}, {color: 'yellow'}],
  [{color:'royalblue'}, {color:'tomato'}, {color: 'yellow'}],
  [{color:'royalblue'}, {color:'tomato'}, {color: 'yellow'}],
  [{color:'royalblue'}, {color:'white'}, {color: 'yellow'}],
  [{color:'white'}, {color:'tomato'}, {color: 'yellow'}],
  [{color:'royalblue'}, {color:'tomato'}, {color: 'yellow'}],
  [{color:'royalblue'}, {color:'tomato'}, {color: 'yellow'}],
  [{color:'royalblue'}, {color:'white'}, {color: 'yellow'}],
  [{color:'royalblue'}, {color:'tomato'}, {color: 'yellow'}],
  [{color:'royalblue'}, {color:'tomato'}, {color: 'yellow'}],
  [{color:'royalblue'}, {color:'white'}, {color: 'yellow'}],
  [{color:'royalblue'}, {color:'tomato'}, {color: 'yellow'}],
  [{color:'royalblue'}, {color:'tomato'}, {color: 'yellow'}],
  [{color:'royalblue'}, {color:'white'}, {color: 'yellow'}],
  [{color:'white'}, {color:'tomato'}, {color: 'yellow'}],
  [{color:'royalblue'}, {color:'tomato'}, {color: 'yellow'}],
  [{color:'royalblue'}, {color:'tomato'}, {color: 'yellow'}],
  [{color:'royalblue'}, {color:'white'}, {color: 'yellow'}],
];

class App extends React.Component {

  constructor() {
    super();
    this.showTagInfo = this.showTagInfo.bind(this);
    this.state = { tagsSelected: [] };
  }

  showTagInfo(e, key) {
    console.log(key);
    this.setState({tagsSelected: tags[key]});
  }

  render () {
    return (
      <div id="app" style={style}>
        <Doc
          showTagInfo= {this.showTagInfo}
          tokens={rawTokens[0]}
          tags={tags}/>
        {
          this.state.tagsSelected.map((t) => (JSON.stringify(t)))
        }
      </div>
    );
  }

}

export default App;
