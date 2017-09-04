import "./../scss/commonFooter.scss";
import "./../scss/more.scss";
import React from "react";
import {Link, hashHistory} from "react-router";

import MyAjax from "./MyAjax.js";

export default class More extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			proList:[],
			proLists:[]
		}
	}
	back(){
		window.history.go(-1);  //返回上一页
	}
	toHomeFn(){
		hashHistory.push("/");
	}
	toListFn(val){
		console.log(val)
		hashHistory.push({
			pathname:'/list',
			query:{
				val : val,
				wod : "wod"
			}
		})
	}
	toSearchFn(){
		var that = this;
		if(this.refs.search.value == ""){
			that.refs.displ.style.display = "block"
			that.refs.searchs.style.display = "none"
		}
		else {
			that.refs.displ.style.display = "none"
			that.refs.searchs.style.display = "block"
		}
		var val = this.refs.search.value
		var url = 'http://w.lefeng.com/api/neptune/search/suggestion/v1?keyword='+val+'&count=15'
		MyAjax.fetchJsonp(url,function(data){
			var ress = data.data
			that.setState({
				proLists:ress
			})
			
		},function(err){
			console.log(err)
		})

	}
	componentWillMount(){
		var that = this;
		var url = 'http://w.lefeng.com/api/neptune/search/hot_keywords/v1?count=10&highlight=1'
		MyAjax.fetchJsonp(url,function(data){
			var res = data.data
			that.setState({
				proList:res
			})
		},function(err){
			console.log(err)
		})
	}
	render(){
		var that = this;
		var data = this.state.proList;
		var datas = this.state.proLists;
		console.log(datas)
		var Array = [];
		var arrSh = [];
		for (var i in datas){
			arrSh.push(<li key={i} onClick={this.toListFn.bind(this,datas[i])}>
					{datas[i]}
				</li>)
		}
		for(var i in data){
			Array.push(<span className={'c'+data[i].ishighlight}key={i} onClick={this.toListFn.bind(this,data[i].word)}>{data[i].word}</span>)
		}
		return (
			<div className = "type">
				<header className ="Moreheader">
					<input ref="search" type="text" placeholder="搜索商品" onInput={this.toSearchFn.bind(this)} / >
					<b onClick={this.back.bind(this)}>取消</b>
					<i className = "iconfont " onClick={this.back.bind(this)}>&#xe633;</i>
				</header>
				<div className="Morecontent">
					<div className="disp" ref = "displ">
						<h1 ref="h1"><i className="iconfont">&#xe618;</i>大家都在搜</h1>
						<div className="commoditylist" ref="commoditylist">
							{Array}
						</div>
					</div>
					<ul className="search" ref="searchs">
						{arrSh}
					</ul>
				</div>
			</div>
		)
	}
}
