import React, { Component } from 'react';
import ImageCard from './ImageCard.jsx';
import $ from 'jquery';
class App extends Component {

  constructor(){
    super();
    this.state = {
      photos: [],
      keyword: null,
      limit: 12
    }
  }

  fetch(key){
    this.setState({keyword: key});
    const { limit, keyword } = this.state;
    const url = `https://api.flickr.com/services/rest/?format=json&method=flickr.photos.search&tags=${keyword}&per_page=${limit}&api_key=c0ca9fca7ecd8cf72f1330ac5f74aaf8&extras=url_s`;
      $.ajax(url, { dataType: 'jsonp', jsonp: 'jsoncallback' })
        .then( ({ photos }) => { 
          this.setState({ photos: photos.photo } )
        })
  }
  render() {
    const { photos } = this.state;
    return (
      <div>
        <div className ='row'>
            <div className="col-sm-4 col-centered search-box">
              <div className="form-group">
                  <input className="form-control" onChange={ ({ target }) => this.fetch(target.value)} placeholder="Search Images" type="text" />
              </div>
            </div>
          </div>
          <div className ='row photo-grid'>
              { photos.map( photo => <ImageCard key={photo.id} url={photo.url_s} title={photo.title}></ImageCard>)}
        </div>
        <div className='col-xs-12'>
          <input type='button' value='Load More Images' onClick={()=>{this.setState({limit: this.state.limit +12}); this.fetch(this.state.keyword)}} className='btn center-block btn-small btn-success'/>
        </div>
      </div>
    )
  }
}

export default App;
