<template>
  <div>
    <TrainerModify @addTrainer="addTrainer" :sub="sub" @updateTr="updateTr"></TrainerModify>
    <TrainerTable :subs="subs" @deleteTrainer="deleteTrainer" @copy="sub = $event"></TrainerTable>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import TrainerModify from '../components/TrainerModify.vue';
import TrainerTable from '../components/TrainerTable.vue';

const subs = ref({});
const sub = ref({});

const getTrainer = async () => {
  const { data } = await axios.get('http://localhost:3000/trainer');
  subs.value = data;
};
onMounted(() => getTrainer());

const addTrainer = async (payload) => {
  await axios.post('http://localhost:3000/trainer', payload);
  getTrainer();
};

const updateTr = async (payload) => {
  const updateTrainer = {
    trainerid: payload.trainerid,
    nachname: payload.nachname,
    vorname: payload.vorname,
    trainerrolle: payload.trainerrolle,
  };
  await axios.patch(`http://localhost:3000/trainer/${payload.trainerid}`, updateTrainer);
  getTrainer();
};

const deleteTrainer = async (payload) => {
  await axios.delete(`http://localhost:3000/trainer/${payload.trainerid}`);
  getTrainer();
};
</script>
