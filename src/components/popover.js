import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './popover.css';

export default class Popover extends Component {
	render() {
		return (
			<div className="popover">
				<div className="popover-text">
					{this.props.defaultText}
				</div>
				<div className={"popover-text-" + this.props.position}>
					{this.props.popoverText}
				</div>
			</div>
		);
	}
}

Popover.propTypes = {
	defaultText: PropTypes.string.isRequired,
	popoverText: PropTypes.string.isRequired,
	position: PropTypes.oneOf(["top","left","right","bottom"]).isRequired
}
