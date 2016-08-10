import React from 'react';
import Doc from './Doc.js';
import {rawTokens} from '../raw_tokens.js';
import {taggedWords} from '../coloured_words.js';
import TagInfo from './TagInfo.js';


const style = {

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'center',

}

const tags = taggedWords;
class App extends React.Component {

  constructor() {
    super();
    this.showTagInfo = this.showTagInfo.bind(this);
    this.state = { tagsSelected: [], tagIndex: 0, wordIndex:-1 };
  }

  showTagInfo(e, key) {
    console.log(key);
    this.setState({
      tagsSelected: tags[this.state.tagIndex][key],
      wordIndex: key
    });
  }

  render () {
    return (
      <div id="app" style={style}>
        <Doc
          wordIndex= {this.state.wordIndex}
          showTagInfo= {this.showTagInfo}
          tokens={rawTokens[this.state.tagIndex]}
          tags={tags[this.state.tagIndex]}/>
        {
          this.state.tagsSelected.map((t, i) => {
            return (
              <TagInfo
                key={i}
                color={ t.color }
                tag={ t }
              />
            );
          })
        }
      </div>
    );
  }

}

export default App;
