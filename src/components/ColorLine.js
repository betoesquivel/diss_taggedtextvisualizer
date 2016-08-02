import React from 'react';
import {Card} from 'belle';

const baseStyle = {

  alignSelf: 'auto',
  flexGrow: 0,
  order: 0,
  width: '100%',
  height: '5px',
  margin: 0,
  padding: 0,
  borderTop: '0px',
  borderBottom: '0px',
  borderRadius: 0,
  boxShadow: 0,

}

class ColorLine extends React.Component {

  render() {
    const p = this.props;
    const style = Object.assign(
      {backgroundColor: p.color},
      baseStyle
    );
    return (
      <Card style={style}>
      </Card>
    );
  }

}

export default ColorLine;
