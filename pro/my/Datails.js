import "./../scss/datails.scss";
import "./../scss/commenheader.scss";

import React from "react";
import {hashHistory} from "react-router";

import MyAjax from "./MyAjax.js";
export default class Daails extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			proList : []
		}
	}
	
	back(){
		window.history.go(-1);  //返回上一页
	}
	toifCartFn(){
		var logs = localStorage.getItem("isLogin")
		console.log(logs)
		if(logs == 1){
			console.log(logs)
			hashHistory.push("/cart");
		}else{
			hashHistory.push("/login");
		}
	}
	toCartFn(){
			hashHistory.push("/cart");
	}
	componentWillMount(){
		var that = this
		var i = this.props.location.query.Bid
		var k = this.props.location.query.gid
		localStorage.setItem('a',i)
		localStorage.setItem('b',k)
		console.log(i)
		console.log(k)
		var url = 'http://w.lefeng.com/api/neptune/goods/detail_with_stock/v1?needBrandInfo=true&gid='+k+'&brandId='+i
		MyAjax.fetchJsonp(url,function(data){
			var res = data.data.goods
			that.setState({
				proList:res
			})
			console.log(res)
		},function(err){
			console.log(err)
		})
	}
	render(){ 
		var that = this
		var data = this.state.proList;
		console.log(data)
		var arr = [];
		var Array = [];
			Array.push(<div className="datailsList" key={1}>
				<img src={data.largeImage} />
				<div className="find-l">
				<p>{data.name}<i className="iconfont">&#xe72d;</i></p>
				<span>￥{data.vipshopPrice}</span>
				<span>￥{data.marketPrice}</span>
				</div>
			</div>)	
			arr.push(<span key={1}>{data.name}</span>)
		return (
		<div className = "type">
				<header className ="commonheader">
					<i className = "iconfont " onClick={this.back.bind(this)}>&#xe661;</i>
					{arr}
					<i className = "iconfont " onClick={this.back.bind(this)}>&#xe633;</i>
				</header>
				<div id="Datailscontent">
						{Array}
						<div className="cheaper">
							<p><span>满减</span><span>满199减50</span><span>上不封顶</span></p>
							<p><span>包邮</span><span>全场满99包邮</span></p>
						</div>
				</div>			
			
				<div className="fooer">
					<span><i className = "iconfont "  onClick={this.toCartFn.bind(this)}>&#xe605;</i></span>
					<button onClick = {this.toifCartFn.bind(this)}>加入购物车</button>
				</div>
		</div>
		)
	}
}
 