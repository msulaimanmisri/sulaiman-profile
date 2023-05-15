<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-dark py-3 shadow-sm" data-bs-theme="dark">
      <div class="container">
        <router-link :to="{ name: 'home' }" class="navbar-brand text-warning fw-bolder">Sulaiman Misri</router-link>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link :to="{ name: 'posts.index' }" class="nav-link active" aria-current="page">Blog
                Posts</router-link>
            </li>
          </ul>

          <ul class="navbar-nav ms-auto mb-2 mb-lg-0" role="search">
            <a href="https://github.com/msulaimanmisri" target="_blank" class="btn btn-warning">About Me</a>
          </ul>

        </div>
      </div>
    </nav>

    <!--- render router view -->
    <router-view></router-view>

  </div>
</template>