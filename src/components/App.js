import React from 'react';
import Doc from './Doc.js';
import {rawTokens} from '../raw_tokens.js';
import {taggedWords} from '../coloured_words.js';
import TagInfo from './TagInfo.js';
import DocSelector from './DocSelector.js';


const style = {

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'space-around'

}

const tags = taggedWords;
class App extends React.Component {

  constructor() {
    super();
    this.showTagInfo = this.showTagInfo.bind(this);
    this.updateTagIndex = this.updateTagIndex.bind(this);
    this.state = { tagsSelected: [], tagIndex: 0, wordIndex:-1 };
  }

  showTagInfo(e, key) {
    console.log(key);
    this.setState({
      tagsSelected: tags[this.state.tagIndex][key],
      wordIndex: key
    });
  }

  updateTagIndex(change) {
    const current = this.state.tagIndex;
    const update = current + change;

    const index = update >= 0 && update < 100 ? update : index;
    console.log(index);
    this.setState({
      tagsSelected: [],
      tagIndex: index,
      wordIndex:-1
    });
  }

  render () {
    return (
      <div id="app" style={style}>
        <DocSelector
          docIndex={this.state.tagIndex}
          updateDocIndex={this.updateTagIndex}
        />
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
