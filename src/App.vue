<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-dark py-3 shadow-sm" data-bs-theme="dark">
      <div class="container">
        <router-link :to="{ name: 'home' }" class="navbar-brand text-warning fw-bolder">SulaimanMisri.</router-link>

        <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">

            <li class="nav-item text-main fs-5">
              <router-link :to="{ name: 'about.index' }" class="nav-link" aria-current="page">
                About.
              </router-link>
            </li>

            <li class="nav-item text-main fs-5">
              <router-link :to="{ name: 'stack.index' }" class="nav-link" aria-current="page">
                Stack.
              </router-link>
            </li>

            <li class="nav-item text-main fs-5">
              <router-link :to="{ name: 'project.index' }" class="nav-link" aria-current="page">
                Project.
              </router-link>
            </li>

            <li class="nav-item text-main fs-5">
              <router-link :to="{ name: 'personal-project.index' }" class="nav-link" aria-current="page">
                Personal Project.
              </router-link>
            </li>

            <!-- <li class="nav-item text-main fs-5">
              <router-link :to="{ name: 'posts.index' }" class="nav-link" aria-current="page">Blog
                Posts.</router-link>
            </li> -->
          </ul>

          <ul class="navbar-nav ms-auto mb-2 mb-lg-0" role="search">
            <a href="https://github.com/msulaimanmisri" target="_blank" class="btn btn-warning text-main fw-bold">Follow him at Github</a>
          </ul>

        </div>
      </div>
    </nav>

    <div class="navbar navbar-expand-lg bg-success-subtle shadow-sm py-3">
      <div class="container">
        <span class="text-muted">
              Not available for Freelance services. Focus on building <a href="https://bit.ly/daftar-kelas-design" target="_blank">Kelas Design</a>
            </span>
      </div>
    </div>

    <!--- render router view -->
    <router-view></router-view>

    <div class="container-fluid bg-light py-5">
      <div class="text-muted text-center text-main fw-bold">
        Crafted Carefully in Kuala Lumpur ❤
      </div>
    </div>

  </div>
</template>