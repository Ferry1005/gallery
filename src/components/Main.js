require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let imgDatas = require('../data/imgDatas.json')

let imgDatastmp = imgDatas.map((singleImgData) => {
	singleImgData.imgURL = require(`../images/${singleImgData.fileName}`)
	return singleImgData
})

class ImgFigure extends React.Component {
	render() {
		return (
			<figure className="img-figure">
				<img src={this.props.data.imgURL}
					alt={this.props.data.title} />
				<figcaption>
					<h2>{this.props.data.title}</h2>
				</figcaption>
			</figure>
		)
	}
}

class AppComponent extends React.Component {
  render() {
  	let imgFigures = []
  	imgDatastmp.forEach(value => {
  		imgFigures.push(<ImgFigure data={value} />)
  	})

    return (
      	<section className="stage">
      		<section className="img-sec">
      			{imgFigures}
      			<nav className="controller-nav">
      			</nav>
      		</section>
      	</section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
