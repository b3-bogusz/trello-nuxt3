<script setup lang="ts">
const route = useRoute();

const store = useBoardStore();
</script>

<template>
  <div>
    <pre>{{ store.board }}</pre>
  </div>
</template>
