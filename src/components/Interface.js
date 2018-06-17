import React from 'react';

class Interface extends React.Component {
	constructor(props) {
		super(props);
		this.state = {baseHeight: 'aaa'};
		this.handleHeightSetter = this.handleHeightSetter.bind(this)
	}


	handleHeightSetter(e) {
		this.setState({
			baseHeight: e.target.value
		})
	}

	render () {
		return (
			<div className="controll-nav">
			<input type="text" value={this.state.baseHeight} onChange={this.handleHeightSetter}/>
			</div>
			)
	}
}

export default Interface;