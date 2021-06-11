<template>
  <v-toolbar flat>
    <v-toolbar-title>NPM Package Searcher</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-text-field
      class="mt-1"
      label="Search the package"
      @input="searchInput"
      v-model.trim="inputValue"
    ></v-text-field>
  </v-toolbar>
</template>

<script>
import { debounce } from "debounce";

export default {
  data() {
    return {
      inputValue: ""
    };
  },
  methods: {
    searchInput: debounce(function() {
      this.$store.dispatch("fetchPackages", this.inputValue);
    }, 800)
  }
};
</script>

<style>
.v-text-field__details {
  display: none !important;
}
</style>