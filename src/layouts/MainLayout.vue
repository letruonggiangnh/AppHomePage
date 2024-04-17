<template>
  <q-layout view="hHh lpR fFf">
    <HeaderComponent />
    <FooterComponent />
    <q-page-container><router-view></router-view> </q-page-container>
  </q-layout>
</template>

<script setup>
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";

defineOptions({
  name: "MainLayout",
});
</script>
