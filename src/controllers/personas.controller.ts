import { Request, Response } from 'express';
import { consultaAdmision, consultaDDJJ, consultaEcommerce } from '../helpers/c_personas';
// import { latLonAUtm } from "../helpers/p_cadena";

export const getPersonas = async (req:Request, res:Response) => {
  const { idPersona } = req.params;
  const admision = await consultaAdmision(idPersona);
  const ddjj = await consultaDDJJ(idPersona);
  const comercio = await consultaEcommerce(idPersona);

  let IdPersona: string = '';
  let Email: string = '';
  let Celular: string = '';
  let NombreCompleto: string = '';

  if (Number(comercio.total_filas) > 0) {
    IdPersona = comercio.personas[0].IdPersona;
    Email = comercio.personas[0].Email;
    Celular = '';
    NombreCompleto = comercio.personas[0].NombreCompleto.toUpperCase();
  } else {
    if (Number(ddjj.total_filas) > 0) {
      IdPersona = ddjj.personas[0].id_persona;
      Email = ddjj.personas[0].email;
      Celular = ddjj.personas[0].celular.toString();
      NombreCompleto = ddjj.personas[0].nombres.toUpperCase()+' '+ddjj.personas[0].apellido_paterno.toUpperCase()+' '+ddjj.personas[0].apellido_materno.toUpperCase();
    } else {
      if (Number(admision.total_filas) > 0) {
        IdPersona = admision.personas[0].IdPersona;
        Email = admision.personas[0].Email;
        Celular = admision.personas[0].Celular;
        NombreCompleto = admision.personas[0].Nombres.toUpperCase()+' '+admision.personas[0].Paterno.toUpperCase()+' '+admision.personas[0].Materno.toUpperCase();
      }
    }
  }

  res.status(200).json({
    IdPersona,
    Email,
    Celular,
    NombreCompleto
  });
}
