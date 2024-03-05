import { db4 } from '../database/conexion';
import Comision from '../models/tablasPagos/comision';

export const ultimaComision = async () => {
  let q: string = ``;
  q = `SELECT TOP(1) * FROM Comision ORDER BY FechaHoraRegistro DESC;`;
  const [results, rows] = await db4.query(q);

  return {
    totalFilas: rows,
    registros: results[0]
  };
}

export const insertComision = async (nc:number) => {
  try {
    const existeCosto = await Comision.findOne({
      where: { CostoComision: nc }
    });
    console.log('existeCosto', existeCosto);
    if (existeCosto !== null) {
      console.log(nc, 'ya existe');
      return [];
    }
    const nuevaComision = await Comision.create({ CostoComision: nc });
    await nuevaComision.save();
    return [nuevaComision];
  } catch (error) {
    console.log(error);
    return [];
  }
}
