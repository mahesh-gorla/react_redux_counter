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
						<h1>
							<span onClick={this.incHandle}>+</span>
						</h1>
						<h1>{this.props.count}</h1>
						<h1>
							<span onClick={this.decHandle}>-</span>
						</h1>
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
