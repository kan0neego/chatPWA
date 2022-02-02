const importAll = response => {
  const images = {};
  response.keys()
    .forEach(item => { 
      const regEx = item.replace(/\.\/|\.(png|jpe?g|webp)/, '')
      images[regEx] = response(item); 
    });
 return images;
}
const images = importAll(require.context('/', false, /\.(png|jpe?g|webp)$/));

export default images;
