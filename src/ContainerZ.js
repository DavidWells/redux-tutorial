import ComponentZ from './ComponentZ'
import * as actionCreators from './actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

function mapStateToProps(state) {
  return {
    count: state.count, // will be this.props.count in connected component
    title: state.activeTitle
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const ContainerXYZ = connect(mapStateToProps, mapDispachToProps)(ComponentZ);

export default ContainerXYZ;