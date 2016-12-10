import uuid from 'uuid';

export function getCakes() {
  return fetch('/cake.json')
    .then((cakes) => cakes.json())
    .then((json) => json.map(cake => cakeWithId(cake)));
}

// add id to make uniquely identifying cake simple
function cakeWithId(cake) {
  cake.id = uuid();
  return cake;
}
