<section id="mastheadContainer" class="banner profile">
    <div class="container">
        <div class="row-fluid">
            <div class="span12">
                <div class="image-holder">
                    <img src="<?php echo (file_exists($user['image_path']))?'../../'.$user['image_path']:base_url("assets/images/profile.png"); ?>" alt="Nima Aghaee Pour"
                         data-empty-src="<?php echo base_url("assets/images/profile.png"); ?>"/>
                </div>
                <div class="nameAndTitle">
                    <h1><?php echo $user['first_name_en']; ?> <?php echo $user['last_name_en'] . " " . $user['education_extra']; ?></h1>
                    <h2 style="font-size: 1.5em;letter-spacing: 0;"><?php echo $user['first_name_th'] . " " . $user['last_name_th'] . " " .($user['position']?"(".$user['position'].")":""); ?><br/></h2>
                </div>
                <ul class="unstyled">
                    <li>
                        <a href="#" target="_blank" rel="nofollow">
                  <span class="icon-background">
                    <i class="icon-print"></i>
                  </span>Print Profile
                        </a>
                    </li>
                    <li>
                        <a href="#send-mail-to<?php echo $user['email1']; ?>" rel="nofollow" data-bypass>
                  <span class="icon-background">
                    <i class="icon-envelope-alt"></i>
                  </span>Email Profile
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>

<section id="tabbedLayoutContainer">
    <nav class="navbar">
        <div class="navbar-inner">
            <div class="container">

                <!-- .btn-navbar is used as the toggle for collapsed navbar content -->
                <a class="btn btn-navbar" data-toggle="collapse" data-target="#tabbedLayoutContainer .nav-collapse">
                    <span class="nav-label">Profile Tab Menu</span>
                    <i class="icon-chevron-down"></i>
                </a>

                <div class="nav-collapse collapse">
                    <ul class="nav nav-tabs tabs4">
                        <li class="active">
                            <a id="bioTabLink" href="#?tab=bio" class="no-trigger" rel="nofollow" data-toggle="tab"
                               data-target="#bio">Bio</a>
                        </li>
                        <li class="">
                            <a id="researchAndScholarshipTabLink" href="#?tab=research-and-scholarship"
                               class="no-trigger" rel="nofollow" data-toggle="tab"
                               data-target="#research-and-scholarship">Research</a>
                        </li>
                        <li class="">
                            <a id="teachingTabLink" href="#?tab=teaching" class="no-trigger" rel="nofollow"
                               data-toggle="tab" data-target="#teaching">Teaching</a>
                        </li>
                        <li class="">
                            <a id="publicationsTabLink" href="#?tab=publications" class="no-trigger" rel="nofollow"
                               data-toggle="tab" data-target="#publications">Publications</a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </nav>

    <div class="container breakout-phone">
        <div class="tab-content">
            <div id="bio" class="card tab-pane active">
                <h2>Bio</h2>

                <div class="row-fluid">
                    <div class="span8 page-content">
                        <div id="professionalEducationContent" class="content-section">
                            <h3>Educations</h3>
                            <hr/>
                            <p><?php echo $user['education_details'];?></p>
                        </div>

                    </div>
                    <div class="span4 side-bar">
                        <div id="contactInfoContent" class="content-section contact-info bg-icon-user">
                            <div><h3>Contact</h3>
                                <hr>
                                <ul class="unstyled section-listing use-link-icons">
                                    <li>
                                        <div><span class="icon-background"><i class="icon-user"></i></span>
                                            <div class="contact-info primary">
                                                <label>Email</label>
                                                <a href="mailto:<?php echo $user['email1'];?>" class="email" rel="nofollow"
                                                   data-bypass=""><?php echo $user['email1'];?></a>
                                                   <br>
                                                <a href="mailto:<?php echo $user['email2'];?>" class="email" rel="nofollow"
                                                   data-bypass=""><?php echo $user['email2'];?></a>
                                                <ul class="unstyled phone-number">
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div><span class="icon-background"><i class="icon-stethoscope"></i></span>
                                            <div class="contact-info clinical">
                                                <label>Office</label>
                                                <span><?php echo $user['office_details'];?></span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div id="linksContent" class="content-section links bg-icon-link">
                            <div><h3>Links</h3>
                                <hr>
                                <ul class="unstyled section-listing use-link-icons">
                                    <li class="external-link"><span class="icon-background"><i
                                                class="icon-download-alt"></i></span><a href="#" class="nihBiosketch"
                                                                                        target="_blank" data-bypass="">NIH
                                            Biosketch DOC</a></li>
                                    <li class="external-link"><span class="icon-background"><i
                                                class="icon-link"></i></span><a href="#" class="Lab Site"
                                                                                target="_blank" data-bypass="">Some
                                            Links</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="research-and-scholarship" class="card tab-pane">
                <div><h2>Research &amp; Scholarship</h2>

                    <div class="row-fluid">
                        <div class="span8 page-content">
                            <div id="currentResearchAndScholarlyInterestsContent" class="content-section">
                                <div><h3>Current Research and Scholarly Interests</h3>
                                    <hr>
                                    <p><?php echo $user['research_of_interest'];?></p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="teaching" class="card tab-pane ">
                <div><h2>Teaching</h2>

                </div>
            </div>

            <div id="publications" class="card tab-pane ">
                <div><h2>Publications</h2>

                    <div class="row-fluid">
                        <div class="span12 page-content">
                            <div id="featuredPublicationsContent"></div>
                            <div id="allPublicationsContent">
                                <div class="content-section"><h3>All Publications</h3>
                                    <hr>
         <!--                            <ul class="section-listing articles" data-count="42">
                                        
                                    </ul> -->
                                    <!-- research template -->
                                    <publications>
                                    </publications>
                                    <!-- end research template -->
                                </div>
                            </div>
                            <div id="journalArticlesContent"></div>
                            <div id="booksContent"></div>
                            <div id="proceedingsContent"></div>
                            <div id="presentationsContent"></div>
                            <div id="paginationContent">
                                <div class="btn-toolbar btn-block">
                                    <div class="btn-group ">
                                        <a class="btn btn-small btn-first-page disabled">
                                            <span class="hidden-phone">First</span>
                                            <span class="hidden-desktop hidden-tablet icon-double-angle-left"></span>
                                        </a>
                                    </div>
                                    <div class="btn-group">
                                        <a class="btn btn-small btn-previous-page disabled"><i
                                                class="icon-chevron-left"></i></a>
                                        <a class="btn btn-small btn-page-jumper" rel="popover">1/5</a>
                                        <a class="btn btn-small btn-next-page "><i class="icon-chevron-right"></i></a>
                                    </div>
                                    <div class="btn-group">
                                        <a class="btn btn-small btn-last-page ">
                                            <span class="hidden-phone">Last</span>
                                            <span class="hidden-desktop hidden-tablet icon-double-angle-right"></span>
                                        </a>
                                    </div>
                                    <div class="btn-group">
                                        <button class="btn btn-small result-per-page dropdown-toggle"
                                                data-toggle="dropdown">
                                            <span class="hidden-phone">10 Results / Page</span>
                                            <span class="hidden-desktop hidden-tablet">10 / Page</span>
                                            <span class="icon-caret-down"></span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li><a class="view-10">10</a></li>
                                            <li><a class="view-20">20</a></li>
                                            <li><a class="view-50">50</a></li>
                                            <li><a class="view-100">100</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>
</section>

<template id="publication-template">
    <ul class="section-listing articles">
        <li class="publication featured article" v-for="publication in list">
            <cite>
                <span class="title">
                    <span>{{publication.title}}</span>
                        <i>{{publication.journal}}</i>
                </span>
                <span class="authors collapse-partial in" data-toggle="collapsePartial">
                    <span class="line-clamp" style="height: auto;">{{publication.authors}}<a class="toggle-button" data-bypass="" style="display: none;">
                        <i class="icon-caret-left"></i>Hide
                    </a>
                    </span>
                </span>
                <span class="details">
                    <span class="year">{{publication.year}}</span>; <span class="volume">{{publication.volume}}</span><span class="pages">: {{publication.pages}}</span>
                </span>
            </cite>
            <a data-bypass="" data-toggle="collapse"
                data-target="[data-collapsible=publicationc{{publication.id}}]">
                <i class="icon-caret-right"></i><span>More</span>
            </a>
            <div data-collapsible="publicationc{{publication.id}}" class="collapse indented-collapsible-section">
                <div class="detail">
                    <h4>Abstract</h4>
                    <p class="abstract">{{publication.abstract}}</p>
                    <p class="pub-med" v-if="publication.pubmed_link">
                        <span><i class="icon-external-link"></i>View details for <a
                            href="http://www.ncbi.nlm.nih.gov/pubmed/{{publication.pubmed_link}}"
                            target="_blank">PubMedID {{publication.pubmed_link}}</a>
                        </span>
                    </p>
                </div>
            </div>
        </li>
    </ul>
</template>