<template>
  <v-app>
    <Header />
    <PackageList />
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import PackageList from "./components/PackageList.vue";

export default {
  name: "App",

  components: {
    Header,
    PackageList
  }
};
</script>
