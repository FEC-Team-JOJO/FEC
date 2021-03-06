const express = require('express');
const path = require('path');
const expressStaticGzip = require('express-static-gzip');
const ReviewRouters = require('./routers/ReviewRouters');
const QARouters = require('./routers/QARouters');
const ProductRouters = require('./routers/ProductRouters');
const CartRouters = require('./routers/CartRouters');
const InteractionRouters = require('./routers/InteractionRouters');
const NewOutfitRouters = require('./routers/NewOutfitRouters');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(expressStaticGzip(`${__dirname}/../client/dist`));
app.use('/products', ProductRouters);
app.use('/qa', QARouters);
app.use('/reviews', ReviewRouters);
app.use('/cart', CartRouters);
app.use('/interactions', InteractionRouters);
app.use('/newoutfit', NewOutfitRouters);
app.get('/robots.txt', (req, res) => {
  res.sendFile(path.join(__dirname, 'robots.txt'));
});
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});
app.get('*.js', (req, res, next) => {
  if (req.header('Accept-Encoding').includes('br')) {
    req.url += '.br';
    res.set('Content-Encoding', 'br');
    res.set('Content-Type', 'application/javascript; charset=UTF-8');
  }
  next();
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
