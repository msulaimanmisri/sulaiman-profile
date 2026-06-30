<script setup>
import Card from "../components/Card.vue";
</script>

<template>
  <div class="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
    <header class="max-w-4xl">
      <h1 class="font-main text-4xl font-extrabold tracking-tight text-slate-800 sm:text-5xl">
        He loves to develop for himself and others.
      </h1>

      <hr class="mt-6 border-slate-200 sm:mt-8" />

      <p class="mt-8 text-lg leading-8 text-slate-600 font-body sm:text-xl">
        In his free time, he's building these projects. You can use them for free! (Some of them might not be working as expected due to several reasons)
      </p>
    </header>

    <section class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      <div id="bacasekejap">
        <Card
          project-title="BacaSekejap"
          project-description="A project that taught me how to build a scalable Web through Two-Tier Architecture and Different Load Balancing Strategy"
          project-url="https://hantar.sulaimanmisri.com" />
      </div>

      <div id="kirasekarang">
        <Card
          project-title="KiraSekarang"
          project-description="A must-have app to level up your Personal Finance Management. A project that taught me how to handle large transactions."
          project-url="https://kirasekarang.com" />
      </div>

      <div id="2500-fiqh">
        <Card
          project-title="2500 Masalah Feqah"
          project-description="A simple website to show the content of this book"
          project-url="https://2500.sulaimanmisri.com" />
      </div>

      <div id="easy-detect">
        <Card
          project-title="Easy Detect"
          project-description="Get exception report in your Laravel application before your user report it"
          project-url="https://github.com/msulaimanmisri/easy-detect" />
      </div>

      <div id="easy-deploy">
        <Card
          project-title="Easy Deploy"
          project-description="A simple Laravel package to simplify deployment commands. Only one line needed!"
          project-url="https://github.com/msulaimanmisri/easy-deploy" />
      </div>

      <div id="easy-login">
        <Card
          project-title="Easy Login"
          project-description="Add a pre-defined Social Login button in your Laravel Application with ease!"
          project-url="https://github.com/msulaimanmisri/easy-login" />
      </div>

      <div id="kelasDesign">
        <Card
          project-title="Kelas Design"
          project-description="Application for you to learn WordPress & Web Development"
          project-url="https://kelasdesign.com/?ref=evfiC9vL" />
      </div>

      <div id="simpanKerja">
        <Card
          project-title="Simpan Kerja"
          project-description="SimpanKerja makes it easy for you to track and manage all job application records that you've ever applied to. Not released to the public yet."
          project-url="https://sk.sulaimanmisri.com" />
      </div>

      <div id="kiraGaji">
        <Card
          project-title="Kira Gaji"
          project-description="Application for you to calculate how much salary you gain, and how you can calculate your freelance rate"
          project-url="https://kira.sulaimanmisri.com" />
      </div>

      <div id="devPath">
        <Card
          project-title="Developer Path"
          project-description="A guide for those who are interested in Web Development but don't know where to start. This is based on my personal experience"
          project-url="https://dev.sulaimanmisri.com" />
      </div>

      <div id="phpAegis">
        <Card
          project-title="Custom PHP Framework"
          project-description="A simple PHP Framework that I built from scratch. I named it PHPAegis. Still working on it. But it's not published yet. You can request to see if you are interested though."
          project-url="https://github.com/msulaimanmisri" />
      </div>

      <div id="pru15">
        <Card
          project-title="Pilihan Raya Umum 15"
          project-description="A simple website for you to find your chosen candidate based on location selected"
          project-url="https://pru15.sulaimanmisri.com" />
      </div>

      <div id="passwordGenerator">
        <Card
          project-title="Password Generator"
          project-description="A simple website that can generate a very secure password without saving it"
          project-url="https://pass.sulaimanmisri.com" />
      </div>

      <div id="smPrefetch">
        <Card
          project-title="SM Prefetch"
          project-description="A WordPress plugin that can turn your website into a blazing fast website using prefetch technology"
          project-url="https://wordpress.org/plugins/sm-prefetch" />
      </div>

      <div id="smScrollbar">
        <Card
          project-title="SM Scrollbar"
          project-description="A WordPress plugin that can make your windows browser scrollbar look nice"
          project-url="https://wordpress.org/plugins/sm-scrollbar" />
      </div>

      <div id="cariGambo">
        <Card
          project-title="Cari Gambo"
          project-description="A simple web application where you can search any Royalty-Free images"
          project-url="https://gambo.sulaimanmisri.com" />
      </div>

      <div id="wordPressSandbox">
        <Card
          project-title="WordPress Sandbox"
          project-description="Try any WordPress latest version or debug your plugin here without need to install anything!"
          project-url="https://wordpress.sulaimanmisri.com" />
      </div>

      <div id="smRouteApi">
        <Card
          project-title="WordPress Route API"
          project-description="If you want to fetch data from WordPress via API, you should use this plugin to make your life easier"
          project-url="https://github.com/msulaimanmisri/sm-route-api" />
      </div>

      <div id="smMakePWA">
        <Card
          project-title="WordPress PWA"
          project-description="Turns your WordPress site into Desktop or Mobile Apps in single click!"
          project-url="https://github.com/msulaimanmisri/sm-make-pwa" />
      </div>

      <div id="redirectWooCommerce">
        <Card
          project-title="WooCommerce Redirect"
          project-description="This simple plugin will allow WooCommerce users to redirect their customer into the Checkout page without need to load the Cart Page"
          project-url="https://github.com/msulaimanmisri/wp-woo-redirect-checkout" />
      </div>

      <div id="smCustomAnalytics">
        <Card
          project-title="WordPress Custom Analytics"
          project-description="This simple plugin will allow you to print out how many people has visited your website by using shortcode called [sm_tracking]"
          project-url="https://github.com/msulaimanmisri/sm-custom-analytics" />
      </div>

      <div id="smErrorLog">
        <Card
          project-title="WordPress Debug"
          project-description="This plugin will make your WP_DEBUG turn into `true` and you can check in the dashboard or your `wp-content` folder the error"
          project-url="https://github.com/msulaimanmisri/SM-Error-Log" />
      </div>

      <div id="belajarAlQuran">
        <Card
          project-title="Belajar surah dalam Al-Quran"
          project-description="A simple website that can help adults and children learn about surahs in Al-Quran"
          project-url="https://belajar-alquran.sulaimanmisri.com" />
      </div>

      <div id="vueTracker">
        <Card
          project-title="Expenses Tracker"
          project-description="Track your expenses today! Failed to do that, you will 'bocor' yourself every month :("
          project-url="https://vue-tracker-nu.vercel.app" />
      </div>

      <div id="vueBorder">
        <Card
          project-title="Border Generator"
          project-description="Create a border with ease using this simple application"
          project-url="https://vue-border.vercel.app" />
      </div>

      <div id="digiVel">
        <Card
          project-title="DigiVel"
          project-description="Search your favorite Digimon data via API. Get the documentation in Sulaiman's github repo"
          project-url="https://digivel.sulaimanmisri.com" />
      </div>

      <div id="comingSoon">
        <Card
          project-title="Coming Soon"
          project-description="Sulaiman will create more projects later for you to use. Check again later. Meanwhile, follow his github account please :)"
          project-url="https://github.com/msulaimanmisri" />
      </div>
    </section>
  </div>
</template>
