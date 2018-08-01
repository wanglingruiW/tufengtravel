import React, { Component, Fragment } from 'react'

import '../style.scss'

// import CSSModule from 'react-css-modules'

import { getCategories, getHot } from '../actionCreator'

import { connect } from 'react-redux'

import { Carousel, TabBar } from 'antd-mobile';

// connect: 把store里的sta  te,和对state的操作
const mapState = (state) => {  
  return {
    categories: state.wiki.categories,
    gethot: state.hotreducer.gethot
  }
}

const mapDispatch = (dispatch) => {
  return {
    getData: (action) => {
      dispatch(action)
    }
  }
}

class Wiki extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      imgHeight: 310,
      electedTab: 'redTab',
      hidden: false,
      fullScreen: false,
    }
  }
 

  render() {
    
    return (
    <div
    sytle ={{width:'100%',height:'100%', overflowY:'scroll'}}>
        <Carousel
          autoplay={true}
          infinite = {true}
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.props.categories.map(val => (
            <a
              key={val}
              // href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                // src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                src={val.image}
                style={{ width: '100%', height:'310px', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
        {
          // this.props.geticons.map((value, index) => {
            // return <div styleName="color" key="100028923">{value.activity}</div>
          // })
        }
        <div
          style = {{display:'flex', flexWrap:'wrap', flexDirection:'row', verticalAlign:'center', textAlign:'center'}}
        >
          <div style = {{ flex:'25%', width:"97.5px", height:"100%"}}>
            <img 
              src = {`http://img2.toursforfun.com/f2/77/82/途风精品.png`}
              alt=""
              style = {{width:'72px', height:'72px', verticalAlign:'top',verticalAlign:'center', textAlign:'center'}}
              />
              <div>
              途风精品
              </div>
          </div>
          <div style = {{ flex:'25%', width:"97.5px", height:"100%"}}>
            <img 
              src = {`http://img1.toursforfun.com/f1/63/fd/多日游.png`}
              alt=""
              style = {{width:'72px', height:'72px', verticalAlign:'top'}}
              />
              <div>
                多日游
              </div>
          </div>
          <div style = {{ flex:'25%', width:"97.5px", height:"100%"}}>
            <img 
              src = {`http://img2.toursforfun.com/f2/31/0c/一日游.png`}
              alt=""
              style = {{width:'72px', height:'72px', verticalAlign:'top'}}
              />
              <div>
                一日游
              </div>
          </div>
          <div style = {{ flex:'25%', width:"97.5px", height:"100%"}}>
            <img 
              src = {`http://img2.toursforfun.com/f2/14/f8/定制旅行.png`}
              alt=""
              style = {{width:'72px', height:'72px', verticalAlign:'top'}}
              />
              <div>
                定制旅行
              </div>
          </div>
          <div style = {{ flex:'25%', width:"97.5px", height:"100%"}}>
            <img 
              src = {`http://img1.toursforfun.com/f1/4e/7a/邮轮游.png`}
              alt=""
              style = {{width:'72px', height:'72px', verticalAlign:'top'}}
              />
              <div>
                邮轮游
              </div>
          </div>
          <div style = {{ flex:'25%', width:"97.5px", height:"100%"}}>
            <img 
              src = {`http://img1.toursforfun.com/f1/c8/f5/票务.png`}
              alt=""
              style = {{width:'72px', height:'72px', verticalAlign:'top'}}
              />
              <div>
                票务
              </div>
          </div>
          <div style = {{ flex:'25%', width:"97.5px", height:"100%"}}>
            <img 
              src = {`http://img2.toursforfun.com/f2/a2/17/签证.png`}
              alt=""
              style = {{width:'72px', height:'72px', verticalAlign:'top'}}
              />
              <div>
                签证
              </div>
          </div>
          <div style = {{ flex:'25%', width:"97.5px", height:"100%"}}>
            <img 
              src = {`http://img2.toursforfun.com/f2/4d/16/接送.png`}
              alt=""
              style = {{width:'72px', height:'72px', verticalAlign:'top'}}
              />
              <div>
                接送
              </div>
          </div>
          <div 
          style = {{height:'110px', display:'flex', flexWrap:'nowrap', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <img 
            src={"//cdn.tff.bz/f2/81/fe/750156.jpg"}
            style = {{ width:'90%', height:'87px', textAlign:'center', display:'inlineblock'}}
            />
          </div>
          <div
          style = {{width:'100%', height:'10px', background:'#EEE'}}
          >

          </div>
        </div >
        <div
        style ={{width:'100%', height:'154px'}}>
            <h3
             style = {{textAlign:'center', fontSize:'18px', height:'69px', lineHeight:'69px'}}>
              热门目的地
            </h3>
            <div
            style ={{display:'flex', width:'auto',overflowX:'scroll', height:'85.5px', flexDirection:'row', flexWrap:'nowrap',flexShrink:'0'}}
            > {this.props.categories.map(val => (
              <div
              key={val.id}
              style = {{display:'block', width:'95.5px', height:'95.5px', background: `url(${val.image}) no-repeat`, backgroundSize:'85.5px 85.5px', flexShrink:'0'
            }}
              >
                <span
                style = {{paddingRight:'5px', display:'flex',fontSize:'14px', color:'#fff', justifyContent:'center',lineHeight:'85.5px', alignItems:'center'}}
                >
                 
                </span>
              </div>
             ))}
            </div>
        </div>
        <div>
            <div styleName = "p-nav-item"> 
            <h3>品质精选</h3>
              <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                hidden={this.state.hidden}
                tabBarPosition="top"
              >
                  <TabBar.Item
                  title='加拿大'
                  key="laamerica"
                  icon={<div style={{
                    width: '0px',
                    height: '0px',
                    fontSize:'14px'
                  }}
                  />
                  }
                  selectedIcon={<div style={{
                    width: '22px',
                    height: '22px',
                    fontSize:'14px'
                  }}
                  />
                  }
                  selected={this.state.selectedTab === 'america'}
                  onPress={() => {
                    this.setState({
                      selectedTab: 'america',
                    });
                  }}
                  data-seed="logId"
                >
               
                <div styleName="home-product-list"
                style = {{width:'100%',  style:'flex', flexDirection:'row'}}
                > 

                
                {this.props.gethot[0]?
                this.props.gethot[0].products_info[1].map(val => (
                  <div
                 key="val.product_id"
                  styleName = "discount-tag"
                  style = {{width:'366px', height:'361px'}}
                  >
                    <img
                    alt=""
                    src = {val.image}
                    // src={`//toursforfun.tff.bz${val.image}`}
                    style={{ width: '100%', height:'240px', verticalAlign: 'top',borderRadius:'5px' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                    />
                    <div styleName ="img-tip-mask">
                        <div styleName="tart-city">
                        {val.departure_desc}
                        </div>
                        <div styleName="vbinding">
                        <span styleName="vhide-binding">{val.order_count}人出游</span>
                        </div>
                    </div>
                    <div styleName = "product-info">
                      <h4 styleName="ng-binding">
                      {val.name}
                      </h4>
                      <div styleName="price-wrap">
                        <div styleName="list-tag">
                            <i styleName = "confirm">
                            </i>
                            <li styleName ="editor-diy">
                            买二送一
                            </li>
                        </div>
                        <div styleName = "price">
                            <span styleName="value">
                            ${val.origin_price}
                            </span>
                            <span styleName = "price-qi-big">
                              起
                              </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  ))
                :''
                }
                </div>
                  {/* {this.renderContent('Life')} */}
                </TabBar.Item>

                <TabBar.Item
                  title='美西'
                  key="cannada"
                  icon={<div style={{
                    width: '0px',
                    height: '0px',
                    fontSize:'14px'
                  }}
                  />
                  }
                  selectedIcon={<div style={{
                    width: '22px',
                    height: '22px',
                    fontSize:'14px'
                  }}
                  />
                  }
                  selected={this.state.selectedTab === 'cannada'}
                  onPress={() => {
                    this.setState({
                      selectedTab: 'cannada',
                    });
                  }}
                  data-seed="logId"
                >
                 <div styleName="home-product-list"
                style = {{width:'100%',  style:'flex', flexDirection:'row'}}
                > 
                {this.props.gethot[0]?
                this.props.gethot[0].products_info[1].map(val => (
                  <div
                 key="val.product_id"
                  styleName = "discount-tag"
                  style = {{width:'366px', height:'361px'}}
                  >
                    <img
                    alt=""
                    src={val.image}
                    style={{ width: '100%', height:'240px', verticalAlign: 'top',borderRadius:'5px' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                    />
                    <div styleName ="img-tip-mask">
                        <div styleName="tart-city">
                        {val.departure_desc}
                        </div>
                        <div styleName="vbinding">
                        <span styleName="vhide-binding">{val.order_count}人出游</span>
                        </div>
                    </div>
                    <div styleName = "product-info">
                      <h4 styleName="ng-binding">
                      {val.name}
                      </h4>
                      <div styleName="price-wrap">
                        <div styleName="list-tag">
                            <i styleName = "confirm">
                            </i>
                            <li styleName ="editor-diy">
                            买二送一
                            </li>
                        </div>
                        <div styleName = "price">
                            <span styleName="value">
                            ${val.origin_price}
                            </span>
                            <span styleName = "price-qi-big">
                              起
                              </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  ))
                :''
                }
                </div>
                  {/* {this.renderContent('Life')} */}
                </TabBar.Item>
                <TabBar.Item
                  title='欧洲'
                  key="europe"
                  icon={<div style={{
                    width: '0px',
                    height: '0px',
                    fontSize:'14px'
                  }}
                  />
                  }
                  selectedIcon={<div style={{
                    width: '22px',
                    height: '22px',
                    fontSize:'14px'
                  }}
                  />
                  }
                  selected={this.state.selectedTab === 'europe'}
                  onPress={() => {
                    this.setState({
                      selectedTab: 'europe',
                    });
                  }}
                  data-seed="logId"
                >
                <div styleName="home-product-list"
                style = {{width:'100%',  style:'flex', flexDirection:'row'}}
                > 
                {this.props.gethot[0]?
                this.props.gethot[0].products_info[2].map(val => (
                  <div
                 key="val.product_id"
                  styleName = "discount-tag"
                  style = {{width:'366px', height:'361px'}}
                  >
                    <img
                    alt=""
                    src={val.image}
                    style={{ width: '100%', height:'240px', verticalAlign: 'top',borderRadius:'5px' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                    />
                    <div styleName ="img-tip-mask">
                        <div styleName="tart-city">
                        {val.departure_desc}
                        </div>
                        <div styleName="vbinding">
                        <span styleName="vhide-binding">{val.order_count}人出游</span>
                        </div>
                    </div>
                    <div styleName = "product-info">
                      <h4 styleName="ng-binding">
                      {val.name}
                      </h4>
                      <div styleName="price-wrap">
                        <div styleName="list-tag">
                            <i styleName = "confirm">
                            </i>
                            <li styleName ="editor-diy">
                            买二送一
                            </li>
                        </div>
                        <div styleName = "price">
                            <span styleName="value">
                            ${val.origin_price}
                            </span>
                            <span styleName = "price-qi-big">
                              起
                              </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  ))
                :''
                }
                </div>
                  {/* {this.renderContent('Life')} */}
                </TabBar.Item>
                <TabBar.Item
                  title='亚非'
                  key="america"
                  icon={<div style={{
                    width: '0px',
                    height: '0px',
                    fontSize:'14px'
                  }}
                  />
                  }
                  selectedIcon={<div style={{
                    width: '0px',
                    height: '0px',
                    fontSize:'14px'
                  }}
                  />
                  }
                  selected={this.state.selectedTab === 'laamerica'}
                  onPress={() => {
                    this.setState({
                      selectedTab: 'laamerica',
                    });
                  }}
                  data-seed="logId"
                >
                <div styleName="home-product-list"
                style = {{width:'100%', style:'flex', flexDirection:'row'}}
                > 
                {this.props.gethot[0]?
                this.props.gethot[0].products_info[3].map(val => (
                  <div
                 key="val.product_id"
                  styleName = "discount-tag"
                  style = {{width:'366px', height:'361px'}}
                  >
                    <img
                    alt=""
                    src={val.image}
                    style={{ width: '100%', height:'240px', verticalAlign: 'top',borderRadius:'5px' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                    />
                    <div styleName ="img-tip-mask">
                        <div styleName="tart-city">
                        {val.departure_desc}
                        </div>
                        <div styleName="vbinding">
                        <span styleName="vhide-binding">{val.order_count}人出游</span>
                        </div>
                    </div>
                    <div styleName = "product-info">
                      <h4 styleName="ng-binding">
                      {val.name}
                      </h4>
                      <div styleName="price-wrap">
                        <div styleName="list-tag">
                            <i styleName = "confirm">
                            </i>
                            <li styleName ="editor-diy">
                            买二送一
                            </li>
                        </div>
                        <div styleName = "price">
                            <span styleName="value">
                            ${val.origin_price}
                            </span>
                            <span styleName = "price-qi-big">
                              起
                              </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  ))
                :''
                }
                </div>
                  {/* {this.renderContent('Life')} */}
                </TabBar.Item>

               </TabBar>
              </div>
              {/* {-----------------------------------------------------------限时特惠} */}
              <div styleName = "p-nav-item"> 
            <h3>精选特惠</h3>
              <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                hidden={this.state.hidden}
                tabBarPosition="top"
              >
                  <TabBar.Item
                  title='美国'
                  key="laamerica"
                  icon={<div style={{
                    width: '0px',
                    height: '0px',
                    fontSize:'14px'
                  }}
                  />
                  }
                  selectedIcon={<div style={{
                    width: '22px',
                    height: '22px',
                    fontSize:'14px'
                  }}
                  />
                  }
                  selected={this.state.selectedTab === 'america'}
                  onPress={() => {
                    this.setState({
                      selectedTab: 'america',
                    });
                  }}
                  data-seed="logId"
                >
               
                <div styleName="home-product-list"
                style = {{width:'100%', style:'flex', flexDirection:'row'}}
                > 
                
                {this.props.gethot[1]?
                this.props.gethot[1].products_info[0].map(val => (
                  <div
                 key="val.product_id"
                  styleName = "discount-tag"
                  style = {{width:'366px', height:'361px'}}
                  >
                    <img
                    alt=""
                    src = {val.image}
                    // src={`//toursforfun.tff.bz${val.image}`}
                    style={{ width: '100%', height:'240px', verticalAlign: 'top',borderRadius:'5px' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                    />
                    <div styleName ="img-tip-mask">
                        <div styleName="tart-city">
                        {val.departure_desc}
                        </div>
                        <div styleName="vbinding">
                        <span styleName="vhide-binding">{val.order_count}人出游</span>
                        </div>
                    </div>
                    <div styleName = "product-info">
                      <h4 styleName="ng-binding">
                      {val.name}
                      </h4>
                      <div styleName="price-wrap">
                        <div styleName="list-tag">
                            <i styleName = "confirm">
                            </i>
                            <li styleName ="editor-diy">
                            买二送一
                            </li>
                        </div>
                        <div styleName = "price">
                            <span styleName="value">
                            ${val.origin_price}
                            </span>
                            <span styleName = "price-qi-big">
                              起
                              </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  ))
                :''
                }
                </div>
                  {/* {this.renderContent('Life')} */}
                </TabBar.Item>

                <TabBar.Item
                  title='加拿大'
                  key="cannada"
                  icon={<div style={{
                    width: '0px',
                    height: '0px',
                    fontSize:'14px'
                  }}
                  />
                  }
                  selectedIcon={<div style={{
                    width: '22px',
                    height: '22px',
                    fontSize:'14px'
                  }}
                  />
                  }
                  selected={this.state.selectedTab === 'cannada'}
                  onPress={() => {
                    this.setState({
                      selectedTab: 'cannada',
                    });
                  }}
                  data-seed="logId"
                >
                 <div styleName="home-product-list"
                style = {{width:'100%', style:'flex', flexDirection:'row'}}
                > 
                {this.props.gethot[1]?
                this.props.gethot[1].products_info[1].map(val => (
                  <div
                 key="val.product_id"
                  styleName = "discount-tag"
                  style = {{width:'366px', height:'361px'}}
                  >
                    <img
                    alt=""
                    src={val.image}
                    style={{ width: '100%', height:'240px', verticalAlign: 'top',borderRadius:'5px' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                    />
                    <div styleName ="img-tip-mask">
                        <div styleName="tart-city">
                        {val.departure_desc}
                        </div>
                        <div styleName="vbinding">
                        <span styleName="vhide-binding">{val.order_count}人出游</span>
                        </div>
                    </div>
                    <div styleName = "product-info">
                      <h4 styleName="ng-binding">
                      {val.name}
                      </h4>
                      <div styleName="price-wrap">
                        <div styleName="list-tag">
                            <i styleName = "confirm">
                            </i>
                            <li styleName ="editor-diy">
                            买二送一
                            </li>
                        </div>
                        <div styleName = "price">
                            <span styleName="value">
                            ${val.origin_price}
                            </span>
                            <span styleName = "price-qi-big">
                              起
                              </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  ))
                :''
                }
                </div>
                  {/* {this.renderContent('Life')} */}
                </TabBar.Item>
                <TabBar.Item
                  title='欧洲'
                  key="europe"
                  icon={<div style={{
                    width: '0px',
                    height: '0px',
                    fontSize:'14px'
                  }}
                  />
                  }
                  selectedIcon={<div style={{
                    width: '22px',
                    height: '22px',
                    fontSize:'14px'
                  }}
                  />
                  }
                  selected={this.state.selectedTab === 'europe'}
                  onPress={() => {
                    this.setState({
                      selectedTab: 'europe',
                    });
                  }}
                  data-seed="logId"
                >
                <div styleName="home-product-list"
                style = {{width:'100%', style:'flex', flexDirection:'row'}}
                > 
                {this.props.gethot[1]?
                this.props.gethot[1].products_info[2].map(val => (
                  <div
                 key="val.product_id"
                  styleName = "discount-tag"
                  style = {{width:'366px', height:'361px'}}
                  >
                    <img
                    alt=""
                    src={val.image}
                    style={{ width: '100%', height:'240px', verticalAlign: 'top',borderRadius:'5px' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                    />
                    <div styleName ="img-tip-mask">
                        <div styleName="tart-city">
                        {val.departure_desc}
                        </div>
                        <div styleName="vbinding">
                        <span styleName="vhide-binding">{val.order_count}人出游</span>
                        </div>
                    </div>
                    <div styleName = "product-info">
                      <h4 styleName="ng-binding">
                      {val.name}
                      </h4>
                      <div styleName="price-wrap">
                        <div styleName="list-tag">
                            <i styleName = "confirm">
                            </i>
                            <li styleName ="editor-diy">
                            买二送一
                            </li>
                        </div>
                        <div styleName = "price">
                            <span styleName="value">
                            ${val.origin_price}
                            </span>
                            <span styleName = "price-qi-big">
                              起
                              </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  ))
                :''
                }
                </div>
                  {/* {this.renderContent('Life')} */}
                </TabBar.Item>
                <TabBar.Item
                  title='亚非'
                  key="america"
                  icon={<div style={{
                    width: '0px',
                    height: '0px',
                    fontSize:'14px'
                  }}
                  />
                  }
                  selectedIcon={<div style={{
                    width: '0px',
                    height: '0px',
                    fontSize:'14px'
                  }}
                  />
                  }
                  selected={this.state.selectedTab === 'laamerica'}
                  onPress={() => {
                    this.setState({
                      selectedTab: 'laamerica',
                    });
                  }}
                  data-seed="logId"
                >
                <div styleName="home-product-list"
                style = {{width:'100%', style:'flex', flexDirection:'row'}}
                > 
                {this.props.gethot[1]?
                this.props.gethot[1].products_info[3].map(val => (
                  <div
                 key="val.product_id"
                  styleName = "discount-tag"
                  style = {{width:'366px', height:'361px'}}
                  >
                    <img
                    alt=""
                    src={val.image}
                    style={{ width: '100%', height:'240px', verticalAlign: 'top',borderRadius:'5px' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                    />
                    <div styleName ="img-tip-mask">
                        <div styleName="tart-city">
                        {val.departure_desc}
                        </div>
                        <div styleName="vbinding">
                        <span styleName="vhide-binding">{val.order_count}人出游</span>
                        </div>
                    </div>
                    <div styleName = "product-info">
                      <h4 styleName="ng-binding">
                      {val.name}
                      </h4>
                      <div styleName="price-wrap">
                        <div styleName="list-tag">
                            <i styleName = "confirm">
                            </i>
                            <li styleName ="editor-diy">
                            买二送一
                            </li>
                        </div>
                        <div styleName = "price">
                            <span styleName="value">
                            ${val.origin_price}
                            </span>
                            <span styleName = "price-qi-big">
                              起
                              </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  ))
                :''
                }
                </div>
                  {/* {this.renderContent('Life')} */}
                </TabBar.Item>

               </TabBar>
              </div>
            {/* {---------------------------------------------------------------精品小团} */}
          <div styleName = "p-nav-item"> 
            <h3>精品小团</h3>
              <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                hidden={this.state.hidden}
                tabBarPosition="top"
              >
                  <TabBar.Item
                  title='美国'
                  key="laamerica"
                  icon={<div style={{
                    width: '0px',
                    height: '0px',
                    fontSize:'14px'
                  }}
                  />
                  }
                  selectedIcon={<div style={{
                    width: '22px',
                    height: '22px',
                    fontSize:'14px'
                  }}
                  />
                  }
                  selected={this.state.selectedTab === 'america'}
                  onPress={() => {
                    this.setState({
                      selectedTab: 'america',
                    });
                  }}
                  data-seed="logId"
                >
               
                <div styleName="home-product-list"
                style = {{width:'100%', style:'flex', flexDirection:'row'}}
                > 
                
                {this.props.gethot[2]?
                this.props.gethot[2].products_info[0].map(val => (
                  <div
                 key="val.product_id"
                  styleName = "discount-tag"
                  style = {{width:'366px', height:'361px'}}
                  >
                    <img
                    alt=""
                    src = {val.image}
                    // src={`//toursforfun.tff.bz${val.image}`}
                    style={{ width: '100%', height:'240px', verticalAlign: 'top',borderRadius:'5px' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                    />
                    <div styleName ="img-tip-mask">
                        <div styleName="tart-city">
                        {val.departure_desc}
                        </div>
                        <div styleName="vbinding">
                        <span styleName="vhide-binding">{val.order_count}人出游</span>
                        </div>
                    </div>
                    <div styleName = "product-info">
                      <h4 styleName="ng-binding">
                      {val.name}
                      </h4>
                      <div styleName="price-wrap">
                        <div styleName="list-tag">
                            <i styleName = "confirm">
                            </i>
                            <li styleName ="editor-diy">
                            买二送一
                            </li>
                        </div>
                        <div styleName = "price">
                            <span styleName="value">
                            ${val.origin_price}
                            </span>
                            <span styleName = "price-qi-big">
                              起
                              </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  ))
                :''
                }
                </div>
                  {/* {this.renderContent('Life')} */}
                </TabBar.Item>

                <TabBar.Item
                  title='加拿大'
                  key="cannada"
                  icon={<div style={{
                    width: '0px',
                    height: '0px',
                    fontSize:'14px'
                  }}
                  />
                  }
                  selectedIcon={<div style={{
                    width: '22px',
                    height: '22px',
                    fontSize:'14px'
                  }}
                  />
                  }
                  selected={this.state.selectedTab === 'cannada'}
                  onPress={() => {
                    this.setState({
                      selectedTab: 'cannada',
                    });
                  }}
                  data-seed="logId"
                >
                 <div styleName="home-product-list"
                style = {{width:'100%', style:'flex', flexDirection:'row'}}
                > 
                {this.props.gethot[2]?
                this.props.gethot[2].products_info[1].map(val => (
                  <div
                 key="val.product_id"
                  styleName = "discount-tag"
                  style = {{width:'366px', height:'361px'}}
                  >
                    <img
                    alt=""
                    src={val.image}
                    style={{ width: '100%', height:'240px', verticalAlign: 'top',borderRadius:'5px' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                    />
                    <div styleName ="img-tip-mask">
                        <div styleName="tart-city">
                        {val.departure_desc}
                        </div>
                        <div styleName="vbinding">
                        <span styleName="vhide-binding">{val.order_count}人出游</span>
                        </div>
                    </div>
                    <div styleName = "product-info">
                      <h4 styleName="ng-binding">
                      {val.name}
                      </h4>
                      <div styleName="price-wrap">
                        <div styleName="list-tag">
                            <i styleName = "confirm">
                            </i>
                            <li styleName ="editor-diy">
                            买二送一
                            </li>
                        </div>
                        <div styleName = "price">
                            <span styleName="value">
                            ${val.origin_price}
                            </span>
                            <span styleName = "price-qi-big">
                              起
                              </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  ))
                :''
                }
                </div>
                  {/* {this.renderContent('Life')} */}
                </TabBar.Item>
                <TabBar.Item
                  title='欧洲'
                  key="europe"
                  icon={<div style={{
                    width: '0px',
                    height: '0px',
                    fontSize:'14px'
                  }}
                  />
                  }
                  selectedIcon={<div style={{
                    width: '22px',
                    height: '22px',
                    fontSize:'14px'
                  }}
                  />
                  }
                  selected={this.state.selectedTab === 'europe'}
                  onPress={() => {
                    this.setState({
                      selectedTab: 'europe',
                    });
                  }}
                  data-seed="logId"
                >
                <div styleName="home-product-list"
                style = {{width:'100%', style:'flex', flexDirection:'row'}}
                > 
                {this.props.gethot[2]?
                this.props.gethot[2].products_info[2].map(val => (
                  <div
                 key="val.product_id"
                  styleName = "discount-tag"
                  style = {{width:'366px', height:'361px'}}
                  >
                    <img
                    alt=""
                    src={val.image}
                    style={{ width: '100%', height:'240px', verticalAlign: 'top',borderRadius:'5px' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                    />
                    <div styleName ="img-tip-mask">
                        <div styleName="tart-city">
                        {val.departure_desc}
                        </div>
                        <div styleName="vbinding">
                        <span styleName="vhide-binding">{val.order_count}人出游</span>
                        </div>
                    </div>
                    <div styleName = "product-info">
                      <h4 styleName="ng-binding">
                      {val.name}
                      </h4>
                      <div styleName="price-wrap">
                        <div styleName="list-tag">
                            <i styleName = "confirm">
                            </i>
                            <li styleName ="editor-diy">
                            买二送一
                            </li>
                        </div>
                        <div styleName = "price">
                            <span styleName="value">
                            ${val.origin_price}
                            </span>
                            <span styleName = "price-qi-big">
                              起
                              </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  ))
                :''
                }
                </div>
                  {/* {this.renderContent('Life')} */}
                </TabBar.Item>
                <TabBar.Item
                  title='亚非'
                  key="america"
                  icon={<div style={{
                    width: '0px',
                    height: '0px',
                    fontSize:'14px'
                  }}
                  />
                  }
                  selectedIcon={<div style={{
                    width: '0px',
                    height: '0px',
                    fontSize:'14px'
                  }}
                  />
                  }
                  selected={this.state.selectedTab === 'laamerica'}
                  onPress={() => {
                    this.setState({
                      selectedTab: 'laamerica',
                    });
                  }}
                  data-seed="logId"
                >
                <div styleName="home-product-list"
                style = {{width:'100%', style:'flex', flexDirection:'row'}}
                > 
                {this.props.gethot[2]?
                this.props.gethot[2].products_info[3].map(val => (
                  <div
                 key="val.product_id"
                  styleName = "discount-tag"
                  style = {{width:'366px', height:'361px'}}
                  >
                    <img
                    alt=""
                    src={val.image}
                    style={{ width: '100%', height:'240px', verticalAlign: 'top',borderRadius:'5px' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                    />
                    <div styleName ="img-tip-mask">
                        <div styleName="tart-city">
                        {val.departure_desc}
                        </div>
                        <div styleName="vbinding">
                        <span styleName="vhide-binding">{val.order_count}人出游</span>
                        </div>
                    </div>
                    <div styleName = "product-info">
                      <h4 styleName="ng-binding">
                      {val.name}
                      </h4>
                      <div styleName="price-wrap">
                        <div styleName="list-tag">
                            <i styleName = "confirm">
                            </i>
                            <li styleName ="editor-diy">
                            买二送一
                            </li>
                        </div>
                        <div styleName = "price">
                            <span styleName="value">
                            ${val.origin_price}
                            </span>
                            <span styleName = "price-qi-big">
                              起
                              </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  ))
                :''
                }
                </div>
                  {/* {this.renderContent('Life')} */}
                </TabBar.Item>

               </TabBar>
              </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    //这里的getData是方法，不是自定义的
    this.props.getData(getCategories());
    this.props.getData(getHot())
    console.log(this)
    window.addEventListener('scroll', this.orderScroll.bind(this));

  }
  orderScroll() {
    console.log('scroll');
}
}

export default connect(mapState, mapDispatch)(Wiki)