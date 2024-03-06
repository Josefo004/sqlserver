import { Request, Response } from 'express';
import { pagoQr } from '../helpers/c_pagosqr';

export const getPagoQrq = async (req:Request, res:Response) => {
  const { codigoPago } = req.params;
  const pago = await pagoQr(codigoPago);
  console.log(pago);

  res.status(200).json({
    pago
  });
}
