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

const tags = taggedWords[0];
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
          this.state.tagsSelected.map((t) => {
            return (
              <TagInfo
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
