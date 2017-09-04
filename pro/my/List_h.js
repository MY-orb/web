
import React from "react";
import {Link, hashHistory} from "react-router";

import MyAjax from "./MyAjax.js";

export default class List extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			proList : [],
			proL : [],
			num : 1
		}
	}
	back(){
		window.history.go(-1);  //返回上一页
	}
	sort(){
		var that = this;
		var kd = this.props.location.query.val
		var wo = this.props.location.query.wod
		var url = 'http://w.lefeng.com/api/neptune/search/search_by_keyword/v1?keyword=%E9%98%B2%E6%99%92%E9%9A%94%E7%A6%BB&sort=%7B%22vipshopPrice%22%3A%22asc%22%7D'
		MyAjax.fetchJsonp(url,function(data){
			var res = data.data
			that.setState({
				proList:res
			})
		},function(err){
			console.log(err)
		})
	}
		pos(){
		var that = this;
		var kd = this.props.location.query.val
		var wo = this.props.location.query.wod
		var url = 'http://w.lefeng.com/api/neptune/search/search_by_keyword/v1?keyword=%E9%98%B2%E6%99%92%E9%9A%94%E7%A6%BB&sort=%7B%22sale%22%3A%22desc%22%7D&page=1'
		MyAjax.fetchJsonp(url,function(data){
			var res = data.data
			that.setState({
				proList:res
			})
		},function(err){
			console.log(err)
		})
	}
	toHomeFn(){
		hashHistory.push("/");
	}
	toCartFn(){
		hashHistory.push("/cart");
	}
	toLoginFn(){
		hashHistory.push("/login");
	}
	toRegisterFn(){
		hashHistory.push("/register");
	}
	toDatailsFn(Bid,gid){
		hashHistory.push({
			pathname:'/datails',
			query:{
				Bid : Bid,
				gid : gid
			}
		})
	}
	toMoreAFn(event){
		console.log(111111)
		var that = this
		var top = this.refs.topone.scrollTop
		var height = this.refs.topone.scrollHeight
		var num=that.state.num
		console.log(num)
		if(top>100){
			num++
			that.setState({
				num:num
			})
			var url1="http://w.lefeng.com/api/neptune/search/search_by_keyword/v1?keyword="+wo+"&page="+num;
			MyAjax.fetchJsonp(url1,function(data){
				var more=data.data;
				var Array=that.state.proL
				for (var i in more) {
					Array.push(more[i])
				}
				that.setState({					
					proL:Array
				})		
			},function(err){
				console.log(err)
			})
		}
	}
	componentWillMount(){
		var that = this;
		var kd = this.props.location.query.val
		var wo = this.props.location.query.wod
		var url = 'http://w.lefeng.com/api/neptune/goods/list_with_stock/v1?brandId=800043359&start=2'
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
		var Array = [];
		for(var i in data){
			Array.push(<li key={i} onClick={this.toDatailsFn.bind(this,data[i].goods.brandId,data[i].goods.gid)} >
				<img src={data[i].goods.image}/>
						<div className="List-right">
							<h1>{data[i].goods.brandStoreName}</h1>
							<h2>{data[i].goods.name}</h2>
							<div><i className="iconfont">&#xe602;</i><span>{data[i].goodsStock.saled}人购买</span></div>
							<div>
								<span>￥{data[i].goods.vipshopPrice}</span>
								<span>￥{data[i].goods.marketPrice}</span>
								<i className="iconfont">&#xe605;</i>
							</div>
						</div>
					</li>)
		}
		return (
			<div className = "type">
				<header className ="Moreheader">
					<input ref="search" type="text" placeholder="搜索商品" / >
					<b onClick={this.back.bind(this)}>取消</b>
					<i className = "iconfont " onClick={this.back.bind(this)}>&#xe633;</i>
				</header>
				<div className="Listcontent" ref="topone"onScroll={this.toMoreAFn.bind(this)}>
					<div className="iconfont" id="cart" onClick = {this.toCartFn.bind(this)}>&#xe605;</div>
					<div className="Listtitle">
						<p  onClick={this.sort.bind(this)}>价格</p>
						<p onClick={this.pos.bind(this)}>销量</p>
						<p>筛选</p>
					</div>
					<ul className="details">
						{Array}
					</ul>
				</div>
				<div className="xmrGUu">
								<aside className="left">
								<a onClick = {this.toHomeFn.bind(this)}>首页</a>  <a onClick = {this.toCartFn.bind(this)}>购物车</a>  <a>客户端</a>
								</aside>
								<aside className="right">
								<a onClick = {this.toLoginFn.bind(this)}>登录</a>   <a onClick = {this.toRegisterFn.bind(this)}>注册</a>
								</aside>
								<p>联系客服 <a>400-000-1818</a> </p>
								<p>Copyright © 2008-2017Lefeng.com All Rights Reserved</p>
				</div>
			</div>
		)
	}
}
