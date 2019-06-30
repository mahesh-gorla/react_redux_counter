import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
	incHandle = () => {
		console.log('clicked');
		this.props.dispatch({
			type: 'INC'
		});
	};
	decHandle = () => {
		this.props.dispatch({
			type: 'DEC'
		});
	};
	render() {
		return (
			<div>
				<div className='App'>
					<header className='App-header'>
						<span onClick={this.incHandle}>+</span>
						{this.props.count}
						<span onClick={this.decHandle}>-</span>
					</header>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	count: state.counter
});

export default connect(mapStateToProps)(App);
