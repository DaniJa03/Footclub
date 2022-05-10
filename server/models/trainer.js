import { query, pool } from '../db/index.js';

const dbGetTrainer = async () => {
  const { rows } = await query('SELECT * FROM trainer');
  return rows;
};

const dbGetEinenTrainer = async (trainerid) => {
  const { rows } = await query('SELECT * FROM trainer WHERE trainerid = $1', [trainerid]);
  return rows[0];
};

const dbDeleteEinenTrainer = (trainerid) =>
  query('DELETE FROM trainer WHERE trainerid = $1', [trainerid]);

const dbCreateTrainer = async ({ vorname, nachname, trainerrolle }) => {
  const { rows } = await query(
    'INSERT INTO trainer(vorname, nachname, trainerrolle) VALUES($1, $2, $3) RETURNING *',
    [vorname, nachname, trainerrolle],
  );
  return rows[0];
};

const dbPatchTrainer = async (trainerid, trainerrolle) => {
  const { rows } = await query(
    'UPDATE trainer SET trainerrolle = $1 WHERE trainerid = $2 returning *',
    [trainerrolle, trainerid],
  );
  return rows[0];
};

export { dbGetTrainer, dbGetEinenTrainer, dbDeleteEinenTrainer, dbCreateTrainer, dbPatchTrainer };
