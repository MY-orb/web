import "./../scss/commenheader.scss";
import "./../scss/cart.scss";
import React from "react";
import {hashHistory} from "react-router";

import MyAjax from "./MyAjax.js";

export default class Cart extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			proList : []
		}
	}
	
	back(){
		window.history.go(-1);  //返回上一页
	}
	num(){
		var coun = document.getElementById("nub")
		var num = coun.innerHTML;
		var zoh = document.getElementById("zoh")
		var pre = document.getElementById("pz")
		var pp = localStorage.getItem("pre")
		if(num>=19){
			num=19
		}
		num++;
		zoh.innerHTML = '￥'+num*pp
		pre.innerHTML = '￥'+num*pp
		coun.innerHTML = num;
		localStorage.setItem("x",num)
	}
	numj(){
		var coun = document.getElementById("nub")
		var pre = document.getElementById("pz")
		var zoh = document.getElementById("zoh")
		var pp = localStorage.getItem("pre")
		var num = coun.innerHTML;
		num--;
		if(num<=1){
			num=1
		}
		pre.innerHTML = '￥'+num*pp
		zoh.innerHTML = '￥'+num*pp
		coun.innerHTML = num;
		localStorage.setItem("x",num)
	}
	toHomeFn(){
			hashHistory.push("/");
	}
	toAdressFn(){
			var zoh = document.getElementById("pz")
			var zz = pz.innerHTML
			localStorage.setItem("zz",zz)
			hashHistory.push("/adress");
	}
	todeletFn(){
		localStorage.removeItem("a")
		localStorage.removeItem("b")
		localStorage.removeItem("x")
		localStorage.removeItem("pre")
		hashHistory.push("/cart");

	}
	componentWillMount(){
		var that = this
		var i  = localStorage.getItem("a")
		var k = localStorage.getItem("b")
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
		var i  = localStorage.getItem("a")
		var k = localStorage.getItem("b")
		var data = this.state.proList;
		var p = data.vipshopPrice
		localStorage.setItem("pre",p)
		var arr = [];
		var Array = [];
		
		arr.push(<i id="zoh" key={i}>￥{data.vipshopPrice}</i>)
		Array.push(
		<div className="goods" ref="good" >
			<p>乐蜂</p>
			<p></p>
			<p key={1}>
			<img src={data.largeImage} />
			<div className="tex">
				<span>{data.brandName}</span>
				<span>￥{data.vipshopPrice}</span>
				<div><span  onClick={this.numj.bind(this)} >-</span><span id="nub" >1</span><span onClick={this.num.bind(this)} >+</span>
				<span  onClick={this.todeletFn.bind(this)}>&times;</span>	</div>
			</div>
		</p>
		<p>
				<p>支付方式</p>
				<p><input type="checkbox" className="pay" />支付宝</p>
		</p>
		
	</div>)
		
		return (
			<div className = "type">
				<header className ="commonheader">
					<i className = "iconfont " onClick={this.back.bind(this)}>&#xe661;</i>
					<span>支付</span>
				</header>
				<div id="cartcontent">
						{Array}
				</div>
				<div className="fooer">
					<span><i >合计:</i>{arr}</span>
					<button>支付</button>
				</div>
			</div>
		)
	}

}
