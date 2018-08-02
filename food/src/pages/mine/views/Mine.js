import React, { Component, Fragment } from 'react'
import '../style.scss'
import { List } from 'antd-mobile'

import Icon from "../../../assets/icons/not-login.png"
import Right from "../../../assets/icons/right.svg"

const Item = List.Item;
// const Brief = Item.Brief;


class Mine extends Component {
    // constructor(props) {
    //   super(props)
    
    // this.state = {
    //   goodList: [ 
    //     {name:"代付款",
    //     image:""
    //     }
    //   ]
    // }
  // }


render() {
    console.log(this.state)
    return (
    <Fragment>
        <div styleName = "scroll">
          <div styleName = "headtitle">
            <div styleName = "user-box">
            <div styleName="user-layout">
              <img alt ="" styleName="not-login-img" src={Icon}/>
            </div>
            <div styleName="login-or-reg">登录/注册</div>
            </div>
          </div>
          <div styleName = "my-all-order">
            <span styleName="my-order-title">我的订单</span>
            <a styleName="order-all-title" >查看全部
                <img alt = "" styleName = "icon"src = {Right}/>
            </a>
          </div>
          <div styleName = "fourlist">
              <div styleName = "nav-item">
                <div 
                styleName = "imgwrap"
                style = {{backgroundSize: '176px 44px',}}
                >
                </div>
                <p styleName = "imgtext">代付款</p>
              </div>
              <div styleName = "nav-item">
                <div 
                styleName = "imgwrap"
                style = {{backgroundSize: '176px 44px',backgroundPosition:'-44px'}}
                ></div>
                <p styleName = "imgtext">未出行</p>
              </div>
              <div styleName = "nav-item">  
                <div 
                styleName = "imgwrap"
                style = {{backgroundSize: '176px 44px',backgroundPosition:'-88px'}}
                ></div>
                <p styleName = "imgtext">等评价</p>
              </div>
              <div styleName = "nav-item">
                 <div 
                 styleName = "imgwrap"
                 style = {{backgroundSize: '176px 44px',backgroundPosition:'-132px'}}
                 ></div>
                <p styleName = "imgtext">付款</p>
              </div>
          </div>
          <div >
          <List renderHeader={() => ''}>
            <Item
              style = {{height:'54px'}}
              thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
              arrow="horizontal"
              onClick={() => {}}
            >常用旅客</Item>
            <Item
            style = {{height:'54px'}}
              thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
              onClick={() => {}}
              arrow="horizontal"
            >
              我的收藏
            </Item>
            <Item
            style = {{height:'54px'}}
              thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
              onClick={() => {}}
              arrow="horizontal"
            >
              消息
            </Item>
            <Item
            style = {{height:'54px'}}
              thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
              onClick={() => {}}
              arrow="horizontal"
            >
              优惠券
            </Item>
            <Item
            style = {{height:'54px'}}
              thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
              onClick={() => {}}
              arrow="horizontal"
            >
              意见反馈
            </Item>
            <Item
            style = {{height:'54px'}}
              thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
              onClick={() => {}}
              arrow="horizontal"
            >
              在线客服
            </Item>
            <Item
            style = {{height:'54px'}}
              thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
              onClick={() => {}}
              arrow="horizontal"
            >
              设置
            </Item>
          </List>
          </div>
        </div>

    </Fragment>
    )
}
// componentDidMount() {
//   // console.log(this.props.id)
//   fetch('/api/banner')
//     .then(response => response.json())
//     .then(result => {
//       this.setState((prevState) => {
//         return {
//           goodList: [...prevState.goodList, ...result.data.recommend_products[0].products_info]
//         }
//       })
//       console.log(this)
//     })
// }


    
}
export default Mine
