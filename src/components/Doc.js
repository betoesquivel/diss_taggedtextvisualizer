import React from 'react';
import {Card} from 'belle';
import Word from './Word.js';

const style = {

  alignSelf: 'flex-end',
  flexGrow: 0,
  order: 0,

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  alignContent: 'center',
  flexWrap: 'wrap'

}

class Doc extends React.Component {

  render() {
    const p = this.props;
    return (
      <Card style={style}>
        {
          p.tokens.map((tok, i) => {
            return (
              <Word
                key={i}
                index={i}
                word={tok}
                tags={p.tags[i]}
                showTagInfo={p.showTagInfo }
              />
            );
          })
        }
      </Card>
    );
  }

}

export default Doc;
