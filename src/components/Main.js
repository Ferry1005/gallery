require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let imgDatas = require('../data/imgDatas.json')

let imgDatastmp = imgDatas.map((singleImgData) => {
	singleImgData.imgURL = require(`../images/${singleImgData.fileName}`)
	return singleImgData
})
console.log(imgDatastmp)

class AppComponent extends React.Component {
  render() {
  	
    return (
      	<section className="stage">
      		<section className="img-sec">
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
