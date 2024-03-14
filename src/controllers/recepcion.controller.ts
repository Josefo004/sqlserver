import { Request, Response } from 'express';
import { obtenerOrden, obtenerDetallesOrden, actualizarProductoTalla } from '../helpers/ecommerce/c_ordenes';
import { tDetalleOrden } from '../interfaces/pre_res.interface';

export const getRecepcion = async (req: Request, res: Response) => {
  const { codigoPago, nroDocumento, fechaPago } = req.query;

  const orden = await obtenerOrden(codigoPago);
  if (orden !== null) {
    const detalleOrden = await obtenerDetallesOrden(orden.IdOrden);
    // console.log(detalleOrden);

    detalleOrden.forEach(function (value:tDetalleOrden) {
      const aa = actualizarProductoTalla(value.IdProductoTalla, value.Cantidad);
      console.log(aa);
    });

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

  res.status(200).json({
    codigoPago,
    nroDocumento,
    fechaPago,
    orden
  });
}
