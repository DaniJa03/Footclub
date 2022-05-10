import validator from 'is-my-json-valid';
import {
  dbGetTrainer,
  dbGetEinenTrainer,
  dbDeleteEinenTrainer,
  dbCreateTrainer,
  dbPatchTrainer,
} from '../models/trainer.js';

const validate = validator({
  required: true,
  type: 'object',
  properties: {
    vorname: {
      required: true,
      type: 'string',
    },
    nachname: {
      required: true,
      type: 'string',
    },
    trainerrolle: {
      required: true,
      type: 'string',
    },
  },
});

const getTrainer = async (req, res) => res.status(200).json(await dbGetTrainer());

const getEinenTrainer = async (req, res) => {
  const { trainerid } = req.params;
  const trainer = await dbGetEinenTrainer(trainerid);
  if (!trainer) return res.status(404).send('Trainer nicht gefunden');
  return res.status(200).json(trainer);
};

const deleteEinenTrainer = async (req, res) => {
  const { trainerid } = req.params;
  const trainer = await dbGetEinenTrainer(trainerid);
  if (!trainer) return res.status(404).send('Trainer nicht gefunden');
  await dbDeleteEinenTrainer(trainerid);
  const alleTrainer = await dbGetTrainer();
  return res.status(200).json(alleTrainer);
};

const createTrainer = async (req, res) => {
  if (!validate(req.body)) return res.status(400).json(validate.errors);
  const trainer = await dbCreateTrainer(req.body);
  return res.status(201).json(trainer);
};

const patchTrainer = async (req, res) => {
  const { trainerid } = req.params;
  let trainer = await dbGetTrainer(trainerid);
  if (!trainer) return res.status(404).send('Trainer nicht gefunden');
  trainer = await dbPatchTrainer(trainerid, req.body.trainerrolle);
  return res.status(200).json(trainer);
};

export { getTrainer, getEinenTrainer, deleteEinenTrainer, createTrainer, patchTrainer };
