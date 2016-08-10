import React from 'react';
import {Card} from 'belle';

const style = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'center',
}

class TagInfo extends React.Component {

  constructor() {
    super();
    this.renderTag = this.renderTag.bind(this);
  }

  renderTag(tag) {
    const {
      'surface-form': stanfordSurfaceForm,
      'spot': tagmeSurfaceForm,
      'wikifier-surface-form': wikifierSurfaceForm,
    } = tag;

    if (stanfordSurfaceForm) {
      const {
        type
      } = tag;
      return (
        <div>
          <h2> Surface: {stanfordSurfaceForm} </h2>
          <h3> Type: {type} </h3>
        </div>
      )
    } else if (tagmeSurfaceForm) {
      const {
        'dbpedia_categories': categories
      } = tag;
      return (
        <div>
          <h2> Surface: {tagmeSurfaceForm} </h2>
          <strong>Categories: <span> {categories.join()} </span></strong>
          <p>
            {
              JSON.stringify({
               'link_probability': tag.link_probability,
               'rho': tag.rho,
               'title': tag.title
              })
            }
          </p>
        </div>
      );

    } else if (wikifierSurfaceForm) {
      const {
        dbPediaIri,
        secTitle,
        'dbPediaTypes': categories
      } = tag;
      return (
        <div>
          <h2> Surface: {wikifierSurfaceForm} </h2>
          <h3> Title: {secTitle} </h3>
          <strong>Categories: <span> {categories.join()} </span></strong>
          <p>
            {
              JSON.stringify({
               'secTitle': tag.secTitle,
               'secUrl': tag.secUrl,
               'cosine': tag.cosine
              })
            }
          </p>
        </div>
      );

    }
  }

  render() {
    const p = this.props;

    return (
      <div>
        {
          (p.color != 'white') ? 
            <Card style={{ style, backgroundColor: p.color }}>
              {this.renderTag(p.tag)}
            </Card>
          : ''
        }
      </div>
    );
  }
}

export default TagInfo;
