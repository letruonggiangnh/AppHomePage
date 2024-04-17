<template>
  <q-header
    class="text-white"
    style="
      background-image: linear-gradient(
        to right,
        rgba(255, 165, 0),
        rgba(0, 0, 255)
      );
    "
  >
    <q-toolbar>
      <q-img style="height: 40px; max-width: 150px" :src="imgUrl" />
    </q-toolbar>
  </q-header>
</template>

<script setup>
defineOptions({
  name: "HeaderComponent",
});
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
const router = useRouter();
const imgUrl = ref("");
const companyCode = router.currentRoute._rawValue.params.companyCode;

const params = new URLSearchParams([["companyCode", companyCode]]);
axios
  .get("http://localhost:5000/api/Company/GetCompanyLogo", {
    params,
  })
  .then((response) => {
    imgUrl.value = response.data;
  });
</script>
