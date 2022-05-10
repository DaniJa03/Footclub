import express from 'express';
import asyncHandler from 'express-async-handler';

import {
  getMitarbeiter,
  getEinenMitarbeiter,
  deleteEinenMitarbeiter,
  createMitarbeiter,
  patchMitarbeiter,
} from '../controllers/medizinPersonal.js';

const router = express.Router();

router.get('/', asyncHandler(getMitarbeiter));
router.get('/:mitarbeiterid', asyncHandler(getEinenMitarbeiter));
router.delete('/:mitarbeiterid', asyncHandler(deleteEinenMitarbeiter));
router.post('/', asyncHandler(createMitarbeiter));
router.patch('/:mitarbeiterid', asyncHandler(patchMitarbeiter));

export default router;
