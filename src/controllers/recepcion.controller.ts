import { Request, Response } from 'express';
import { obtenerOrden } from '../helpers/ecommerce/c_ordenes';

export const getRecepcion = async (req:Request, res:Response) => {
  const { codigoPago, nroDocumento, fechaPago } = req.query;

  const orden = await obtenerOrden(codigoPago);
  if (orden !== null) {
    orden.CodigoEstado = 'A';
    orden.CodigoUsuarioActualizacion = 'jmv';
    orden.FechaActualizacion = fechaPago;
    orden.save();
  }

  // if (orden !== null) {
  //   console.log(orden);
  //   orden.CodigoEstado = 'A';
  //   return [];
  // }

  res.status(200).json({
    codigoPago,
    nroDocumento,
    fechaPago,
    orden
  });
}
