import { Request, Response } from 'express';
import { ultimaComision } from '../helpers/c_comision';

export const getUltimaComision = async (req:Request, res:Response) => {
  const comision = await ultimaComision();
  // console.log(comision);

  res.status(200).json({
    comision: comision.registros
  });
}
