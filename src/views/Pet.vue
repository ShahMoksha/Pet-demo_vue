<template>
  <div>
    <h1>{{animal.name}} ({{$route.params.species}})</h1>
    <P>Age: {{animal.age}} years old</P>
    <P>Breed: {{animal.breed}}</P>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      animal: {}
    };
  },
  computed: {
    ...mapState(["cats", "dogs"])
  },
  mounted() {
    // dbt
    const animal = this[this.$route.params.species][this.$route.params.id];
    console.log(animal, "888888888888888888888888");
    this.animal = animal;
  }
};
</script>
