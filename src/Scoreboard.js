import React, { Component } from 'react';

export function Scoreboard(props) {
	return (
		<div>
			<h1>Scoreboard</h1>
			<p>X:{props.xScore}</p>
			<p>O:{props.oScore}</p>
		</div>
	)
}