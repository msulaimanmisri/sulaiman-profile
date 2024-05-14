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
          <Image image-source="images/sulaiman-lead-dev.jpg" alt-name="sulaiman-working" />
        </div>

        <div id="secondary" class="row">
          <div class="col-5">
            <Image image-source="images/sulaiman-lead-dev.jpg" alt-name="sulaiman-working" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
