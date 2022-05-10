import { query, pool } from '../db/index.js';

const dbGetSpieler = async () => {
  const { rows } = await query('SELECT * FROM spieler');
  return rows;
};

const dbGetEinenSpieler = async (spielerpassid) => {
  const { rows } = await query('SELECT * FROM spieler WHERE spielerpassid = $1', [spielerpassid]);
  return rows[0];
};

const dbDeleteEinenSpieler = (spielerpassid) =>
  query('DELETE FROM spieler WHERE spielerpassid = $1', [spielerpassid]);

const dbCreateSpieler = async ({ vorname, nachname, trikotnummer }) => {
  const { rows } = await query(
    'INSERT INTO spieler(vorname, nachname, trikotnummer) VALUES($1, $2, $3) RETURNING *',
    [vorname, nachname, trikotnummer],
  );
  return rows[0];
};

const dbPatchSpieler = async (spielerpassid, trikotnummer) => {
  const { rows } = await query(
    'UPDATE spieler SET trikotnummer = $1 WHERE spielerpassid = $2 returning *',
    [trikotnummer, spielerpassid],
  );
  return rows[0];
};

export { dbGetSpieler, dbGetEinenSpieler, dbDeleteEinenSpieler, dbCreateSpieler, dbPatchSpieler };
