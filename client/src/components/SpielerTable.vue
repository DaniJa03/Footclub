<template>
  <div>
    <body class="flex items-center justify-center py-8 px-2">
      <div class="w-full sm:px-6">
        <div class="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
          <!-- <div v-for="(a, index) in spielerArray" :key="index">
            <p>{{ a.spielerpassid }}</p>
            <p>{{ a.vorname }}</p>
            <p>{{ a }}</p>
            <p>{{ a }}</p>
          </div> -->
          <table class="w-full whitespace-nowrap">
            <thead>
              <tr
                tabindex="0"
                class="focus:outline-none h-16 w-full text-sm leading-none text-gray-800"
              >
                <th class="font-normal text-left pl-4">Spielerpassid</th>
                <th class="font-normal text-left pl-12">Vorname</th>
                <th class="font-normal text-left pl-12">Nachname</th>
                <th class="font-normal text-left pl-20">Trikotnummer</th>
              </tr>
            </thead>
            <tbody class="w-full">
              <tr
                v-for="sub of subs"
                :key="sub.spielerpassid"
                tabindex="0"
                class="focus:outline-none h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100"
              >
                <td @click="emit('copy', sub)" class="pl-4 cursor-pointer">
                  <div class="flex items-center">
                    <p class="font-medium">{{ sub.spielerpassid }}</p>
                  </div>
                </td>
                <td class="pl-12">
                  <p class="text-sm font-medium leading-none text-gray-800">{{ sub.vorname }}</p>
                </td>
                <td class="pl-12">
                  <p class="font-medium">{{ sub.nachname }}</p>
                </td>
                <td class="pl-20">
                  <p class="font-medium">{{ sub.trikotnummer }}</p>
                </td>
                <td class="px-7 2xl:px-0">
                  <button
                    @click="emit('del', sub)"
                    type="button"
                    class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Spieler löschen
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </body>
  </div>
</template>

<script setup>
import { onMounted, ref, computed, watch } from 'vue';
import axios from 'axios';
import { useSpielerStore } from '../stores/spielerStore.js';

defineProps({
  subs: Array,
});

const emit = defineEmits(['copy', 'del']);
// const spielerStore = useSpielerStore();
// let spielerArray = ref([]);

// watch(props, (newVal) => {
//   sub.value = { ...newVal.sub };
// });

// onMounted(async () => {
//   const { data } = await axios.get('http://localhost:3000/spieler');
//   spielerArray.value = data;
// });

// const deleteSpieler = async (payload) => {
//   await axios.delete(`http://localhost:3000/spieler/${payload.spielerpassid}`);
//   spielerStore.getSpieler();
// };

// const clear = () => {
//   sub.value.spielerpassid = '';
//   sub.value.vorname = '';
//   sub.value.nachname = '';
//   sub.value.trikotnummer = '';
// };

// const search = ref('');

// const filtered = computed(() => {
//   return spielerArray.value.filter(({ spielerpassid }) => {
//     spielerpassid.toLowerCase().includes(search.value.toLowerCase());
//   });
// })
</script>
