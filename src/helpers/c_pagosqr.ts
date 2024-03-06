import PagosQR from '../models/tablasPagos/pagosqr';

export const pagoQr = async (codigoPago: string) => {
  const pagoQr = await PagosQR.findByPk(codigoPago);
  console.log('pagoQr', pagoQr);
  if (pagoQr === null) {
    return [];
  } else {
    return pagoQr;
  }
}
