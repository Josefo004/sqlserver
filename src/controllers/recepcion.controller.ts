import { Request, Response } from 'express';
// import { consultaAdmision, consultaDDJJ, consultaEcommerce } from '../helpers/c_personas';
// import { latLonAUtm } from "../helpers/p_cadena";

export const getRecepcion = (req:Request, res:Response) => {
  const { codigoPago, nroDocumento, fechaPago } = req.query;

  res.status(200).json({
    codigoPago,
    nroDocumento,
    fechaPago
  });
}
