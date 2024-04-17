<template>
  <q-page class="col q-gutter-md">
    <div class="row justify-center q-gutter-md" v-if="recentApps.length > 0">
      <div class="col-12 col-md-8">
        <p class="text-h6 text-white">Sử dụng gần đây</p>
        <div class="row">
          <AppAvatar
            v-for="(app, index) in recentApps"
            :key="index"
            :imgURL="app.imgURL"
            :linkURL="app.linkURL"
            :appName="app.appName"
            @openNewTab="handleOpenNewTab"
            class="col-4 col-md-2"
          />
        </div>
      </div>
    </div>
    <q-separator
      v-if="recentApps.length > 0"
      class="q-ma-md text-white"
    ></q-separator>
    <div class="row justify-center q-gutter-md">
      <div
        class="cursor-pointer justify-end col-md-8 col-xs-10 row full-height"
      >
        <RouterLink
          style="text-decoration: none; color: inherit"
          class="text-white text-subtitle1 text-italic"
          to="/app/1"
          ><p>Tất cả</p></RouterLink
        >
      </div>
      <div class="col-md-8 row full-height">
        <AppAvatar
          v-for="(app, index) in apps"
          :key="index"
          :imgURL="app.imgURL"
          :linkURL="app.linkURL"
          :appName="app.appName"
          @openNewTab="handleOpenNewTab"
          class="col-4 col-md-2 q-hoverable"
        />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import AppAvatar from "../components/AppAvatar.vue";
import { ref, onMounted } from "vue";
import axios from "axios";
const apps = ref([]);
const recentApps = ref([]);
function handleOpenNewTab(linkURL, appName, imgURL) {
  window.open(linkURL);

  const existingAppIndex = recentApps.value.findIndex(
    (app) => app.appName === appName
  );

  if (existingAppIndex !== -1) {
    recentApps.value.splice(existingAppIndex, 1);
  }

  recentApps.value.unshift({
    linkURL,
    appName,
    imgURL,
  });

  if (recentApps.value.length > 6) {
    recentApps.value.pop();
  }

  localStorage.setItem("recentApps", JSON.stringify(recentApps.value));
}
let config = {
  method: "get",
  maxBodyLength: Infinity,
  url: "http://localhost:5000/api/App/GetTop18App",
  headers: {},
};
axios
  .request(config)
  .then((response) => {
    apps.value = response.data;
  })
  .catch((error) => {
    console.log(error);
  });

onMounted(() => {
  const savedApps = JSON.parse(localStorage.getItem("recentApps"));
  if (savedApps) {
    recentApps.value = savedApps;
  }
});
</script>
