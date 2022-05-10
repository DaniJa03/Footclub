import { query, pool } from '../db/index.js';

const dbGetMitarbeiter = async () => {
  const { rows } = await query('SELECT * FROM medizinpersonal');
  return rows;
};

const dbGetEinenMitarbeiter = async (mitarbeiterid) => {
  const { rows } = await query('SELECT * FROM medizinpersonal WHERE mitarbeiterid = $1', [
    mitarbeiterid,
  ]);
  return rows[0];
};

const dbDeleteEinenMitarbeiter = async (mitarbeiterid) =>
  query('DELETE FROM medizinpersonal WHERE mitarbeiterid = $1', [mitarbeiterid]);

const dbCreateMitarbeiter = async ({ nachname, abteilung }) => {
  const { rows } = await query(
    'INSERT INTO medizinpersonal(nachname, abteilung) VALUES($1, $2) RETURNING *',
    [nachname, abteilung],
  );
  return rows[0];
};

const dbPatchMitarbeiter = async (mitarbeiterid, abteilung) => {
  const { rows } = await query(
    'UPDATE medizinpersonal SET abteilung = $1 WHERE mitarbeiterid = $2 returning *',
    [abteilung, mitarbeiterid],
  );
  return rows[0];
};

export {
  dbGetMitarbeiter,
  dbGetEinenMitarbeiter,
  dbDeleteEinenMitarbeiter,
  dbCreateMitarbeiter,
  dbPatchMitarbeiter,
};
