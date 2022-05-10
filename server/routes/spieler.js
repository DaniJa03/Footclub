import express from 'express';
import asyncHandler from 'express-async-handler';

import {
  getSpieler,
  getEinenSpieler,
  deleteEinenSpieler,
  createSpieler,
  patchSpieler,
} from '../controllers/spieler.js';

const router = express.Router();

router.get('/', asyncHandler(getSpieler));
router.get('/:spielerpassid', asyncHandler(getEinenSpieler));
router.delete('/:spielerpassid', asyncHandler(deleteEinenSpieler));
router.post('/', asyncHandler(createSpieler));
router.patch('/:spielerpassid', asyncHandler(patchSpieler));

export default router;
