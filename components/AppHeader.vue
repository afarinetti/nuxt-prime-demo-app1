<template>
  <Toolbar style="padding: 0.5rem 1rem 0.5rem 1rem">
    <template #start>
      <i class="pi pi-calendar-clock" />
      <Divider layout="vertical" />
      <div>App Header</div>
    </template>
    <template #end>
      <Button
        :icon="themeIcon"
        severity="secondary"
        rounded
        @click="toggleDark()"
      />
    </template>
  </Toolbar>
</template>

<script setup lang="ts">
  const { toggleDark, themeIcon } = useTheme();
</script>

<style scoped>
  body {
    font-family: 'Roboto Thin', sans-serif;
  }
</style>
