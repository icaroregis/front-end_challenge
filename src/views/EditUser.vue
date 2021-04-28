<template>
  <div class="section-init">
    <div class="header-init">
      <h2>Painel de Cadastro</h2>
    </div>
    <div class="edit-user">
      <div class="edit-header">
        <h1 class="child-edit-header">CADASTRAR NOVO USUÁRIO</h1>
      </div>

      <div class="edit-user-child">
        <div class="container">
          <div class="session-image-button">
            <div class="div-child">
              <strong>Foto</strong>
              <img class="circle" :src="foto.url" />
            </div>
            <button class="modify-button">
              Modificar
            </button>
          </div>

          <form @submit.prevent="handleSubmit">
            <div class="div-form">
              <div class="div-form-child">
                <label for="name">Nome</label>
                <input
                  class="div-input"
                  v-model="users.name"
                  type="text"
                  placeholder="Digite seu nome"
                  required
                />
              </div>
              <div class="div-form-child">
                <label for="email">E-mail</label>
                <input
                  class="div-input"
                  v-model="users.email"
                  type="email"
                  placeholder="me@example.com"
                  required
                />
              </div>
            </div>

            <div class="div-form">
              <div class="div-form-child">
                <label for="setor">Setor</label>
                <input
                  class="div-input"
                  v-model="users.department"
                  type="text"
                  placeholder="Selecione um item"
                  required
                />
              </div>
              <div class="div-form-child">
                <label for="cargo">Cargo</label>
                <input
                  class="div-input"
                  v-model="users.occupation"
                  type="text"
                  placeholder="Selecione um item"
                  required
                />
              </div>
            </div>

            <div class="special-div">
              <label for="funcao">Função</label>
              <input
                class="div-input"
                v-model="users.role"
                type="text"
                placeholder="Selecione um item"
                required
              />
            </div>
          </form>
          <div class="div-button">
            <button
              class="salv-button"
              type="submit"
              @click.prevent="createNewUser"
            >
              Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store/index';

export default {
  name: 'CreateUser',
  data() {
    return {
      users: {
        name: '',
        email: '',
        department: '',
        occupation: '',
        role: '',
        active: false,
      },
      foto: {
        url:
          'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max',
        titulo: 'foto',
      },
    };
  },
  methods: {
    createNewUser(newUser) {
      this.users = newUser;
      console.log(newUser);
      store.dispatch('addNewUser', newUser);
      this.$router.push({ name: 'UserList' });
    },
  },
};
</script>

<style lang="scss" scoped>
.section-init {
  .header-init {
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
  .edit-user {
    max-width: 900px;
    width: 100%;
    height: 607px;
    margin: 50px auto;
    background-color: var(--white);
    border-radius: 10px;

    .edit-header {
      font-size: 8px;
      width: 100%;
      display: flex;
      padding: 20px;
      justify-content: flex-start;
      background-color: var(--grey-light);

      .child-edit-header {
        color: var(--edit-title);
      }
    }

    .div-button {
      flex: 1;
      max-width: 900px;
      font-size: 8px;
      width: 100%;
      padding: 20px;

      .salv-button {
        position: absolute;
        right: 420px;
        bottom: 70px;
      }
    }

    .edit-user-child {
      max-width: 750px;
      height: 450px;
      width: 100%;
      margin: 58px auto;

      .container {
        max-width: 750px;
        width: 100%;

        .session-image-button {
          display: flex;
          justify-content: flex-start;
          align-items: end;

          .modify-button {
            position: absolute;
            left: 550px;
            bottom: 478px;
            background-color: var(--white);
            border: 1px solid var(--edit-title);
            color: var(--edit-title);
          }

          .div-child {
            display: flex;
            flex-direction: column;
            margin-right: 20px;

            .circle {
              position: relative;
              width: 40px;
              height: 40px;
              border-radius: 50%;
              margin-top: 10px;
            }
          }
        }
      }
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-top: 15px;

      .div-form {
        display: flex;
        justify-content: space-between;
        max-width: 800px;
        width: 100%;

        .div-form-child {
          max-width: 800px;
          width: 100%;
          margin-right: 18px;

          .div-input {
            max-width: 350px;
            outline: 0;
            border: 1px solid var(--edit-title);
            width: 100%;
            margin-bottom: 16px;
            padding: 16px;
            border-radius: 5px;
          }
        }
      }

      .special-div {
        max-width: 750px;
        width: 100%;
        display: flex;
        flex-direction: column;

        .div-input {
          max-width: 340px;
          outline: 0;
          border: 1px solid var(--edit-title);
          width: 100%;
          margin-bottom: 16px;
          padding: 16px;
          border-radius: 5px;
        }
      }

      .check {
        display: flex;
        align-items: center;
        margin-bottom: 20px;

        input {
          margin-right: 5px;
        }
      }
    }
  }
}
</style>
