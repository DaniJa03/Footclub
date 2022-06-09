<template>
  <div>
    <body class="flex items-center justify-center py-8 px-2">
      <div class="w-full sm:px-6">
        <div class="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
          <div class="sm:flex items-center justify-between">
            <p
              tabindex="0"
              class="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800"
            >
              Trainer
            </p>
            <div>
              <button
                class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
              >
                <p class="text-sm font-medium leading-none text-white">Neuer Trainer</p>
              </button>
            </div>
          </div>
        </div>
        <div class="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
          <table class="w-full whitespace-nowrap">
            <thead>
              <tr
                tabindex="0"
                class="focus:outline-none h-16 w-full text-sm leading-none text-gray-800"
              >
                <th class="font-normal text-left pl-4">Trainerid</th>
                <th class="font-normal text-left pl-12">Vorname</th>
                <th class="font-normal text-left pl-12">Nachname</th>
                <th class="font-normal text-left pl-20">Trainerrolle</th>
              </tr>
            </thead>
            <tbody class="w-full">
              <tr
                tabindex="0"
                class="focus:outline-none h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100"
              >
                <td class="pl-4 cursor-pointer">
                  <div class="flex items-center">
                      <p class="font-medium">UX Design &amp; Visual Strategy</p>
                  </div>
                </td>
                <td class="pl-12">
                  <p class="text-sm font-medium leading-none text-gray-800">72%</p>
                </td>
                <td class="pl-12">
                  <p class="font-medium">32/47</p>
                  <p class="text-xs leading-3 text-gray-600 mt-2">5 tasks pending</p>
                </td>
                <td class="pl-20">
                  <p class="font-medium">$13,000</p>
                  <p class="text-xs leading-3 text-gray-600 mt-2">$4,200 left</p>
                </td>
                <td class="px-7 2xl:px-0">
                  <button
                    @click="show === null ? (show = 0) : (show = null)"
                    class="focus:ring-2 rounded-md focus:outline-none ml-7"
                    role="button"
                    aria-label="options"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                        stroke="#A1A1AA"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                        stroke="#A1A1AA"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                        stroke="#A1A1AA"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <div
                    class="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6"
                    v-if="show === 0"
                  >
                    <div
                      tabindex="0"
                      class="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white"
                    >
                      <p>Edit</p>
                    </div>
                    <div
                      tabindex="0"
                      class="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white"
                    >
                      <p>Delete</p>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </body>
  </div>
</template>

<script>

export default {
  name: 'component',
  data() {
    return {
      show: null,
    };
  },
  methods: {},
  mounted() {},
};
</script>
