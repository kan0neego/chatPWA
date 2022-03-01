const importAll = response => {
  const images = {};
  response.keys()
    .forEach(item => { 
      const regEx = item.replace(/\.\/|\.(png|jpe?g|webp)/, '')
      images[regEx] = response(item); 
    });
 return images;
}
const images = importAll(require.context('/', false, /\.(png|jpe?g|webp|svg)$/));
const svg = importAll(require.context('../svg', false, /\.(svg)$/));

export { images, svg };
