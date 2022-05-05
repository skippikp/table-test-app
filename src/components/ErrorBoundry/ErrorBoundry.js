import React, { Component } from 'react';

export default class ErrorBoundry extends Component {
	state = {
		hasError: false,
	};

	componentDidCatch() {
		this.setState({ hasError: true });
	}

	render() {
		return this.state.hasError ? (
			<div>Something goes wrong</div>
		) : (
			this.props.children
		);
	}
}
