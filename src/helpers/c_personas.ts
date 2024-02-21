import { db1, db2, db3 } from '../database/conexion';
// import { TTPredio } from '../interfaces/pre_res.interface';
// import { procesarPredio } from './p_rows';

export const consultaAdmision = async (cc:string) => {
  let q: string = ``;
  q = `select * from personas where IdPersona='${cc}';`;
  const [results, rows] = await db1.query(q);

  return {
    total_filas: rows,
    personas: results
  };
}

export const consultaDDJJ = async (cc:string) => {
  let q: string = ``;
  q = `select * from persona where id_persona='${cc}';`;
  const [results, rows] = await db2.query(q);
  return {
    total_filas: rows,
    personas: results
  };
}

export const consultaEcommerce = async (cc:string) => {
  let q: string = ``;
  q = `select * from Usuarios where IdPersona='${cc}';`;
  const [results, rows] = await db3.query(q);
  return {
    total_filas: rows,
    personas: results
  };
}
