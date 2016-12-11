import React, { PropTypes } from 'react';
import CakeItem from './CakeItem';

export default function CakeList({ cakes, onSaveCakeClick }) {
  return (
    <div className="row">
      {cakes.map(cake => (
        <div key={cake.id} className="col col-xs-12 col-sm-6 col-md-4 col-lg-3">
          <CakeItem cake={cake} onSaveCakeClick={onSaveCakeClick} />
        </div>))}
    </div>
  );
}

CakeList.propTypes = {
  cakes: PropTypes.array
}
