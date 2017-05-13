import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TicTacToeActions from '../actions/tictactoe';
import TicTacToe from '../components/TicTacToe';

function mapStateToProps(state) {
    return {
        history: state.history
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(TicTacToeActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TicTacToe);