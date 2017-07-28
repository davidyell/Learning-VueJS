Vue.component('task', {
    template: '<li><slot></slot></li>'
});

Vue.component('telesales-number', {
    props: ['number'],
    template: '<a v-bind:href="\'tel:\' + number" v-bind:title="\'Phone \' + number">Call us today on {{ number }}</a>',
});

Vue.component('sales-table', {
    template: '<table summary="sales-table" cellspacing="0" cellpadding="0"><thead><tr><th>Date</th><th>Sales</th></tr></thead><tbody><tr v-for="sale in salesData"><td>{{ sale.date }}</td><td>{{ sale.sales | numberFormat }}</td></tr></tbody></table>',
    data: function() {
        return {
            salesData: [
                { date: 'Today', sales: 4321 },
                { date: 'Yesterday', sales: 3812 },
                { date: 'Wednesday', sales: 2512 },
                { date: 'Tuesday', sales: 4723 },
                { date: 'Monday', sales: 1992 },
            ]
        }
    },
    filters: {
        numberFormat: function (value) {
            return value.toLocaleString('en-GB');
        }
    }
});

new Vue({
    el: '#example'
});