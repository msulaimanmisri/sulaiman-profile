<script setup>
/**
 * FilmGrain — fixed, pointer-events-none pure-CSS noise overlay.
 * Uses repeating-radial + conic gradients with difference blend
 * to create fine black-dot film grain (inspired by Nightwatch).
 */
</script>

<template>
  <div
    aria-hidden="true"
    class="pointer-events-none fixed inset-0 z-50 opacity-[0.19] mix-blend-overlay"
    style="
      background:
        repeating-radial-gradient(#000 0 0.0001%, #fff 0 0.0002%) 50% 50%/3000px 3000px,
        repeating-conic-gradient(#000 0 0.0001%, #fff 0 0.0002%) 50% 50%/3000px 3000px;
      background-blend-mode: difference;
    "
  ></div>
</template>
