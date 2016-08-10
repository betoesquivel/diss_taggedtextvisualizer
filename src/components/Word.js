import React from 'react';
import {Card} from 'belle';
import ColorLine from './ColorLine.js';

const style = {

  alignSelf: 'auto',
  flexGrow: 0,
  order: 0,

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',

}

class Word extends React.Component {

  render() {
    const p = this.props;
    return (
      <div >
        <span onClick={(e) => p.showTagInfo(e, p.index)} style={style}>
          {p.selected ? 
            <strong>
              { p.word }
            &nbsp;
            </strong>
            :
            <span>
              { p.word }
              &nbsp;
            </span>
          } 
          {p.tags ? 
            p.tags.map( (t) => (
              <ColorLine 
                showTagInfo={p.showTagInfo}
                text={t.text}
                color={t.color}/>
            ))
            : 
            ''
          }
        </span>
      </div>
    );
  }

}

export default Word;
