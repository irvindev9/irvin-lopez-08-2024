<script setup lang="ts">
const props = defineProps<{
  type: {
    name: string;
  };
}>();
</script>

<template>
  <div class="pill mx-1" :class="`type-${props.type.name}`">
    {{ props.type.name }}
  </div>
</template>

<style scoped>
.pill {
  text-transform: capitalize;
  width: fit-content;
  backdrop-filter: blur(5px);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  -webkit-backdrop-filter: blur(5px);
}
.type-grass {
  background: rgba(155, 204, 80, 0.75);
  border: 1px solid rgba(155, 204, 80, 0.3);
}

.type-poison {
  background: rgba(191, 143, 202, 0.75);
  border: 1px solid rgba(191, 143, 202, 0.3);
}

.type-fire {
  background: rgba(253, 125, 36, 0.75);
  border: 1px solid rgba(253, 125, 36, 0.3);
}

.type-flying {
  background: rgba(155, 204, 204, 0.75);
  border: 1px solid rgba(155, 204, 204, 0.3);
}

.type-water {
  background: rgba(69, 146, 196, 0.75);
  border: 1px solid rgba(69, 146, 196, 0.3);
}

.type-bug {
  background: rgba(168, 184, 32, 0.75);
  border: 1px solid rgba(168, 184, 32, 0.3);
}

.type-normal {
  background: rgba(168, 168, 120, 0.75);
  border: 1px solid rgba(168, 168, 120, 0.3);
}

.type-electric {
  background: rgba(251, 206, 53, 0.75);
  border: 1px solid rgba(251, 206, 53, 0.3);
}

.type-ground {
  background: rgba(219, 181, 77, 0.75);
  border: 1px solid rgba(219, 181, 77, 0.3);
}

.type-fairy {
  background: rgba(214, 133, 173, 0.75);
  border: 1px solid rgba(214, 133, 173, 0.3);
}

.type-fighting {
  background: rgba(213, 103, 97, 0.75);
  border: 1px solid rgba(213, 103, 97, 0.3);
}

.type-psychic {
  background: rgba(249, 85, 135, 0.75);
  border: 1px solid rgba(249, 85, 135, 0.3);
}

.type-rock {
  background: rgba(182, 161, 54, 0.75);
  border: 1px solid rgba(182, 161, 54, 0.3);
}

.type-steel {
  background: rgba(183, 183, 206, 0.75);
  border: 1px solid rgba(183, 183, 206, 0.3);
}

.type-ice {
  background: rgba(126, 206, 206, 0.75);
  border: 1px solid rgba(126, 206, 206, 0.3);
}

.type-ghost {
  background: rgba(123, 105, 188, 0.75);
  border: 1px solid rgba(123, 105, 188, 0.3);
}

.type-dragon {
  background: rgba(119, 108, 192, 0.75);
  border: 1px solid rgba(119, 108, 192, 0.3);
}

.type-dark {
  background: rgba(112, 88, 72, 0.75);
  border: 1px solid rgba(112, 88, 72, 0.3);
}

.type-unknown {
  background: rgba(0, 0, 0, 0.75);
  border: 1px solid rgba(0, 0, 0, 0.3);
}

.type-shadow {
  background: rgba(0, 0, 0, 0.75);
  border: 1px solid rgba(0, 0, 0, 0.3);
}
</style>