import ComponentFour from './_ComponentFour'
import * as actionCreators from './actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

function mapStateToProps(state) {
  return {
    count: state.count, // will be this.props.count in connected component
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const ContainerFour = connect(mapStateToProps, mapDispachToProps)(ComponentFour);

export default ContainerFour;