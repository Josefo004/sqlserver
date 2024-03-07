import Ordenes from '../../models/tablasEcommerce/ordenes';
import { tOrden } from '../../interfaces/pre_res.interface';

export const obtenerOrden = async (CodigoPago :string | any):Promise<tOrden | any> => {
  const orden = await Ordenes.findOne({
    where: { CodigoPago }
  });

  return orden;
}

// export const insertComision = async (nc:number) => {
//   try {
//     const nuevaComision = await Comision.create({ CostoComision: nc });
//     await nuevaComision.save();
//     return [nuevaComision];
//   } catch (error) {
//     console.log(error);
//     return [];
//   }
// }
