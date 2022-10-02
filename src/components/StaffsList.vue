<template>
  <v-layout v-resize="onResize" class="rounded-lg" column>
    <v-data-table
      :headers="headersForStaff"
      :items="staffs"
      :search="search"
      :sort-by="['name']"
      :class="{ mobile: isMobile }"
      class="rounde-lg"
    >
      <template slot="items" slot-scope="props">
        <tr v-if="!isMobile">
          <td>{{ item.img }}</td>
          <td class="text-xs-right">{{ item.name }}</td>
          <td class="text-xs-right">{{ item.jobTitle }}</td>
          <td class="text-xs-right">{{ item.email }}</td>
          <td class="text-xs-right">{{ item.phoneNumber }}</td>
          <td class="text-xs-right">
            
          </td>
        </tr>
        <tr v-else>
          <td>
            <ul class="flex-content">
              <li class="flex-item" data-label="Name">{{ item.img }}</li>
              <li class="flex-item" data-label="Calories">
                {{ item.name }}
              </li>
              <li class="flex-item" data-label="Fat (g)">
                {{ item.jobTitle }}
              </li>
              <li class="flex-item" data-label="Carbs (g)">
                {{ item.email }}
              </li>
              <li class="flex-item" data-label="Protein (g)">
                {{ item.phoneNumber }}
              </li>
              <li class="flex-item" data-label="Iron (%)">
                <!-- {{ props.item.iron }} -->
                Hio
              </li>
            </ul>
          </td>
        </tr>
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
    </v-data-table>
  </v-layout>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "StaffsList",
  data() {
    return {
      headersForStaff: [
        {
          text: "",
          align: "start",
          value: "img",
        },
        {
          text: "Name",
          value: "name",
        },
        { text: "Job", value: "jobTitle", sortable: false },
        { text: "Email", value: "email" },
        { text: "Phone Number", value: "phoneNumber", sortable: false },
        { text: "Actions", value: "actions", sortable: false },
      ],
      selected: [],
      search: "",
      isMobile: false,
    };
  },
  props: ["staffs"],
  methods: {
    goToEmployeePage(staff) {
      this.$router.push({
        name: "staffDetails",
        params: { id: staff.id, staff: staff },
      });
    },
    ...mapActions(["deleteStaff"]),
    onResize() {
      if (screen.width < 769) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    },
    toggleAll() {
      if (this.selected.length) this.selected = [];
      else this.selected = this.desserts.slice();
    },
    changeSort(column) {
      console.log(column);
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending;
      } else {
        this.pagination.sortBy = column;
        this.pagination.descending = false;
      }
    },
  },
};
</script>

<style scoped>
.mobile {
  color: #333;
}

@media screen and (max-width: 768px) {
  .mobile table.v-table tr {
    max-width: 100%;
    position: relative;
    display: block;
  }

  .mobile table.v-table tr:nth-child(odd) {
    border-left: 6px solid deeppink;
  }

  .mobile table.v-table tr:nth-child(even) {
    border-left: 6px solid cyan;
  }

  .mobile table.v-table tr td {
    display: flex;
    width: 100%;
    border-bottom: 1px solid #f5f5f5;
    height: auto;
    padding: 10px;
  }

  .mobile table.v-table tr td ul li:before {
    content: attr(data-label);
    padding-right: 0.5em;
    text-align: left;
    display: block;
    color: #999;
  }
  .v-datatable__actions__select {
    width: 50%;
    margin: 0px;
    justify-content: flex-start;
  }
  .mobile .theme--light.v-table tbody tr:hover:not(.v-datatable__expand-row) {
    background: transparent;
  }
}
.flex-content {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.flex-item {
  padding: 5px;
  width: 50%;
  height: 40px;
  font-weight: bold;
}
</style>
