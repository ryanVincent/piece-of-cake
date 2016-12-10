import CakeList from './components/CakeList';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CakeActions from './actions';
import React from 'react';

export function CakeContainer ({ cakes }){
  return (
    <div>
      <CakeList cakes={cakes} />
    </div>
  )
}

function mapStateToProps(state) {
    return {...state};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...CakeActions,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
