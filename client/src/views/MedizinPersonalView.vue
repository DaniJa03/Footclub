<template>
  <div>
    <MedizinpersonalModify @add="addMitarbeiter" :sub="sub" @update="updateMit"></MedizinpersonalModify>
    <MedizinpersonalTable :subs="subs" @deleteMitarbeiter="deleteMitarbeiter" @copy="sub = $event"></MedizinpersonalTable>
  </div>
</template>

<script setup>
import MedizinpersonalModify from '../components/MedizinpersonalModify.vue';
import MedizinpersonalTable from '../components/MedizinpersonalTable.vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';

const subs = ref({});
const sub = ref({});

const getMitarbeiter = async () => {
    const { data } = await axios.get('http://localhost:3000/mitarbeiter');
    subs.value = data;
};
onMounted(() => getMitarbeiter());

const addMitarbeiter = async (payload) => {
    await axios.post(`http://localhost:3000/mitarbeitaer`, payload);
    getMitarbeiter();
};

const updateMit = async (payload) => {
    const updateMitarbeiter = {
        mitarbeiterid: payload.mitarbeiterid,
        nachname: payload.nachname,
        abteilung: payload.abteilung
    };
    await axios.patch(`http://localhost:3000/mitarbeiter/${payload.spielerpassid}`, updateMitarbeiter);
    getMitarbeiter();
};

const deleteMitarbeiter = async (payload) => {
    await axios.delete(`http://localhost:3000/mitarbeiter/${payload.mitarbeiterid}`);
    getSpieler();
}
</script>
