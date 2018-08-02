import React, { Component, Fragment } from 'react'
import { getDestinations } from '../actionCreator'
import '../style.scss'
import { connect } from 'react-redux'
import { SearchBar, WhiteSpace, WingBlank } from 'antd-mobile';
import { Tabs } from 'antd-mobile';
import Datalist from"../../../components/DataList"
const tabs = [
    { title: '热门' },
    { title: '美国西海岸' },
    { title: '美国东海岸' },
    { title: '欧洲' },
    { title: '加拿大' },
    { title: '澳大利亚' },
    { title: '新西兰' },
    { title: '亚非/拉美' },
    { title: '全球邮轮' },
    { title: '亲友小团' },
  ];
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


export class Destination extends Component {
    // constructor(props) {
    //   super(props)
    // }

render() {
    // console.log(this.props)
    return (
    <Fragment>
        <div>
        <WingBlank>
            <SearchBar placeholder="城市、景点、产品、关键字" maxLength={8} />
        </WingBlank>
            
        </div>
          <div style={{ height: '100%' }}>
          <WhiteSpace />
          <Tabs tabs={tabs}
            tabBarUnderlineStyle = "left"
            tabBarPosition="left"
            tabDirection="vertical"
          >
            <div style={{ display: 'flex', width:'100%',  justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
              <Datalist
              destinations = {this.props.destinations}
              from = "destinations"
              />
            </div>
            <div style={{ display: 'flex', width:'100%', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                <Datalist
                destinations = {this.props.destinations}
                from = "destinations"
                />
            </div>
            <div style={{ display: 'flex', width:'100%', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                <Datalist
                destinations = {this.props.destinations}
                from = "destinations"
                />
            </div>
            <div style={{ display: 'flex', width:'100%', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
            <Datalist
               destinations = {this.props.destinations}
               from = "destinations"
            />
            </div>
            <div style={{ display: 'flex', width:'100%', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
            <Datalist
               destinations = {this.props.destinations}
               from = "destinations"
            />
            </div>
            <div style={{ display: 'flex', width:'100%', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
            <Datalist
               destinations = {this.props.destinations}
               from = "destinations"
            />
            </div>
            <div style={{ display: 'flex', width:'100%', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
            <Datalist
               destinations = {this.props.destinations}
               from = "destinations"
            />
            </div>
            <div style={{ display: 'flex', width:'100%', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
            <Datalist
               destinations = {this.props.destinations}
               from = "destinations"
            />
            </div>
            <div style={{ display: 'flex', width:'100%', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
            <Datalist
               destinations = {this.props.destinations}
               from = "destinations"
            />
            </div>
            <div style={{ display: 'flex', width:'100%', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
            <Datalist
               destinations = {this.props.destinations}
               from = "destinations"
            />
            </div>
          </Tabs>
          <WhiteSpace />
        </div>
    </Fragment>
    )
    }
    componentDidMount() {
        // console.log(this.props.destinations)
        this.props.getData(getDestinations())
        window.addEventListener('scroll', this.orderScroll.bind(this));   
      }
      orderScroll() {
        console.log('scroll');
    }

    
}
// export default Destination
export default connect(mapState, mapDispatch)(Destination)