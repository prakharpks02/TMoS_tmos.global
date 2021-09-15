var app1 = new Vue({
    el: '#main-page-container-id',
    delimiters: ['[[', ']]'],
    data: {
        'pageStatus':'gateway',
    },
    methods: {
        CheckoutButton: function () {
            this.pageStatus = 'gateway';
        },
    },
    mounted() {
        
    },
});