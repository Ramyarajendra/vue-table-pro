<template>
    <div>
        <vuetable ref="vuetable"
                  api-url="https://vuetable.ratiw.net/api/users"
                  :fields="['id','name', 'email', 'birthdate']" detail-row-component="my-detail-row" 
                  detail-row-id="id" detail-row-transition="expand" class="is-fullwidth" @vuetable:cell-clicked="onCellClicked"></vuetable>
        
    </div>
</template>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
    import Vuetable from 'vuetable-2/src/components/Vuetable';
    import DetailRow from './DetailRow';
    import NewPage from './NewPage'
    import Vue from 'vue';
    Vue.component('my-detail-row', DetailRow)
    export default {
        name:'HomePage',
        components: {
            Vuetable,
            NewPage
        },
        methods: {
            onCellClicked(data, field, event) {
                this.$refs.vuetable.toggleDetailRow(data.id)
            },
        }
    } 
</script>
<style>
    .detail-row {
        margin-left: 40px;
    }
</style>