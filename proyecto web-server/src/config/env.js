// require('dotenv').config();
// const {get} = require('env-var');
import env from 'dotenv';
import envvar from "env-var";
env.config();

export const envs = {
  PORT: envvar.get('PORT').required().asPortNumber(),
  PUBLIC_PATH: envvar.get('PUBLIC_PATH').required().asString(),
};

// module.exports = { envs };
