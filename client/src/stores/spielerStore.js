import { defineStore } from 'pinia';
import axios from 'axios';

export const useSpielerStore = defineStore('Storespieler', {
  state: () => ({
    spieler: [],
  }),
  actions: {
    async getSpieler() {
      try {
        const { data } = await axios.get('http://localhost:3000/spieler');
        this.spieler = data;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
});