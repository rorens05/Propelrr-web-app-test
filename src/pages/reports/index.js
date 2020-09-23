import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Navigation } from '../../components/navigation'

export class Reports extends Component {
  render() {
    return (
      <div>
        <Navigation>
          Reports
        </Navigation>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Reports)
