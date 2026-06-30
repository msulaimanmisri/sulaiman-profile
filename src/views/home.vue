<script setup>
import Image from "../components/Image.vue";
</script>

<template>
  <div class="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
    <header class="max-w-4xl">
      <h1 class="font-main text-5xl font-extrabold tracking-tight text-slate-800 sm:text-6xl">
        Your Next Full Stack Web Developer
      </h1>

      <p class="mt-6 text-lg leading-8 text-slate-600 font-body sm:text-xl">
        With more than 10 years of working experience, he's your next developer who will translate your next big idea into reality.
      </p>
    </header>

    <section class="mt-12 sm:mt-16">
      <Image
        image-source="images/sulaiman-lead-dev.jpg"
        alt-name="sulaiman-coding-alone"
      />
    </section>

    <section class="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-4 sm:gap-8">
      <div class="sm:col-span-2">
        <Image
          image-source="images/lead-1.jpg"
          alt-name="sulaiman-with-the-team"
        />
      </div>

      <div class="sm:col-span-2">
        <Image
          image-source="images/lead-2.jpg"
          alt-name="sulaiman-hear-the-explaination"
        />
      </div>
    </section>
  </div>
</template>
