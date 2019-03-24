import express from 'express';
import 'babel-polyfill';
import { matchRoutes } from 'react-router-config';
import Routes from './client/routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use(express.static('public'));
app.get('*', (req, res) => {
  const store = createStore();
  // matchRoutes will based on req.path and find the matching route(containing the component to render) from Routes
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  })
})

app.listen(3000, () => {
  console.log('listen on port: ', 3000);
})