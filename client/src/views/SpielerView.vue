<template>
    <div>
        <SpielerModify @add="add" :sub="sub" @update="updateMe"></SpielerModify>
        <SpielerTable :subs="subs" @del="del" @copy="sub = $event"></SpielerTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SpielerModify from '../components/SpielerModify.vue';
import SpielerTable from '../components/SpielerTable.vue';

const subs = ref({});
const sub = ref({});

const getSpieler = async () => {
    const { data } = await axios.get('http://localhost:3000/spieler');
    subs.value = data;
};
onMounted(() => getSpieler());

const add = async (payload) => {
    await axios.post('http://localhost:3000/spieler', payload);
    getSpieler();
};

const updateMe = async (payload) => {
    const updateSpieler = {
        spielerpassid: payload.spielerpassid,
        vorname: payload.vorname,
        nachname: payload.nachname,
        trikotnummer: payload.trikotnummer
    };
    await axios.patch(`http://localhost:3000/spieler/${payload.spielerpassid}`, updateSpieler);
    getSpieler();
};

const del = async (payload) => {
    await axios.delete(`http://localhost:3000/spieler/${payload.spielerpassid}`);
    getSpieler();
}
</script>