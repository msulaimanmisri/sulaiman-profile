<script setup>
import Project from "../components/Project.vue";
</script>

<template>
  <div class="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
    <header class="max-w-4xl">
      <h1 class="font-main text-4xl font-extrabold tracking-tight text-slate-800 sm:text-5xl">
        Projects he's been involved in.
      </h1>

      <hr class="mt-6 border-slate-200 sm:mt-8" />

      <p class="mt-8 text-lg leading-8 text-slate-600 font-body sm:text-xl">
        From small organizations to big organizations. Sulaiman has collaborated with them to make their businesses or work easier. Here's the list.
      </p>
    </header>

    <section class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
      <div class="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
        <ul class="space-y-0">
          <Project title="Kementerian Pendidikan Malaysia" />
          <Project title="Kyoto Kimono Yuzen" />
          <Project title="ASEAN Schools Games 2018" />
          <Project title="Perbadanan Harta Intelek (MyIPO)" />
          <Project title="Universiti Malaysia Sarawak (UNIMAS)" />
          <Project title="Ardent Educational Sdn Bhd" />
          <Project title="Kangaroo Math" />
          <Project title="Beaver Computational Thinking" />
          <Project title="Kancil Science Malaysia" />
          <Project title="Kijang Economics Malaysia" />
          <Project title="Malaysian Earth Science Olympiad (MyESO)" />
          <Project title="KlikWeb" />
          <Project title="Dragtify" />
          <Project title="Ahlan Academy" />
          <Project title="Plus PM" />
          <Project title="RenoRumah" />
          <Project title="The Japanese Chamber Of Trade & Industry, Malaysia" />
          <Project title="Dr Strech Singapore" />
          <Project title="Sankyo Machine Tool" />
          <Project title="Malaysian Computational Linguistics Olympiad (MyCLO)" />
          <Project title="Juwai IQI" />
        </ul>
      </div>

      <div class="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
        <ul class="space-y-0">
          <Project title="Malaysia Astronomy Olympiad (MyAO)" />
          <Project title="Malaysian Economics Olympiad (MyEO)" />
          <Project title="IbuAna Bookstore" />
          <Project title="AsiaQuest Malaysia" />
          <Project title="Pro Academy" />
          <Project title="Kiah.Store" />
          <Project title="Contest Hub" />
          <Project title="Young Coder Malaysia" />
          <Project title="Kelas Design" />
          <Project title="Bina Minda Commerce" />
          <Project title="Bina Funnel" />
          <Project title="Dewan Masyarakat DBP" />
          <Project title="Dewan Sastera DBP" />
          <Project title="Dewan Ekonomi DBP" />
          <Project title="Dewan Bahasa DBP" />
          <Project title="Akademi DBP" />
          <Project title="Malay Literature DBP" />
          <Project title="Jurnal Bahasa DBP" />
          <Project title="Jurnal Bahasa DBP" />
          <Project title="Mitsubishi Motor Malaysia" />
          <Project title="UEM Sunrise Berhad Applications" />
        </ul>
      </div>
    </section>
  </div>
</template>
