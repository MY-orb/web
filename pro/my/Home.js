
import React from "react";
import {Link, hashHistory} from "react-router";

import MyAjax from "./MyAjax.js";

export default class Home extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			proList : [],
			proL : [],
			proList728 :[],
			num : 1
		}
	}
	toTopFn(){
		var that = this;
		this.refs.topone.scrollTop = 0;
		console.log(this.refs.topone.scrollTop)
	}
	toUserFn(){
			hashHistory.push("/user");
		}
	toMoreFn(){
			hashHistory.push("/more");
		}
	toCartFn(){
			hashHistory.push("/cart");
		}
	toKindFn(){
			hashHistory.push("/kind");
		}
	toList_hFn(){
			hashHistory.push("/list_h");
		}
	toList_bFn(){
			hashHistory.push("/list_b");
		}
	toLoginFn(){
		hashHistory.push("/login");
	}
	toRegisterFn(){
		hashHistory.push("/register");
	}
	toMoreAjaxFn(event){
		var that=this
		var top=this.refs.topone.scrollTop
		var height=this.refs.topone.scrollHeight
		var num=this.state.num
		if(top>height-100-this.refs.topone.offsetHeight){
			num++
			that.setState({
				num:num
			})
			var url1="http://w.lefeng.com/api/neptune/special_brands/v3?page="+num+"&labelType=1";
			MyAjax.fetchJsonp(url1,function(data){
				var more=data.data;
				var arr=that.state.proL
				for (var i in more) {
					arr.push(more[i])
				}
				that.setState({					
					proL:arr
				})			
			},function(err){
				console.log(err)
			})
		}
	}
	componentWillMount(){
		var that = this;
		var url = "http://w.lefeng.com/api/neptune/brand/ad/v3?zoneId=943%2C478%2C496%2C693%2C724%2C725%2C726%2C727%2C728&resolution=375x667&appName=lefeng_android&version=4.1.1";
		MyAjax.fetchJsonp(url,function(data){
			var res = data.data['478']
			var result = data.data['496']
			var ret = data.data['724']
			var reu = data.data['725']
			var re = data.data['943']

			that.setState({
				proList : res,
				proMenu : result,
				proGoods : ret,
				proPrice : reu,
				proP : re
			})
		},function(err){
			console.log(err)
		})
		var ul = "http://w.lefeng.com/api/neptune/special_brands/v3?page=1&labelType=1"
	MyAjax.fetchJsonp(ul,function(data){
			var re = data.data['0'].starProductList;
			var r = data.data['1'].starProductList;
			var rrr = data.data;
			that.setState({
				proLis : re,
				proLi : r,
				proL : rrr
			})
		},function(err){
			console.log(err)
		})
	}
	render(){
		var that = this;
		var data = this.state.proList;
		var date = this.state.proMenu;
		var dad = this.state.proGoods;
		var dade = this.state.proPrice;
		var dd = this.state.proP; 
		var ddd = this.state.proLis;
		var d = this.state.proLi;
		var data1 = this.state.proL;
		var Arry1 = [];
		var Ary = [];
		var Ay = [];
		var arr = [];
		var Array = [];
		var Arry = [];
		var Arr = [];
		var Ar = [];
		for(var i in data){
			arr.push(<div className="swiper-slide" key={i}>
						<img src={data[i].imgFullPath}/>
					</div>)
		}
		for(var k in date){
			Array.push(<li className="nav" key={k}><img src={date[k].imgFullPath} /></li>)
		}
		for(var n in dad){
			Arry.push(<div className="swiper-slide"  data-history={n} key={n}><img src={dad[n].imgFullPath}/></div>)
		}
		for(var s in dade){
			Arr.push(<img key={s}  src={dade[s].imgFullPath} />)
		}
		for(var s in dd){
			Ar.push(<img key={s}  src={dd[s].imgFullPath} />)
		}
		for(var i in ddd){
			Ary.push(<div className="swiper-slide"  data-history={i} key={i}><img src={ddd[i].image}/><p>￥{ddd[i].vipshopPrice}</p></div>)
		}
		for(var i in d){
			Ay.push(<div className="swiper-slide"  data-history={i} key={i}><img src={d[i].image}/><p>￥{d[i].vipshopPrice}</p></div>)
		}
		for(var i=2;i<data1.length;i++){
			Arry1.push(<div key={i}><img src={data1[i].brandImage}/><p><i>{data1[i].agio}</i><i>{data1[i].name}</i></p></div>)
		}


		return (
			<div className = "type">
					<header id="homeheader">
						<span>乐蜂</span>
						<span onClick = {this.toMoreFn.bind(this)}><i className = "iconfont ">&#xe680;</i><b>里美</b></span>
						<e className = "iconfont " onClick = {this.toUserFn.bind(this)}>&#xe602;</e>
					</header>
					<div className="homecontent" ref="topone" onScroll={this.toMoreAjaxFn.bind(this)}>
							<div className="iconfont" id="cart" onClick = {this.toCartFn.bind(this)}>&#xe605;</div>
							<div className="iconfont" id="top" onClick = {this.toTopFn.bind(this)} >&#xe68a;</div>
							<div className="swiper-container" id="banner">
									<div className="swiper-wrapper">
											{arr}
									</div>
									<div className="swiper-pagination" id="swiper-p1"></div>
							</div>
							
							<ul className="menu">
										{Array}
							</ul>
							<div className = "fenge"></div>
							<ul className="homeList" onClick = {this.toList_hFn.bind(this)}>
										<img src="../img/newPerson.jpg.jpg" />
										<img src="../img/9x.jpg" />
										<img src="../img/9zn.jpg" />
										<img src="../img/1.jpg" />
										<img src="../img/2.jpg" />
										<img src="../img/3.jpg" />
										<img src="../img/4.jpg" />
							</ul>
							<div className="swiper-container" id="homegoodsList">
									<div className="swiper-wrapper"   onClick = {this.toList_hFn.bind(this)}>
											{Arry}
									</div>
							</div>
							<div className="price">{Arr}</div>
							<div className="name">
									<p>~蜂购全球~</p>
									{Ar}
							</div>
							<div className="name">
									<p>~品牌专场~</p>
									<img src="../img/pinpai.jpg" onClick = {this.toList_bFn.bind(this)} /  >
							</div>

							<div className="swiper-container" id="hotList">
									<div className="swiper-wrapper" >
											{Ary}
									</div>
							</div>
							<div className="price">{Arr}</div>
							<div className="swiper-container" id="hotList1"  onClick = {this.toList_bFn.bind(this)}>
									<div className="swiper-wrapper" >
											{Ay}
									</div>
							</div>
							<div className="speah">
								{Arry1}
							</div>
							

					</div>
					<div className="xmrGUu">
								<aside className="left">
								<a>首页</a>  <a onClick = {this.toCartFn.bind(this)}>购物车</a>  <a>客户端</a>
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
	componentDidUpdate(){
		var mySwiper = new Swiper("#banner",{
				autoplay:3000,
			    loop: true,
			    paginationClickable: true,
			    pagination:'.swiper-pagination',
				autoplayDisableOnInteraction:false
		})
		var mySwiper1 = new Swiper("#homegoodsList",{
		        slidesPerView: 3,
		        spaceBetween: 30,
		        freeMode: true
		})
		var mySwiper2 = new Swiper("#goodsli",{
			    loop: true,
				autoplayDisableOnInteraction:false,
		})		
		var mySwiper3 = new Swiper("#hotList",{
		        slidesPerView: 4,
		        spaceBetween: 30,
		        freeMode: true
		})
		var mySwiper4 = new Swiper("#hotList1",{
		        slidesPerView: 4,
		        spaceBetween: 30,
		        freeMode: true
		})
	}
}
