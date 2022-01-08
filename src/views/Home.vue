<template>
  <div>
    <div v-if="loading">
      <PageLoading />
    </div>

    <transition>
      <div v-if="api" class="conteudo">
        <div>
          <h1>Sobre a {{ api.titulo }}</h1>
          <p>{{ api.descricao }}</p>
          <router-link class="btn-cursos" tag="button" to="/cursos"
            >Cursos</router-link
          >
          <div>
            <h2>Avaliacoes</h2>
            <ul class="lista-avaliacao">
              <li v-for="avaliacao in api.avaliacoes" :key="avaliacao.nome">
                <h3>{{ avaliacao.nome }}</h3>
                <p>{{ avaliacao.descricao }}</p>
              </li>
            </ul>
          </div>
        </div>
        <img src="@/assets/aprender.png" alt="Aprender" />
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "Home",

  mixins: [fetchData],

  created() {
    this.fetchData("/home");
  },
};
</script>



<style scoped>
.btn-cursos {
  border: none;
  background: #4b8;
  cursor: pointer;
  border-radius: 4px;
  color: #fff;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
  padding: 15px 30px;
  font-size: 1rem;
  font-family: "Avenir", Helvetica, sans-serif;
  margin: 10px 0 40px;
}

.lista-avaliacao {
  margin-top: 40px;
}

.lista-avaliacao li {
  display: block;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  padding: 10px 20px;
  margin-bottom: 10px;
  border-radius: 4px;
}
</style>
