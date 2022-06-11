<template>
  <div class="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
    <div class="sm:flex items-center justify-between">
      <p
        tabindex="0"
        class="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800"
      >
        Trainer
      </p>
      <div>
        <label>Trainerid</label>
        <p>{{ sub.trainerid }}</p>
      </div>
      <div>
        <label>Nachname</label>
        <input
          v-model="sub.nachname"
          type="text"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
      </div>
      <div>
        <label>Vorname</label>
        <input
          v-model="sub.vorname"
          type="text"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
      </div>
      <div>
        <label>Trainerrolle</label>
        <input
          v-model="sub.trainerrolle"
          type="text"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
      </div>
      <div>
        <button
          @click="clear"
          type="button"
          class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Clear
        </button>
      </div>
      <div>
        <button
          @click="emit('updateMe', sub)"
          type="button"
          class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Trainer updaten
        </button>
      </div>
      <div>
        <button
          @click="emit('addTrainer', sub)"
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Neuer Trainer
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { watch, ref } from 'vue';

const props = defineProps({
  sub: Object,
});

const sub = ref({});

watch(props, (newVal) => {
  sub.value = { ...newVal.sub };
});

const clear = () => {
  sub.value.trainerid = '';
  sub.value.nachname = '';
  sub.value.vorname = '';
  sub.value.trainerrolle = '';
};

const emit = defineEmits(['addTrainer', 'updateMe']);
</script>
