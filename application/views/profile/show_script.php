<script src="<?php echo base_url("assets/js/vue.js"); ?>"></script>
<script src="<?php echo base_url("assets/js/vue-resource.js"); ?>"></script>

<script>
    var profileCom = Vue.component('publications', {
        template: '#publication-template',

        data: function () {
            return {
                list: [],
                totalPage: 0,
                currentPage: 1,
                perPage: 10,
                from: 0,
                to: 0,
                total: 0,
                staffId: <?php echo $user['id']; ?>,
                prevClick: function (e) {
                    if(this.currentPage <= 1){
                        e.preventDefault();
                        console.log('prevClick first if', this.currentPage);
                    }else{
                        this.currentPage -= 1;
                        this.pageReCreate();
                    }
                }.bind(this),
                nextClick: function (e) {
                    if(this.currentPage >= this.totalPage){
                        e.preventDefault();
                        console.log('nextClick if current: ', this.currentPage, ' total:', this.totalPage);
                    }else{
                        this.currentPage += 1;
                        this.pageReCreate();
                    }
                }.bind(this),
                firstPageClick: function (e) {
                    if(this.currentPage <= 1){
                        e.preventDefault();
                        console.log('firstpageClick first if', this.currentPage);
                    }else{
                        this.currentPage = 1;
                        this.pageReCreate();
                    }
                }.bind(this),
                lastPageClick: function (e) {
                    if(this.currentPage >= this.totalPage){
                        e.preventDefault();
                        console.log('lastPageClick if current: ', this.currentPage, ' total:', this.totalPage);
                    }else{
                        this.currentPage = this.totalPage;
                        this.pageReCreate();
                    }
                }.bind(this),
                preventDef: function (e) {
                    e.preventDefault();
                },
                perPageChange: function (e) {
                    var p_val = 10;
                    $( "#per-page-select option:selected" ).each(function() {
                        p_val = parseInt($(this).val());
                    });
                    this.perPage = p_val;
                    this.currentPage = 1;
                    this.pageReCreate();
                }.bind(this),
                pageReCreate: function () {
            $.getJSON('<?php echo site_url("api/publication"); ?>', {page: this.currentPage, per_page: this.perPage, staff_id: this.staffId}, function (publications) {
                    this.list = publications.data;
                    this.totalPage = publications.last_page;
                    this.currentPage = publications.current_page;
                    this.from = publications.from;
                    this.to = publications.to;
                    this.total = publications.total;
                }.bind(this));
                }
            };
        },
        methods: {
            urlExists : function(url)
            {
                var http = new XMLHttpRequest();
                try{
                    http.open('HEAD', url, false);
                    http.send();
                }catch(err){}
                return http.status!=404;
            }
        },
        created: function  () {
            $.getJSON('<?php echo site_url("api/publication"); ?>', {page: this.currentPage, per_page: this.perPage, staff_id: this.staffId}, function (publications) {
                this.list = publications.data;
                this.totalPage = publications.last_page;
                this.currentPage = publications.current_page;
                this.from = publications.from;
                this.to = publications.to;
                this.total = publications.total;
            }.bind(this))
            .fail(function (data) {
                this.pageReCreate();
            }.bind(this));
        },

        computed: {
            currentShow: function () {
                return this.list.length;
            }
        }
    });

    var vm = new Vue({
        el: 'body'
    });

</script>