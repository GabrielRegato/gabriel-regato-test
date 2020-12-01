import { connect } from 'react-redux';

import View from '../view';

import {
  GET_TOPICS_INIT,
} from '../../../../redux/actions';

const mapStateToProps = state => {
return {
  topics: state.topics.topics,
  loading: state.topics.loading,
};
}

const mapDispatchToProps = dispatch => ({
  getTopics: () => dispatch({ type: GET_TOPICS_INIT }),
})

export default connect(mapStateToProps, mapDispatchToProps)(View);
