
import React from "react";
import {Link, IndexLink} from "react-router";

export default class App extends React.Component{
	constructor(props){
		super(props)
	}
	
	render(){
		
		return (
			<div id="container">
				{this.props.type}
				<div id = "toast">
				</div>
			</div>
		)
	}
}
