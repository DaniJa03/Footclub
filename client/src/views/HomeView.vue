<template>
  <div class="md:mx-auto md:container">
    <div class="pt-10 md:pt-40">
      <div class="container mx-auto">
        <div class="flex flex-wrap items-center pb-12">
          <div class="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
            <div class="py-2 text-color">
              <h1
                role="heading"
                class="text-2xl dark:text-white lg:text-6xl md:leading-snug tracking-tighter f-f-l font-black"
              >
                Ihre Webseite um ihren Verein und Mannschaft zu managen
              </h1>
              <p
                role="contentinfo"
                class="text-lg dark:text-white lg:text-3xl lg:leading-7 md:leading-10 f-f-r py-4 md:py-8"
              >
                Hier auf Footclub kannst du dir deine Spieler von deinem Verein und deiner
                Mannschaft verwalten.
              </p>
              <button
                class="flex items-center cursor-pointer pb-4 md:pb-0 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none"
              >
                <span
                  aria-label="lets get started"
                  role="button"
                  class="focus outline-none f-f-r text-lg lg:text-2xl font-semibold underline text-indigo-700 dark:text-indigo-400"
                  ><RouterLink to="/spieler">Zu den Spielern</RouterLink></span
                >
                <div class="pl-2">
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/alternating_description_with_cards-svg1.svg"
                    alt="arrow"
                  />
                </div>
              </button>
            </div>
          </div>
          <div class="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
            <img
              class="absolute w-full h-full inset-0 object-cover object-center rounded-md"
              src="https://www.realmadrid.com/img/horizontal_620px/ciudad-deportiva-valdebebas_0039_20190913113043.jpg"
              alt="A girl enjoying in sunlight"
              role="img"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="pb-32 pt-16">
      <div class="mx-auto">
        <div class="flex flex-wrap flex-row-reverse items-center">
          <div class="md:w-1/2 lg:w-2/3 w-full lg:pl-20 md:pl-10 sm:pl-0 pl-0">
            <div class="py-2 text-color">
              <div>
                <h1
                  role="heading"
                  class="text-2xl dark:text-white lg:text-6xl tracking-tighter md:leading-snug f-f-l font-black"
                >
                  Einfach zu nutzen
                </h1>
              </div>
              <p
                role="contentinfo"
                class="text-lg dark:text-white lg:text-3xl leading-7 md:leading-10 f-f-r py-8"
              >
                Hier auf Footclub kannst du dir deine Spieler von deinem Verein und deiner
                Mannschaft verwalten.
              </p>
              <button
                class="flex items-center cursor-pointer pb-4 md:pb-0 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none"
              >
                <span
                  aria-label="lets get started"
                  role="button"
                  class="focus outline-none f-f-r text-lg lg:text-2xl font-semibold underline text-indigo-700 dark:text-indigo-400"
                  ><RouterLink to="/trainer">Zu den Trainertabelle</RouterLink></span
                >
                <div class="pl-2">
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/alternating_description_with_cards-svg1.svg"
                    alt="arrow"
                  />
                </div>
              </button>
            </div>
          </div>
          <div class="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
            <img
              class="absolute w-full h-full inset-0 object-cover object-center rounded-md"
              src="https://www.straden.gv.at/images/content/LEBENSKRAFT/Sport_Freizeiteinrichtungen/Fussball/Straden/SU-Straden_02.jpg"
              alt="A group of three having a meeting"
              role="img"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink, createWebHistory, RouterView } from 'vue-router';
</script>
