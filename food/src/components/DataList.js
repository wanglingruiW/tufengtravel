import React from 'react'

import './style.scss'

const DataList = ({destinations, from}) => {
  // constructor(props) {
  //   super(props)
  // }  
  // render() {
    // const gen = {
    //   0:destinations[0],
    //   1:
    // }
  console.log(from , destinations[0])
  return (
    <div>
    <div>
      {destinations[0]? destinations[0].genre.map((value, index) => (
          isshow(index) ? (
          <div styleName = "firstcon" key = {value.id}>
          <div styleName = "dest-hot">
            <div styleName="dest-hot-title">
              {value.title}
            </div>
            <div styleName="dest-cycle">
            {destinations[0]? destinations[0].genre[0].data.map((val, index) => (
            <div key = {val.id}styleName = "dest-hot-items">
                <div styleName = "dest-hot-item" >
                  <div styleName="dest-hot-desc">
                    <div styleName = "dest-first-child">{val.description}</div>
                    <div styleName = "dest-second-child">{val.title}</div>
                  </div>
                  <img 
                  alt=""
                  src={val.image}
                  style={{ width: '130px', height:'66px', verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    // this.setState({ imgHeight: 'auto' });
                  }}/>
                </div>
            </div>
            
            )):""}
            </div>
          </div>
      </div>) : ""
      
      )):""}
    </div>
    <div  styleName = "detaillist">
      <div styleName = "dest-recommend">
        <div styleName ="dest-recommend-title">
        途风精选
        </div>
        {destinations[0]? destinations[0].genre[5].data.map((value, index) => (
        <div key = {value.id} styleName = "dest-recommend-group">
          <div styleName = "dest-recommend-item">
            <div styleName = "dest-recommend-img">
              <img
              alt=""
              src={value.image}
              style={{ width: '100%', height:'100%', verticalAlign: 'top' }}
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event('resize'));
              }}
              />
            </div>
            <p styleName = "dest-recommend-detail">{value.name}</p>
            <div styleName = "dest-recommend-sp">
              <span styleName="dest-recommend-sold">
                已售{value.order_count}
              </span>
              <span styleName="dest-recommend-price">
                <span styleName="dest-recommend-num "
                style = {{color:"#FF5400"}}>${value.origin_price}</span>
                起
              </span>
            </div>
          </div>
        </div>
        )):""}
      </div>
    </div>
    </div>
    )
  }

  function isshow(index){
    if(index == 0 || index == 2 || index == 3){
      return true
    }else{
      return false
    }
  }
export default DataList
