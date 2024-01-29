<template>
  <router-view />
</template>

<script lang="ts" setup>
if (!sessionStorage.getItem("reloaded")) {
  sessionStorage.setItem("reloaded", "true");
  window.location.href = "/";
} else {
  sessionStorage.removeItem("reloaded");
}
</script>
