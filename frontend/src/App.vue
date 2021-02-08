<template>
  <div class="container"> 
    <router-link to="/">Home</router-link><br>
    <router-link to="/about">About</router-link>

    <router-view />

    <h1>Todos</h1>
    <div class="input_form">
      <form action="" method="post">
        <input type="text" name="body" class="" placeholder="やらなければいけないこと">
      </form>
    </div>
    <table border="1">
      <tr>
        <td class="input_class">
          <input type="checkbox" checked="checked" name="check" id="new_todo_form">
        </td>
        <td>
          ああああああああああああああああ
        </td>
        <td class="delete_class">
          <button type="submit">削除</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>

</script>


<style lang="scss">
h1{
    background-color: #007bff;
    color: white;
    padding: 10px;
    margin-top: 20px!important;
}


input{
	width: 97%;
	padding: 10px;
}

.input_class{
	padding: 7px;
}

.input_form{
	text-align: center;
}

table{
	margin-top: 10px;
	width: 100%;
}

td.delete_class{
	text-align: center;
}
</style>
