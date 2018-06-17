import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tower from './components/Tower';
import Interface from './components/Interface';



class Castle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			towers: [{id:0, upgraded:false},{id:1, upgraded:false},{id:2, upgraded:false}]
		}
		this.createTowers = this.createTowers.bind(this);
		this.upgradeTower = this.upgradeTower.bind(this);
	}

	createTowers() {
	// let towers = [1,2,3]
		for (let i=this.state.towers.length; i<this.state.towers.length+7; i++) {
			this.setState(
				function (prevState) {
					let newTowers = this.state.towers;
					newTowers.push({id:i, upgraded:false});
					return {towers: newTowers}
				});
		}
		// return towers;
	}

	upgradeTower(param, e) {
		console.log('mamy to', param)

		this.setState(
			function(prevState) {
				const newUpgrade = prevState.towers;
				newUpgrade[param].upgraded = !newUpgrade[param].upgraded;
				console.log("tow: ", typeof param, newUpgrade[param].upgraded);
				return {towers:newUpgrade}
			});
	}

	render () {
		// this.createTowers();
		return (
			<div>
				<button onClick={this.createTowers}>+</button>
				{this.state.towers.map(
					function (tower,i){ 
						return <Tower clickDispatcher={(e) => this.upgradeTower(tower.id, e)} counter={tower.id} stage={tower.upgraded} key={i}/>
					}.bind(this)
				)}
				<Interface/>
			</div>
		)
	}
}

ReactDOM.render(<Castle/>, document.getElementById('root'))