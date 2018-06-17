import React from 'react';
import Gate from './Gate';


class Tower extends React.Component {

	render () {
			let stageClass = this.props.stage ? 'gold' : 'gray';
			let multipleclasses = `tower ${stageClass}`;
			console.log("st: ", this.props.stage);
		return (
			<div name="asds" onClick={this.props.clickDispatcher} className={multipleclasses}>tower {this.props.counter} stage: {this.props.stage}
				<Gate/>
			</div>
		)
	} 
}

export default Tower;