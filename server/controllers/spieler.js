import validator from 'is-my-json-valid';
import {
  dbGetSpieler,
  dbGetEinenSpieler,
  dbDeleteEinenSpieler,
  dbCreateSpieler,
  dbPatchSpieler,
} from '../models/spieler.js';

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
    trikotnummer: {
      required: true,
      type: 'number',
    },
  },
});

const getSpieler = async (req, res) => res.status(200).json(await dbGetSpieler());

const getEinenSpieler = async (req, res) => {
  const { spielerpassid } = req.params;
  const spieler = await dbGetEinenSpieler(spielerpassid);
  if (!spieler) return res.status(404).send('Spieler nicht gefunden');
  return res.status(200).json(spieler);
};

const deleteEinenSpieler = async (req, res) => {
  const { spielerpassid } = req.params;
  const spieler = await dbGetEinenSpieler(spielerpassid);
  if (!spieler) return res.status(404).send('Spieler nicht gefunden');
  await dbDeleteEinenSpieler(spielerpassid);
  const alleSpieler = await dbGetSpieler();
  return res.status(200).json(alleSpieler);
};

const createSpieler = async (req, res) => {
  if (!validate(req.body)) return res.status(400).json(validate.errors);
  const spieler = await dbCreateSpieler(req.body);
  return res.status(201).json(spieler);
};

const patchSpieler = async (req, res) => {
  const { spielerpassid } = req.params;
  let spieler = await dbGetSpieler(spielerpassid);
  if (!spieler) return res.status(404).send('Spieler nicht gefunden');
  spieler = await dbPatchSpieler(spielerpassid, req.body.trikotnummer);
  return res.status(200).json(spieler);
};

export { getSpieler, getEinenSpieler, deleteEinenSpieler, createSpieler, patchSpieler };
