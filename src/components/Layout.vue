<script setup lang="ts">
import Loader from './Partials/Loader.vue'
</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-background">
      <div class="container-fluid">
        <RouterLink class="navbar-brand pokemon-font" to="/">Pokedex</RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink class="nav-link text-light" activeClass="active" to="/">Inicio</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link text-light" activeClass="active" to="/team">Mi equipo</RouterLink>
            </li>
          </ul>
          <span class="navbar-text">
            <!-- <RouterLink class="nav-link text-light" activeClass="active" to="/">Iniciar sesión</RouterLink> -->
          </span>
        </div>
      </div>
    </nav>
    <div class="container">
      <slot></slot>
    </div>
    <Loader />
  </div>
</template>

<style scoped>
.active {
  text-shadow: 0 0 1em #000;
}
</style>