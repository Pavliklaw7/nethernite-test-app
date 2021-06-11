<template>
  <div class="table-wrapper">
    <v-data-table
      v-if="packs.length"
      :headers="headers"
      :items="packs"
      :items-per-page="10"
      loading-text="Loading... Please wait"
      class="elevation-1"
      @click:row="openPackage"
    ></v-data-table>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      inputValue: "",
      headers: [
        {
          text: "Package name",
          align: "start",
          sortable: false,
          value: "package.name"
        },
        { text: "Description", value: "package.description" },
        { text: "Tags", value: "package.keywords" }
      ],
      pack: {
        type: Object,
        required: true
      }
    };
  },
  methods: {
    ...mapMutations(["setCurrentPackage", "showDialog", "hideDialog"]),
    openPackage(value) {
      console.log("value", JSON.parse(JSON.stringify(value)));
      this.setCurrentPackage(JSON.parse(JSON.stringify(value)));
      this.showDialog();
    }
  },
  computed: {
    packs() {
      const packs = JSON.parse(JSON.stringify(this.$store.state.packages));

      return packs.map((e, i, arr) => {
        if (e.package.keywords != undefined) {
          e.package.keywords = e.package.keywords.map(e => {
            return " " + e;
          });
        }

        return arr[i];
      });
    }
  }
};
</script>
<style>
</style>
