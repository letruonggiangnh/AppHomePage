<template>
  <div class="column q-mb-md">
    <div class="row container fit">
      <q-avatar class="col-12" square>
        <q-img
          class="cursor-pointer hover-img"
          :src="imgURL"
          @click="handleClick"
          style="width: 50px; height: 50px"
        >
        </q-img>
      </q-avatar>
      <div class="justify-center col-12 row q-mt-sm">
        <p
          class="text-subtitle2 text-white cursor-pointer hover-text"
          @mouseover="handleHover"
          @click="handleClick"
        >
          {{ appName }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps(["imgURL", "appName", "linkURL"]);
const emit = defineEmits(["openNewTab"]);

function handleClick() {
  emit("openNewTab", props.linkURL, props.appName, props.imgURL);
}
</script>

<style>
.container:hover .hover-img {
  opacity: 0.5;
}

.container:hover .hover-text {
  opacity: 0.5;
}
</style>
