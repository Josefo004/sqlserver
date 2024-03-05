import { Router } from 'express';

import {
  getUltimaComision
} from '../controllers/comision.controller';
// import { validarCampos } from '../middlewares/validar-campos';

const router = Router();

router.get('/', getUltimaComision);

export default router;
