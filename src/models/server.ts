
import express, { Application } from 'express';
import cors, { CorsOptions } from 'cors';

import rutasPersona from '../routes/personas.route';
import { db1, db2, db3 } from '../database/conexion';

class Server {
  private app : Application;
  private port : string;
  private apiMsql = {
    personas: '/api/v0/personas'
  };

  constructor () {
    this.app = express();
    this.port = process.env.PORT || '3000';

    // base de datos
    this.dbConnection();

    // middlewares
    this.middlewares();

    // definiendo rutas
    this.routes();
  }

  // middlewares
  middlewares () {
    // coors
    const origenesAutorizados = ['http://jose.imd.bo:3000', 'http://localhost:3000'];
    const opciones: CorsOptions = {
      origin: origenesAutorizados
    };
    this.app.use(cors(opciones));

    // lectura de Body espra datos JSON
    this.app.use(express.json());

    // carpeta publica
    this.app.use(express.static('public'));
  }

  // base de datos conexion
  async dbConnection () {
    try {
      await db1.authenticate();
      console.log('Data base online Admision');
      await db2.authenticate();
      console.log('Data base online DeclaracionJuradaRRHH');
      await db3.authenticate();
      console.log('Data base online Ecommerce');
    } catch (error) {
      console.log(error);
      process.exit();
    }
  }

  // rutas
  routes () {
    this.app.use(this.apiMsql.personas, rutasPersona);
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(`Servidor Corriendo en el puerto ${this.port}!!`);
    });
  }
}

export default Server;
