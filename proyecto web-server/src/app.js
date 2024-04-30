// const { startServer } = require('./server/server.js');
// const { envs } = require('./config/env.js');
import { startServer } from './server/server.js';
import { envs } from './config/env.js';

const main = () => {
  console.log('Hello World');
  startServer({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH,
  });
};

//funcion agnostica autoconvocada
//Agnostica por que no tiene nombre y auto.. por que se llama a si misma en los parentesis
(async () => {
  main();
})();
