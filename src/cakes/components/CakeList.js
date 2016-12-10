import React from 'react';
import CakeItem from './CakeItem';

export default function CakeList({ cakes }) {
  return (
    <div className="row">
      {cakes.map(cake => (
        <div className="col col-xs-12 col-md-4 col-lg-3">
          <CakeItem cake={cake} />
        </div>))}
    </div>
  );
}
