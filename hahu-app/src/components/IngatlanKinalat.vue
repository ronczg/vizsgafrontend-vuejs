<template>
  <div>
    <vue-good-table
      :columns="columns"
      :rows="rows"/>
  </div>
</template>

<script>
import Axios from 'axios';
export default {
  name: 'my-component',
  data(){
    return {
      columns: [
        {
          label: 'Kategória',
          field: 'Kategórianev',
        },
        {
          label: 'Leírás',
          field: 'leiras',
        },
        {
          label: 'Hirdetés dátuma',
          field: 'hirdetesdatuma',
          type: 'date',
          dateInputFormat: 'yyyy.MM.dd',
          dateOutputFormat: 'yyyy.MM.dd',
        },
        {
          label: 'Tehermentes',
          field: 'tehermentes',
          type: 'boolean',
        },
        
        {
          label: 'Kép',
          field: 'kepurl',
        },
      ],
      rows: [
       
      ],
    };
  },
  created(){
      Axios
      .get("http://localhost:5000/api/ingatlan")
      .then(response => {
          this.rows = response.data;
      })
      .catch( err => console.log(err))
  }
};
</script>