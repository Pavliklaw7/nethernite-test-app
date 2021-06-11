<template>
  <v-dialog
    v-model="$store.getters.getDialogVisible"
    max-width="600"
    @click:outside="$store.commit('hideDialog')"
  >
    <v-card class="p-10">
      <v-card-text>
        <div v-if="full_Name">
          <p>Package name:</p>
          <p class="subtitle-1 text--primary mx-auto">{{ full_Name }}</p>
        </div>
        <div>
          <p>Description:</p>
          <p class="subtitle-1 text--primary mx-auto">{{ description }}</p>
        </div>
        <div>
          <p>Tags:</p>
          <p class="subtitle-1 text--primary mx-auto">
            {{ keywords }}
          </p>
        </div>
        <div>
          <p>Home page:</p>
          <p class="subtitle-1 text--primary mx-auto">{{ home_page }}</p>
        </div>
        <div v-if="npm_page">
          <p>NPM link:</p>
          <p class="subtitle-1 text--primary mx-auto">{{ npm_page }}</p>
        </div>
        <div v-if="publisher">
          <p>Publisher:</p>
          <p class="subtitle-1 text--primary mx-auto">
            {{ publisher.username }}
          </p>
          <p class="subtitle-1 text--primary mx-auto">{{ publisher.email }}</p>
        </div>
        <div v-if="version">
          <p>Version:</p>
          <p class="subtitle-1 text--primary mx-auto">{{ version }}</p>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  computed: {
    full_Name() {
      return this.$store.getters.getCurrentPackage.package.name;
    },
    description() {
      return this.$store.getters.getCurrentPackage.package.description;
    },
    keywords() {
      return this.$store.getters.getCurrentPackage.package.keywords.join(", ");
    },
    home_page() {
      return this.$store.getters.getCurrentPackage.package.links.homepage;
    },
    npm_page() {
      return this.$store.getters.getCurrentPackage.package.links.npm;
    },
    publisher() {
      return this.$store.getters.getCurrentPackage.package.publisher;
    },
    version() {
      return this.$store.getters.getCurrentPackage.package.version;
    }
  }
};
</script>

<style>
</style>
