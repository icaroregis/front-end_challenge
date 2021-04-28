<template>
  <section>
    <div class="container-init">
      <h2>Painel de Clientes</h2>
    </div>

    <div class="user-list">
      <div class="container">
        <UsersTable @deleteUser="removeUserFromArray" :users="users" />
        <div class="div-button">
          <button @click="handleNavigateToCreate">Novo</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import UsersTable from '../components/UsersTable';
import store from '../store/store';

export default {
  name: 'UserList',
  components: {
    UsersTable,
  },

  data() {
    return {};
  },
  computed: {
    users() {
      return store.state.users;
    },
  },
  mounted() {
    store.dispatch('getUsers');
  },
  methods: {
    handleNavigateToCreate() {
      this.$router.push('/create/');
    },
    removeUserFromArray(index) {
      store.dispatch('delete', index);
    },
  },
};
</script>

<style lang="scss" scoped>
.user-list {
  margin-top: 50px;
  display: block;
  justify-content: center;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--white);
    border-radius: 10px;
  }
}

.container-init {
  height: 70px;
  width: 100%;
  background-color: var(--black);
  display: flex;
  color: var(--white);
  font-weight: bold;
  justify-content: center;
  align-items: center;
  font-size: 25px;
}

.div-button {
  max-width: 900px;
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 15px;
}
</style>
