<script setup>
import Card from "../components/Card.vue";
</script>

<template>
  <div class="container">
    <div class="py-5">
      <h1 class="fw-bolder text-muted display-3 text-main">
        He just love to develop for himself and others.
      </h1>

      <hr />

      <p class="lead text-muted text-body">
        In his freetime, he's building these projects. You can use if for free!
      </p>

      <div class="row">
        <div id="kelasDesign" class="col-md-4 mt-4">
          <Card
            project-title="Kelas Design"
            project-description="Application for you to learn WordPress & Web Development"
            project-url="https://kelasdesign.com/?ref=evfiC9vL" />
        </div>

        <div id="simpanKerja" class="col-md-4 mt-4">
          <Card
            project-title="Simpan Kerja"
            project-description="SimpanKerja makes it easy for you to track and manage all job application records that you've ever applied to. Not Release to the public yet"
            project-url="https://sk.sulaimanmisri.com" />
        </div>

        <div id="kiraGaji" class="col-md-4 mt-4">
          <Card
            project-title="Kira Gaji"
            project-description="Application for you to calculate how much salary you gain, and How you can calculate your freelance rate"
            project-url="https://kira.sulaimanmisri.com" />
        </div>

        <div id="devPath" class="col-md-4 mt-4">
          <Card
            project-title="Developer Path"
            project-description="A guide for those who interest in Web Development but don't know where to start. This is based on my personal experience"
            project-url="https://dev.sulaimanmisri.com" />
        </div>

        <div id="pru15" class="col-md-4 mt-4">
          <Card
            project-title="Pilihan Raya Umum 15"
            project-description="A simple Website for you to find your choosen candidate based on Location selected"
            project-url="https://pru15.sulaimanmisri.com" />
        </div>

        <div id="passwordGenerator" class="col-md-4 mt-4">
          <Card
            project-title="Password Generator"
            project-description="A simple website that can generate a very secure password without saving it"
            project-url="https://pass.sulaimanmisri.com" />
        </div>

        <div id="smPrefetch" class="col-md-4 mt-4">
          <Card
            project-title="SM Prefetch"
            project-description="A WordPress plugin that can turns your website into a blazing
                fast website using prefetch technology"
            project-url="https://wordpress.org/plugins/sm-prefetch" />
        </div>

        <div id="smScrollbar" class="col-md-4 mt-4">
          <Card
            project-title="SM Scrollbar"
            project-description="A WordPress plugin that can make your windows browser scrollbar look nice"
            project-url="https://wordpress.org/plugins/sm-scrollbar" />
        </div>

        <div id="cariGambo" class="col-md-4 mt-4">
          <Card
            project-title="Cari Gambo"
            project-description="A simple web application where you can search any Royalty-Free images"
            project-url="https://gambo.sulaimanmisri.com" />
        </div>

        <div id="wordPressSandbox" class="col-md-4 mt-4">
          <Card
            project-title="WordPress Sandbox"
            project-description="Try any WordPress latest version or debug your plugin here without need to install anything!"
            project-url="https://wordpress.sulaimanmisri.com" />
        </div>

        <div id="belajarAlQuran" class="col-md-4 mt-4">
          <Card
            project-title="Belajar surah dalam Al-Quran"
            project-description="A simple website that can help adult and children learn about surahs in Al-Quran"
            project-url="https://belajar-alquran.sulaimanmisri.com" />
        </div>

        <div id="vueTracker" class="col-md-4 mt-4">
          <Card
            project-title="Expenses Tracker"
            project-description="Track your expenses today! Failed to do that, you will 'bocor' yourself every month :("
            project-url="https://vue-tracker-nu.vercel.app" />
        </div>

        <div id="vueBorder" class="col-md-4 mt-4">
          <Card
            project-title="Border Generator"
            project-description="Create a border with ease using this simple application"
            project-url="https://vue-border.vercel.app" />
        </div>

        <div id="digiVel" class="col-md-4 mt-4">
          <Card
            project-title="DigiVel"
            project-description="Search your favorite Digimon data via API. Get the documentation in Sulaiman's github repo"
            project-url="https://digivel.sulaimanmisri.com" />
        </div>

        <div id="comingSoon" class="col-md-4 mt-4">
          <Card
            project-title="Coming Soon"
            project-description=" Sulaiman will create more project later for you to use. Check again later. Meanwhile, follow his github account please :)"
            project-url="https://github.com/msulaimanmisri" />
        </div>
      </div>
    </div>
  </div>
</template>
