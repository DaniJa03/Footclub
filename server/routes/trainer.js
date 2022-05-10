import express from 'express';
import asyncHandler from 'express-async-handler';

import {
  getTrainer,
  getEinenTrainer,
  deleteEinenTrainer,
  createTrainer,
  patchTrainer,
} from '../controllers/trainer.js';

const router = express.Router();

router.get('/', asyncHandler(getTrainer));
router.get('/:trainerid', asyncHandler(getEinenTrainer));
router.delete('/:trainerid', asyncHandler(deleteEinenTrainer));
router.post('/', asyncHandler(createTrainer));
router.patch('/:trainerid', asyncHandler(patchTrainer));

export default router;
