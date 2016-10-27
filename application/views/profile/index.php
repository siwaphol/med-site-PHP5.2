<section class="banner">
    <div class="container">
        <div class="row-fluid"></div>
    </div>
</section>
<div class="container breakout-phone">
    <div class="row-fluid">
        <section class="card span8">
            <div id="browseListContent">
                <h1><span class="loading">Department of Microbiology</span></h1>
                <hr/>
                <profiles></profiles>

            </div>
        </section>
        <aside id="filterContent" class="span4 hidden-phone">
            <h1>Show Only</h1>
            <hr/>
            <div id="filterItems" class="accordian">
                <div class="filter-group accordion-group">
                    <h2 class="accordion-heading">
                        <a class="accordian-toggle" href="<?php echo site_url("/browse"); ?>">All Profiles</a>
                    </h2>
                    <div class="accordian-body">
                        <ul class="unstyled accordian-inner affiliation">
                            <li class=" ">
                                <a href="<?php echo site_url("/browse"); ?>">
                                    Staff
                                </a>
                            </li>
                            <li class=" ">
                                <a href="#showPostdocs">
                                    Postdocs
                                </a>
                            </li>
                            <li class=" ">
                                <a href="#showGraduate">
                                    Graduate Students
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="filter-group accordion-group">
                    <h2 class="accordion-heading">
                        <a class="accordian-toggle" href="#findFirstNameByFirstCapital">First Name</a>
                    </h2>
                    <div class="accordian-body">
                        <ul class="unstyled accordian-inner lastInitial">
                            <?php foreach (range('A', 'Z') as $char) { ?>
                                <li class=" ">
                                    <a href="<?php echo site_url("browse"); ?>?c=<?php echo $char;?>">
                                        <?php echo $char;?>
                                    </a>
                                </li>
                            <?php }?>
                        </ul>
                    </div>
                </div>
            </div>
        </aside>
    </div>
</div>

</div>
</div>
<!-- content footer -->
</div>

<template id="profile-template">
    <h2 class="subhead">Showing {{from}}-{{to}} of {{total}} Results</h2>
    <ul class="unstyled list-items">
        <li v-for="profile in list">
            <div class="mini-profile media">
                <a href="#">
                    <img v-if="profile.image_path" v-bind:src="profile.image_path" class="pull-left"/>
                    <img v-else class="pull-left" src="" alt="" data-empty-src="<?php echo base_url("assets/images/profile.png"); ?>" />
                </a>
                <div class="media-body">
                    <a href="profile/{{profile.id}}" class="media-heading">
                        <h4>{{profile.first_name_en}} {{profile.last_name_en}}</h4>
                        <h5>{{profile.position}}</h5>
                    </a>
                    <p class="hidden-phone" data-toggle="collapsePartial" data-lines="4">
                        <strong class="title">{{profile.body}}</strong>
                    </p>
                </div>
            </div>
        </li>
    </ul>

    <div id="pagination">
        <div class="btn-toolbar btn-block">
            <div class="btn-group ">
                <a class="btn btn-small btn-first-page" @click="firstPageClick">
                    <span class="hidden-phone">First</span>
                    <span class="hidden-desktop hidden-tablet icon-double-angle-left"></span>
                </a>
            </div>
            <div class="btn-group">
                <a class="btn btn-small btn-previous-page"  @click="prevClick"><i class="icon-chevron-left"></i></a>
                <a class="btn btn-small btn-page-jumper" @click="preventDef" rel="popover">{{currentPage}}/{{totalPage}}</a>
                <a class="btn btn-small btn-next-page " @click="nextClick"><i class="icon-chevron-right"></i></a>
            </div>
            <div class="btn-group">
                <a class="btn btn-small btn-last-page " @click="lastPageClick">
                    <span class="hidden-phone">Last</span>
                    <span class="hidden-desktop hidden-tablet icon-double-angle-right"></span>
                </a>
            </div>
            <div class="btn-group dropup">
                <select @change="perPageChange" id="per-page-select">
                    <option value="10">10 Results / Page</option>
                    <option value="20">20 Results / Page</option>
                    <option value="50">50 Results / Page</option>
                    <option value="100">100 Results / Page</option>
                </select>
            </div>
        </div>
    </div>
</template>