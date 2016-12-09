export function getCakes() {
  return fetch('/cake.json')
    .then((cakes) => cakes.json())
    .then((json) => json);
}
