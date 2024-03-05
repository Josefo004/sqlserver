import { db4 } from '../database/conexion';
// import { Admision, Comercio, Ddjj } from '../interfaces/pre_res.interface';

export const ultimaComision = async () => {
  let q: string = ``;
  q = `SELECT TOP(1) * FROM Comision ORDER BY FechaHoraRegistro DESC;`;
  const [results, rows] = await db4.query(q);

  return {
    filas: rows,
    registros: results
  };
}
