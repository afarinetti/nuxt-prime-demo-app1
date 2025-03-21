<template>
  <Menubar>
    <template #start> LOGO! </template>
    <template #end>
      <Button label="Dark Mode" @click="toggleDark()" />
    </template>
  </Menubar>
</template>

<script setup lang="ts">
const { toggleDark } = useTheme();
</script>
