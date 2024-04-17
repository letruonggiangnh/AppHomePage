<template>
  <q-page class="content-center">
    <div class="column items-center">
      <div class="row justify-center">
        <div class="col-md-8 row">
          <AppAvatar
            v-for="(app, index) in apps"
            :key="index"
            :imgURL="app.imgURL"
            :linkURL="app.linkURL"
            :appName="app.appName"
            @openNewTab="handleOpenNewTab"
            class="col-4 col-md-2"
          />
        </div>
      </div>
      <q-pagination
        v-model="current"
        :max="maxPage"
        direction-links
        color="white"
        active-color="primary"
      ></q-pagination>
    </div>
  </q-page>
</template>

<script setup>
import AppAvatar from "../components/AppAvatar.vue";
import { ref } from "vue";
import axios from "axios";

const apps = ref([]);
const maxPage = ref(1);

function handleOpenNewTab(linkURL, appName, imgURL) {
  window.open(linkURL);
}
let config = {
  method: "get",
  maxBodyLength: Infinity,
  url: "http://localhost:5000/api/App/GetAllApp",
  headers: {},
};
axios
  .request(config)
  .then((response) => {
    maxPage.value = response.data.maxPage;
    apps.value = response.data.apps;
  })
  .catch((error) => {
    console.log(error);
  });
</script>
