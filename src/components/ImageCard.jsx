import React, { Component } from 'react';

class ImageCard extends Component{

    constructor(props){
        super(props);
    }

    render(){
        const { title, url } = this.props;
        return(
                <div className="col-xs-12 col-centered">
                <div className="panel panel-default">
                    <div className="panel-image">
                        <img src={url} className="panel-image-preview img-responsive" />
                    </div>
                        <div className="panel-footer text-center">  
                            <h4> { title } </h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default ImageCard;