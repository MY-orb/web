
import React from "react";

import { Link, hashHistory} from "react-router";

import MyAjax from "./MyAjax.js";

import "./../scss/kind.scss";
import "./../scss/commenheader.scss";
export default class Kind extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			searchTxt : [],
			kind : [],
			nav : [],
			activeIndex : 0
		}
	}
	componentWillMount(){
		var that = this;
		var searchUrl = "http://list.mogujie.com/module/mget?code=sketch%2ChotWord";
		var kindUrl = "http://mce.mogucdn.com/jsonp/multiget/3?pids=41789%2C4604&callback";
		var navUrl = "http://mce.mogujie.com/jsonp/makeup/3?pid=41888";
		MyAjax.fetchJsonp(searchUrl,function(data){
			that.setState({
				searchTxt : data.data.sketch.data.query,
			});
		},function(err){
			console.log(err)
		})
		MyAjax.fetchJsonp(kindUrl,function(data){
			console.log(data)
			that.setState({
				kind : data.data[41789].list
			});

		},function(err){
			console.log(err)
		})
		MyAjax.fetchJsonp(navUrl,function(data){
			console.log(data);
			that.setState({
				nav : data.data.categoryNavigation.list
			});

		},function(err){
			console.log(err)
		})
	}
	
	search(){
		hashHistory.push({
			pathname:"/more",
		})
		
	}
	back(){
		window.history.go(-1);  //返回上一页
	}
	toListFn(){
		hashHistory.push("/list_h"); //返回上一页
	}
	toHomeFn(){
		hashHistory.push("/");
	}
	cart(){
		hashHistory.push({
			pathname:"/cart",
		})
	}
	
	
	kind(maitKey,i){
		this.setState({
			activeIndex : i
		})
		var that = this;
		var navUrl = "http://mce.mogujie.com/jsonp/makeup/3?pid="+maitKey;
		MyAjax.fetchJsonp(navUrl,function(data){
			that.setState({
				nav : data.data.categoryNavigation.list
			});

		},function(err){
			console.log(err)
		})
	}
	
	
	render(){
		var kindArr = [];
		var kind = this.state.kind;
		for(var i in kind){
			kindArr.push(<div className = { this.state.activeIndex == i ? "active" : ""} key = {i} onClick = {this.kind.bind(this,kind[i].maitKey,i)}>
				<p>{kind[i].title}</p>
			</div>)
		}
	
		var navArr = [];
		var nav = this.state.nav;
		for(var j in nav){
			navArr.push(<div key = {j} onClick={this.toListFn.bind(this)}>
				<img src = {nav[j].image} />
				<span>{nav[j].title}</span>
			</div>)
		}
		
		return(
			<div className = "type">
				<header className ="commonheader">
					<i className = "iconfont " onClick={this.back.bind(this)}>&#xe661;</i>
					<span>我的蜂巢</span>
					<i className = "iconfont " onClick={this.toHomeFn.bind(this)}>&#xe633;</i>
				</header>
				
				<div id = "content">
					<div className = "content_content">
						<div className = "content_kind">
							{kindArr}
						</div>
						<div className = "content_nav">
							{navArr}
							
						</div>
					</div>
				</div>
			</div>
		)
		
	}
}