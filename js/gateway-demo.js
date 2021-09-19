var vendorListVar = [{
        "name": "Vega Delivery",
        "id": "vega",
        "eta": "6th October, 2021",
        "cost": "50"
    },
    {
        "name": "ShadowFax",
        "id": "shadowfax",
        "eta": "7th October, 2021",
        "cost": "40"
    },
    {
        "name": "Wefast",
        "id": "wefast",
        "eta": "6th October, 2021",
        "cost": "70"
    },
    {
        "name": "Dunzo",
        "id": "dunzo",
        "eta": "6th October, 2021",
        "cost": "80"
    },
]

var app1 = new Vue({
    el: '#main-page-container-id',
    delimiters: ['[[', ']]'],
    data: {
        'pageStatus': 'cart',
        'vendorList': vendorListVar,
        'allVendorList': vendorListVar,
        'selectedVendor': {
            'name': '',
            'id': '',
            'cost': 0,
            'eta': '',
        },
        'options': {
            'color': '#FFFFFF',
            'limit': 4,
            'companyName': '',
            'favVendors': [],
            'discount': 0,
            'freeDelivery': false,
            'selfDelivery': false,
            'selfDeliveryCost': 0,
        },
    },
    methods: {
        CheckoutButton: function () {
            this.pageStatus = 'gateway';
            this.selectedVendor = {
                'name': '',
                'id': '',
                'cost': 0,
                'eta': '',
            };
        },
        RadioClick: function (vendorid, vendorname, vendoreta, vendorcost, event) {

            let allVendorContainers = document.getElementsByClassName('vendor-container');

            for (let i = 0; i < allVendorContainers.length; i++) {
                allVendorContainers[i].classList.remove('vendor-container-active');
            };

            let targetElement = event.target.parentElement.parentElement.parentElement;
            targetElement.classList.add('vendor-container-active');

            console.log(vendorid);

            this.selectedVendor.id = vendorid;
            this.selectedVendor.name = vendorname;
            this.selectedVendor.eta = vendoreta;
            this.selectedVendor.cost = parseFloat(vendorcost);
        },
        ConfirmDelivery: function () {
            this.pageStatus = 'success';
        },
        OpenDocumentation: function () {
            document.getElementById("document-container-id").style.display = "block";
            document.getElementById("options-container-id").style.display = "none";
            document.getElementById("gateway-container-id").style.display = "none";
        },
        OpenOptions: function () {
            document.getElementById("document-container-id").style.display = "none";
            document.getElementById("options-container-id").style.display = "block";
            document.getElementById("gateway-container-id").style.display = "none";
        },
        OpenGateway: function () {
            document.getElementById("document-container-id").style.display = "none";
            document.getElementById("options-container-id").style.display = "none";
            document.getElementById("gateway-container-id").style.display = "block";
        },
    },
});