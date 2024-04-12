<template>
  <div class="column">
    <div class="row">
      <q-avatar class="col" square>
        <img class="cursor-pointer" :src="imgURL" @click="handleClick" />
      </q-avatar>
    </div>
    <div class="justify-center row q-mt-sm">
      <p class="text-subtitle2 text-white cursor-pointer" @click="handleClick">
        {{ appName }}
      </p>
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
