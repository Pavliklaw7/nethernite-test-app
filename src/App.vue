<template>
  <v-app>
    <Header />
    <PackageList />
    <PackageDialog />
    <Footer />
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import PackageList from "./components/PackageList.vue";
import PackageDialog from "./components/PackageDialog.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",

  components: {
    Header,
    PackageList,
    PackageDialog,
    Footer
  }
};
</script>
