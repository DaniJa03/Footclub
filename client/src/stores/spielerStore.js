import { defineStore } from 'pinia';
import axios from 'axios';

export const useSpielerStore = defineStore('Storespieler', {
  state: () => ({
    spieler: [],
    trainer: [],
    medizinpersonal: [],
  }),
  actions: {
    getSpieler(daten) {
      this.spieler = daten;
    },
    getTrainer(daten) {
      this.trainer = daten;
    },
    getMedizinPersonal(daten) {
      this.medizinpersonal = daten;
    }
  },
});