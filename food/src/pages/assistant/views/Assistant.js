import React, { Component, Fragment } from 'react'
import '../style.scss'
import { connect } from 'react-redux'

import Rabbit from "../../../assets/icons/rabbit.png"

const mapState = (state) => { 
    return {
      destinations: state.destination.destinations,
    }
  }
  
  const mapDispatch = (dispatch) => {
    return {
      getData: (action) => {
        dispatch(action)
      },
    }
  }

class Assistant extends Component {
    constructor(props) {
      super(props)
    
    this.state = {
      goodList: []
    }
  }


render() {
    console.log(this.state)
    return (
    <Fragment>
        <div>
          <div styleName="header-item">
          行程助手
          </div>
          <div styleName = "scroll">
            <div styleName ="mytrip-other-content">
              <div styleName = "img-trip">
                <img src={Rabbit}/>
                <div styleName="btn-login">
                  请登录后查看
                </div>
              </div>
              <div styleName="line">
                  <span styleName = "centertitle">品质精选</span>
              </div>
              <div>
              {this.state.goodList? this.state.goodList.map((value, index) => (
               <div  key = "value.product_id" styleName = "tff-product-list">
                  <div styleName = "product-item">
                    <img 
                     src = {value.image}
                     style={{  verticalAlign: 'top' }}
                      onLoad={() => {
                        // fire window resize event to change height
                        window.dispatchEvent(new Event('resize'));
                      }}
                    />
                  </div>
                  <div styleName = "product-info">
                    <h4 styleName="title">
                    {value.name}
                    </h4>
                    <div styleName = "price-wrap">
                        <div styleName = "tag-and-count-big">
                          <div styleName="count">
                            已售 
                            <span styleName="value ">{value.order_count}</span>
                          </div>
                        </div>
                        <span styleName="price"  >
                          <span styleName="value">{value.origin_price}
                            <span styleName="price-qi-big">起
                            </span>
                          </span>
                        </span>
                    </div>
                  </div>
               </div>
               )):""}
             </div>
            </div>
          </div>
        </div>
    </Fragment>
    )
}
componentDidMount() {
  // console.log(this.props.id)
  fetch('/api/banner')
    .then(response => response.json())
    .then(result => {
      this.setState((prevState) => {
        return {
          goodList: [...prevState.goodList, ...result.data.recommend_products[0].products_info]
        }
      })
      console.log(this)
    })
}


    
}
export default Assistant
