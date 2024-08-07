<script setup lang="ts">
</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-background">
      <div class="container-fluid">
        <a class="navbar-brand pokemon-font" href="#">Pokedex</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink class="nav-link text-light active" to="/">Inicio</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link text-light" to="/dashboard">Pokemones</RouterLink>
            </li>
          </ul>
          <span class="navbar-text">
            <RouterLink class="nav-link text-light" to="/login">Iniciar sesión</RouterLink>
          </span>
        </div>
      </div>
    </nav>
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.active {
  text-shadow: 0 0 1em #000;
}
</style>