import React from 'react';
import {Button} from 'belle';

const style = {
  display: 'flex',

  alignSelf: 'center',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  width:'20%'
}
class DocSelector extends React.Component {
  render() {
    const p = this.props;
    return (
      <div className="docSelector" style={style}>
        <Button onClick={()=> p.updateDocIndex(-1)}>Previous</Button>
        <span> {p.docIndex} </span>
        <Button onClick={()=> p.updateDocIndex(1)}>Next</Button>
      </div>
    );
  }

}

export default DocSelector;
