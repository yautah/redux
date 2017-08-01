import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/counter.jsx';
import * as CounterActions from '../actions/counter.js';



function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}


export default connect(mapStateToProps, CounterActions)(Counter);
