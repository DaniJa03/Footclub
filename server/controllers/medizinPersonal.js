import validator from 'is-my-json-valid';

import {
  dbGetMitarbeiter,
  dbGetEinenMitarbeiter,
  dbDeleteEinenMitarbeiter,
  dbCreateMitarbeiter,
  dbPatchMitarbeiter,
} from '../models/medizinPersonal.js';

const validate = validator({
  required: true,
  type: 'object',
  properties: {
    nachname: {
      required: true,
      type: 'string',
    },
    abteilung: {
      required: true,
      type: 'string',
    },
  },
});

const getMitarbeiter = async (req, res) => res.status(200).json(await dbGetMitarbeiter());

const getEinenMitarbeiter = async (req, res) => {
  const { mitarbeiterid } = req.params;
  const mitarbeiter = await dbGetEinenMitarbeiter(mitarbeiterid);
  if (!mitarbeiter) return res.status(404).send('Mitarbeiter nicht gefunden');
  return res.status(200).json(mitarbeiter);
};

const deleteEinenMitarbeiter = async (req, res) => {
  const { mitarbeiterid } = req.params;
  const mitarbeiter = await dbGetEinenMitarbeiter(mitarbeiterid);
  if (!mitarbeiter) return res.status(404).send('Mitarbeiter nicht gefunden');
  await dbDeleteEinenMitarbeiter(mitarbeiterid);
  const alleMitarbeiter = await dbGetMitarbeiter();
  return res.status(200).json(alleMitarbeiter);
};

const createMitarbeiter = async (req, res) => {
  if (!validate(req.body)) return res.status(400).json(validate.errors);
  const mitarbeiter = await dbCreateMitarbeiter(req.body);
  return res.status(201).json(mitarbeiter);
};

const patchMitarbeiter = async (req, res) => {
  const { mitarbeiterid } = req.params;
  let mitarbeiter = await dbGetMitarbeiter(mitarbeiterid);
  if (!mitarbeiter) return res.status(404).send('Mitarbeiter nicht gefunden');
  mitarbeiter = await dbPatchMitarbeiter(mitarbeiterid, req.body.abteilung);
  return res.status(200).json(mitarbeiter);
};

export {
  getMitarbeiter,
  getEinenMitarbeiter,
  deleteEinenMitarbeiter,
  createMitarbeiter,
  patchMitarbeiter,
};
