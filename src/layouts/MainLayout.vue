<template>
  <q-layout view="hHh lpR fFf">
    <HeaderComponent />
    <FooterComponent />

    <q-page-container>
      <q-page class="col q-gutter-md">
        <div
          class="row justify-center q-gutter-md"
          v-if="recentApps.length > 0"
        >
          <div class="col-12 col-md-8">
            <p class="text-subtitle2">Sử dụng gần đây</p>
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
          inset
          class="q-ma-md"
        ></q-separator>

        <div class="row justify-center q-gutter-md">
          <div class="col-12 col-md-8 row full-height">
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
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import AppAvatar from "../components/AppAvatar.vue";
import { ref, onMounted } from "vue";
defineOptions({
  name: "MainLayout",
});
const recentApps = ref([]);
onMounted(() => {
  const savedApps = JSON.parse(localStorage.getItem("recentApps"));
  if (savedApps) {
    recentApps.value = savedApps;
  }
});
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

const apps = ref([
  {
    imgURL: "https://redant.com.au/assets/uploads/jira-1.png",
    linkURL: "https://www.atlassian.com/software/jira",
    appName: "Jira",
  },
  {
    imgURL:
      "https://pbs.twimg.com/profile_images/1372304699601285121/5yBS6_3F_400x400.jpg",
    linkURL: "https://github.com/",
    appName: "Github",
  },
  {
    imgURL:
      "https://yt3.googleusercontent.com/_q52i8bUAEvcb7JR4e-eNTv23y2A_wg5sCz0NC0GrGtcw1CRMWJSOPVHUDh_bngD0q4gMvVeoA=s900-c-k-c0x00ffffff-no-rj",
    linkURL: "https://code.visualstudio.com/",
    appName: "VS Code",
  },
  {
    imgURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Visual_Studio_Icon_2022.svg/1200px-Visual_Studio_Icon_2022.svg.png",
    linkURL: "https://visualstudio.microsoft.com/fr/",
    appName: "Visual Studio",
  },
  {
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTQtnXQkjxe8xcXLmq8OvpW5ugiLGN_Y8Jepra6Wt1AA&s",
    linkURL: "https://www.docker.com/",
    appName: "Docker",
  },
  {
    imgURL:
      "https://lh6.googleusercontent.com/proxy/1AsN-bwNMBfZmgjaAja3vOxOKvVmGQmqhNlsAQYiBEmwL2RwGTgCYR4sM0plp2MlJ-7w09kqH4k7ZQgj73Y9qeBiC6QzjD6g5rZVxW-7pKFF3RgvISKSnsusay43zA9P-PCoRKTFq3qRBjdm",
    linkURL: "https://www.microsoft.com/en-us/sql-server/sql-server-downloads",
    appName: "SQL Server",
  },
  {
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWlGLH72Yh7sPDvzsPSw-xD4Nl7eOwjTXOpXwZIgOFMA&s",
    linkURL: "https://www.atlassian.com/software/jira",
    appName: "MySQL",
  },
  {
    imgURL: "https://stc-zaloprofile.zdn.vn/pc/v1/images/zalo_sharelogo.png",
    linkURL: "https://zalo.me/pc",
    appName: "Zalo",
  },
]);
</script>
