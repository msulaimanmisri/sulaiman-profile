<script setup>
import Image from "../components/Image.vue";
</script>

<template>
  <div class="container">
    <div class="py-5">
      <h1 class="display-2 fw-bolder text-muted text-main">
        Your Next Full Stack Web Developer
      </h1>

      <p class="lead text-muted text-body">
        With more than 8 years working experience, He's your next developer who
        will translate your next big idea into reality.
      </p>

      <div class="mt-5">
        <div id="main">
          <Image image-source="images/sulaiman-lead-dev.jpg" alt-name="sulaiman-coding-alone" />
        </div>

        <div id="secondary" class="row mt-4">
          <div class="col-12 col-sm-8">
            <Image image-source="images/lead-1.jpg" alt-name="sulaiman-with-the-team" />
          </div>

          <div class="col-12 col-sm-4 mt-4 mt-md-0">
            <Image image-source="images/lead-2.jpg" alt-name="sulaiman-hear-the-explaination" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
