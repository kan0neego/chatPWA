const importAll = response => {
  const images = {};
  response.keys()
    .forEach((item, index) => { 
      const regExp = item.replace(/\.\/|\.(png|jpe?g|webp)/, '')
      console.log(regExp);
      images[regExp] = response(item); 
    });
 return images;
}
const images = importAll(require.context('/', false, /\.(png|jpe?g|webp)$/));

export default images;
