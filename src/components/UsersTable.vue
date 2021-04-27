<template>
  <div class="div-table">
    <table>
      <thead>
        <tr>
          <th>NOME</th>
          <th>CARGO</th>
          <th>STATUS</th>
          <th class="th-style">FUNÇÃO</th>
          <th>AÇÕES</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(user, index) in users" :key="user.name">
          <td class="circle-photo">
            <div class="div-circle-photo">
              <img class="circle" :src="foto.url" />
            </div>
            <div class="div-circle-list">
              <li>{{ user.name }}</li>
              <li>{{ user.email }}</li>
            </div>
          </td>

          <td>
            <li>{{ user.occupation }}</li>
            <li>{{ user.department }}</li>
          </td>

          <td
            class="td-spacing"
            :style="{
              color: user.active === 1 ? 'var(--green)' : 'var(--red)',
            }"
          >
            <div
              class="style-div"
              :style="{
                backgroundColor:
                  user.active === 1 ? 'var(--green-light)' : 'var(--red-light)',
              }"
            >
              {{ user.active === 1 ? 'Ativo' : 'Inativo' }}
            </div>
          </td>

          <td>
            <li class="li-role">{{ user.role }}</li>
          </td>

          <td>
            <router-link class="edit" :to="`/create/${user.email}`">
              Editar
            </router-link>

            <a @click.prevent="removeUser(index)" class="remove" href="#">
              Excluir
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'UserTable',
  data() {
    return {
      foto: {
        url:
          'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max',
      },
    };
  },
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
  methods: {
    removeUser(index) {
      if (window.confirm('Você realmente quer remover o usuário?')) {
        this.$emit('deleteUser', index);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
table {
  max-width: 910px;
  width: 100%;
  border-spacing: 1px;

  th {
    font-size: 16px;
    padding: 12px 12px;
    text-align: left;
    border-bottom: 1px solid var(--grey-border);
    color: var(--edit-title);
  }

  td {
    font-size: 16px;
    padding: 12px 12px;
    border-width: 200px;
    border-bottom: 1px solid var(--grey-border);
  }

  li {
    list-style: none;
  }

  .edit {
    color: var(--blue);
    margin-right: 1rem;
  }

  .remove {
    color: var(--red);
  }

  .circle {
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .circle-photo {
    display: flex;
    align-items: center;
  }

  .div-circle-photo {
    margin-right: 10px;
  }
}

.div-table {
  max-width: 900px;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 9px;
  margin-top: 10px;
}

.style-div {
  text-align: center;
  border-radius: 5px;
  padding: 4px;
}

.li-role {
  text-align: center;
}

.th-style {
  text-align: center;
}
</style>
