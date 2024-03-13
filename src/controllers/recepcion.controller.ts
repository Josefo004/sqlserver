import { Request, Response } from 'express';
import { obtenerOrden } from '../helpers/ecommerce/c_ordenes';

export const getRecepcion = async (req:Request, res:Response) => {
  const { codigoPago, nroDocumento, fechaPago } = req.query;

  const orden = await obtenerOrden(codigoPago);
  if (orden !== null) {
    orden.CodigoEstado = 'A';
    orden.CodigoUsuarioActualizacion = 'jmv';
    orden.FechaActualizacion = fechaPago;
    const fechaActual = new Date();
    const fechaFormateada = fechaActual.toLocaleString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
    orden.Observacion = orden.Observacion + fechaFormateada + ' Orden Pagada con Codigo QR por : usw ;';
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
