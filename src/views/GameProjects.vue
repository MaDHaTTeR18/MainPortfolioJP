<template>
  <div>
    <h1>プロジェクト</h1>

    <div style="margin-bottom: 30px;">
      以下は、私が作成した、または多大な貢献をしたプロジェクトの一部です。
    </div>

    <ProjectsList v-bind:projects="projects" />

    <div style="margin-top: 20px;">
      見るべきことがもっとあります <a target="_blank" href="https://github.com/MaDHaTTeR18">Github</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData.ts";

export default Vue.extend({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: gameProjectsData,
    };
  },
});
</script>
