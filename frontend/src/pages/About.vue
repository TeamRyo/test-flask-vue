<template>
  <div id="todo">
    <div>
      <h2>Aboutコンポーネント</h2>
      <p v-text="todo"></p>
      <input @click="getTodo" type="button" value="textを取得">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ToDo',
    data() {
      return {
        todo: ''
      }
    },
    methods: {
      getTodo() {
        this.todo = '取得中';
        this.$axios.get("https://httpbin.org/get")
          .then((response)=> {
            this.todo = response.data.origin;
          })
          .catch((response) => {
            this.todo = '買い物に行く';
            console.log(response);
          });
      }
    }
  }
</script>