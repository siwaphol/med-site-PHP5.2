<section id="mastheadContainer" class="banner profile">
    <div class="container">
        <div class="row-fluid">
            <div class="span12">
                <div class="image-holder">
                    <img src="<?php echo base_url("assets/images/profile.png"); ?>" alt="Nima Aghaee Pour"
                         data-empty-src="{{asset('images/profile.png')}}"/>
                </div>
                <div class="nameAndTitle">
                    <h1><?php echo $user['first_name_en']; ?> <?php echo $user['last_name_en']; ?></h1>
                    <h2><?php echo $user['position'];?><br/></h2>
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
                        <a href="#send-mail-to<?php echo $user['email']; ?>" rel="nofollow" data-bypass>
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
                               data-target="#research-and-scholarship">Research &amp; Scholarship</a>
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
                        <div id="clinicalFocusContent" class="content-section">
                            <div><h3>Research Focus</h3>
                                <hr>
                                <ul class="section-listing">
                                    <li><span>Infectious Diseases, Pediatric</span></li>
                                    <li><span>Pediatric Infectious Disease</span></li>
                                </ul>
                            </div>
                        </div>

                        <div id="professionalEducationContent" class="content-section">
                            <h3>Educations</h3>
                            <hr/>
                            <ul class="section-listing">
                                <?php foreach($userEducations as $aEd){ ?>
                                <li class="section-list-item">
                                    <div class="description"><?php echo $aEd['education'];?> (<?php echo $aEd['year']; ?>)</div>
                                </li>
                                <?php } ?>
                            </ul>
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
                                                <a href="mailto:email@cmu.ac.th" class="email" rel="nofollow"
                                                   data-bypass="">email@cmu.ac.th</a>
                                                <ul class="unstyled phone-number">
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div><span class="icon-background"><i class="icon-stethoscope"></i></span>
                                            <div class="contact-info clinical">
                                                <label>Office</label>
                                                <span class="office-name">Office Name</span>
                                                <span class="address">address1</span>
                                                <span class="address2">address2</span>
                                                <span class="location">location</span>
                                                <ul class="unstyled phone-number">
                                                    <li><span>Tel: 000000000</span></li>
                                                </ul>
                                                <span class="fax">Fax: 00000000</span>
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
                                    <p>My laboratory studies the strategies pathogens utilize to colonize and subvert
                                        the epithelial barrier. We have focused on the epithelial junctions as a target
                                        for bacterial pathogens, since the cell-cell junctions serve as both a barrier
                                        to infection and also a major control site for epithelial function. In
                                        particular, we are interested in how the gastric pathogen Helicobater pylori may
                                        cause cancer by interfering with cell signaling at the epithelial junctions. We
                                        are also studying how various bacteria cross and invade the epithelium. For
                                        example, we recently found that Listeria monocytogenes targets a specialized
                                        subset of cell-cell junctions at the tip of the intestinal villi to find its
                                        receptor for invasion. We are interested in determining whether this mode of
                                        gastrointestinal invasion of the epithelium is also used by other
                                        gastrointestinal pathogens.</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="teaching" class="card tab-pane ">
                <div><h2>Teaching</h2>

                    <div class="row-fluid">
                        <div class="span8 page-content">
                            <div id="coursesContent" class="content-section">
                                <div><h3>2015-16 Courses</h3>
                                    <hr>
                                    <ul class="section-listing courses">
                                        <li class="course"><a
                                                href="http://explorecourses.stanford.edu/search?view=catalog&amp;filter-coursestatus-Active=on&amp;q=INDE 263: Microbiology and Infectious Diseases I&amp;academicYear=20152016"
                                                target="_blank">Microbiology and Infectious Diseases I</a><br><span>INDE 263 (Win)</span>
                                        </li>
                                        <li class="unstyled">
                                            <a class="independent-studies-label" data-toggle="collapse"
                                               data-target="[data-collapsible=independent-studies]"><i
                                                    class="icon-caret-right"></i>Independent Studies (10)</a>
                                            <div data-collapsible="independent-studies" class="collapse">
                                                <ul class="section-listing independent-studies">
                                                    <li class="course"><a
                                                            href="http://explorecourses.stanford.edu/search?view=catalog&amp;filter-coursestatus-Active=on&amp;q=MI 198: Directed Reading in Microbiology and Immunology&amp;academicYear=20152016"
                                                            target="_blank">Directed Reading in Microbiology and
                                                            Immunology</a><br><span>MI 198 (Aut)</span></li>
                                                    <li class="course"><a
                                                            href="http://explorecourses.stanford.edu/search?view=catalog&amp;filter-coursestatus-Active=on&amp;q=MI 299: Directed Reading in Microbiology and Immunology&amp;academicYear=20152016"
                                                            target="_blank">Directed Reading in Microbiology and
                                                            Immunology</a><br><span>MI 299 (Aut, Win, Spr)</span></li>
                                                    <li class="course"><a
                                                            href="http://explorecourses.stanford.edu/search?view=catalog&amp;filter-coursestatus-Active=on&amp;q=PEDS 299: Directed Reading in Pediatrics&amp;academicYear=20152016"
                                                            target="_blank">Directed Reading in Pediatrics</a><br><span>PEDS 299 (Aut, Win, Spr)</span>
                                                    </li>
                                                    <li class="course"><a
                                                            href="http://explorecourses.stanford.edu/search?view=catalog&amp;filter-coursestatus-Active=on&amp;q=PEDS 280: Early Clinical Experience&amp;academicYear=20152016"
                                                            target="_blank">Early Clinical Experience</a><br><span>PEDS 280 (Aut, Win, Spr)</span>
                                                    </li>
                                                    <li class="course"><a
                                                            href="http://explorecourses.stanford.edu/search?view=catalog&amp;filter-coursestatus-Active=on&amp;q=MI 399: Graduate Research&amp;academicYear=20152016"
                                                            target="_blank">Graduate Research</a><br><span>MI 399 (Aut, Win, Spr)</span>
                                                    </li>
                                                    <li class="course"><a
                                                            href="http://explorecourses.stanford.edu/search?view=catalog&amp;filter-coursestatus-Active=on&amp;q=PEDS 399: Graduate Research&amp;academicYear=20152016"
                                                            target="_blank">Graduate Research</a><br><span>PEDS 399 (Aut, Win, Spr)</span>
                                                    </li>
                                                    <li class="course"><a
                                                            href="http://explorecourses.stanford.edu/search?view=catalog&amp;filter-coursestatus-Active=on&amp;q=MI 370: Medical Scholars Research&amp;academicYear=20152016"
                                                            target="_blank">Medical Scholars Research</a><br><span>MI 370 (Aut, Win, Spr)</span>
                                                    </li>
                                                    <li class="course"><a
                                                            href="http://explorecourses.stanford.edu/search?view=catalog&amp;filter-coursestatus-Active=on&amp;q=PEDS 370: Medical Scholars Research&amp;academicYear=20152016"
                                                            target="_blank">Medical Scholars Research</a><br><span>PEDS 370 (Aut, Win, Spr)</span>
                                                    </li>
                                                    <li class="course"><a
                                                            href="http://explorecourses.stanford.edu/search?view=catalog&amp;filter-coursestatus-Active=on&amp;q=PEDS 199: Undergraduate Directed Reading/Research&amp;academicYear=20152016"
                                                            target="_blank">Undergraduate Directed
                                                            Reading/Research</a><br><span>PEDS 199 (Aut, Win, Spr)</span>
                                                    </li>
                                                    <li class="course"><a
                                                            href="http://explorecourses.stanford.edu/search?view=catalog&amp;filter-coursestatus-Active=on&amp;q=MI 199: Undergraduate Research&amp;academicYear=20152016"
                                                            target="_blank">Undergraduate Research</a><br><span>MI 199 (Aut, Win, Spr)</span>
                                                    </li>
                                                </ul>
                                            </div>

                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div id="stanfordAdviseesContent" class="content-section">
                                <div><h3>Advisees</h3>
                                    <hr>
                                    <ul class="section-listing">
                                        <li class="advisees-list-item">
                                            <span style="font-weight:600">Postdoctoral Faculty Sponsor</span>
                                            <br>
                                            <span style="display:block" data-toggle="collapsePartial"
                                                  class="collapse-partial in"><span class="line-clamp"
                                                                                    style="height: auto;"><a
                                                        href="https://profiles.stanford.edu/julia-co" target="_blank">Julia Co</a><a
                                                        class="toggle-button" data-bypass="" style="display: none;"><i
                                                            class="icon-caret-left"></i></a></span></span>

                                        </li>
                                        <li class="advisees-list-item">
                                            <span style="font-weight:600">Doctoral Dissertation Reader (AC)</span>
                                            <br>
                                            <span style="display:block" data-toggle="collapsePartial"
                                                  class="collapse-partial in"><span class="line-clamp"
                                                                                    style="height: auto;"><a
                                                        href="https://profiles.stanford.edu/diana-proctor"
                                                        target="_blank">Diana Proctor</a>, <a
                                                        href="https://profiles.stanford.edu/suchita-rastogi"
                                                        target="_blank">Suchita Rastogi</a><a class="toggle-button"
                                                                                              data-bypass=""
                                                                                              style="display: none;"><i
                                                            class="icon-caret-left"></i></a></span></span>

                                        </li>
                                        <li class="advisees-list-item">
                                            <span style="font-weight:600">Doctoral Dissertation Advisor (AC)</span>
                                            <br>
                                            <span style="display:block" data-toggle="collapsePartial"
                                                  class="collapse-partial in"><span class="line-clamp"
                                                                                    style="height: auto;"><a
                                                        href="https://profiles.stanford.edu/connie-fung"
                                                        target="_blank">Connie Fung</a>, <a
                                                        href="https://profiles.stanford.edu/lauren-popov"
                                                        target="_blank">Lauren Popov</a><a class="toggle-button"
                                                                                           data-bypass=""
                                                                                           style="display: none;"><i
                                                            class="icon-caret-left"></i></a></span></span>

                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div id="graduateAndFellowshipProgramsContent" class="content-section">
                                <div><h3>Graduate and Fellowship Programs</h3>
                                    <hr>
                                    <ul class="section-listing">
                                        <li class="section-list-item bulleted">
                                            <div class="description"><a href="dept.php?DNo=785" target="_blank">Microbiology
                                                    and Immunology (Phd Program)</a></div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
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
                                    <ul class="section-listing articles" data-count="42">
                                        <li class="publication featured article">
                                            <cite><span class="title">
                          <span>The adherens junctions control susceptibility to Staphylococcus aureus a-toxin.</span>
                          <i>Proceedings of the National Academy of Sciences of the United States of America</i>
                        </span>
                                                <span class="authors collapse-partial in" data-toggle="collapsePartial"><span
                                                        class="line-clamp" style="height: auto;">Popov, L. M., Marceau, C. D., Starkl, P. M., Lumb, J. H., Shah, J., Guerrera, D., Cooper, R. L., Merakou, C., Bouley, D. M., Meng, W., Kiyonari, H., Takeichi, M., Galli, S. J., Bagnoli, F., Citi, S., Carette, J. E., Amieva, M. R.<a
                                                            class="toggle-button" data-bypass="" style="display: none;"><i
                                                                class="icon-caret-left"></i>Hide</a></span></span>

                        <span class="details">
                         <span class="year">2015</span>; <span class="volume">112 (46)</span><span class="pages">: 14337-14342</span>
                       </span></cite>

                                            <a data-bypass="" data-toggle="collapse"
                                               data-target="[data-collapsible=publicationc69]"><i
                                                    class="icon-caret-right"></i><span>More</span></a>
                                            <div data-collapsible="publicationc69"
                                                 class="collapse indented-collapsible-section">
                                                <div class="detail"><h4>Abstract</h4>
                                                    <p class="abstract">Staphylococcus aureus is both a transient skin
                                                        colonizer and a formidable human pathogen, ranking among the
                                                        leading causes of skin and soft tissue infections as well as
                                                        severe pneumonia. The secreted bacterial α-toxin is essential
                                                        for S. aureus virulence in these epithelial diseases. To
                                                        discover host cellular factors required for α-toxin
                                                        cytotoxicity, we conducted a genetic screen using mutagenized
                                                        haploid human cells. Our screen identified a cytoplasmic member
                                                        of the adherens junctions, plekstrin-homology domain containing
                                                        protein 7 (PLEKHA7), as the second most significantly enriched
                                                        gene after the known α-toxin receptor, a disintegrin and
                                                        metalloprotease 10 (ADAM10). Here we report a new, unexpected
                                                        role for PLEKHA7 and several components of cellular adherens
                                                        junctions in controlling susceptibility to S. aureus α-toxin. We
                                                        find that despite being injured by α-toxin pore formation,
                                                        PLEKHA7 knockout cells recover after intoxication. By infecting
                                                        PLEKHA7(-/-) mice with methicillin-resistant S. aureus USA300
                                                        LAC strain, we demonstrate that this junctional protein controls
                                                        disease severity in both skin infection and lethal S. aureus
                                                        pneumonia. Our results suggest that adherens junctions actively
                                                        control cellular responses to a potent pore-forming bacterial
                                                        toxin and identify PLEKHA7 as a potential nonessential host
                                                        target to reduce S. aureus virulence during epithelial
                                                        infections.</p>
                                                    <p class="doi">
                                                        <span><i class="icon-external-link"></i>View details for <a
                                                                href="http://dx.doi.org/10.1073/pnas.1510265112"
                                                                target="_blank">DOI 10.1073/pnas.1510265112</a></span>
                                                    </p>
                                                    <p class="pub-med">
                                                        <span><i class="icon-external-link"></i>View details for <a
                                                                href="http://www.ncbi.nlm.nih.gov/pubmed/26489655"
                                                                target="_blank">PubMedID 26489655</a></span>
                                                    </p></div>
                                            </div>
                                        </li>
                                        <li class="publication featured article">
                                            <cite><span class="title">
                        <span>Chemodetection and Destruction of Host Urea Allows Helicobacter pylori to Locate the Epithelium</span>
                        <i>CELL HOST &amp; MICROBE</i>
                      </span>
                                                <span class="authors collapse-partial in" data-toggle="collapsePartial"><span
                                                        class="line-clamp" style="height: auto;">Huang, J. Y., Sweeney, E. G., Sigal, M., Zhang, H. C., Remington, S. J., Cantrell, M. A., Kuo, C. J., Guillemin, K., Amieva, M. R.<a
                                                            class="toggle-button" data-bypass="" style="display: none;"><i
                                                                class="icon-caret-left"></i>Hide</a></span></span>

                      <span class="details">
                       <span class="year">2015</span>; <span class="volume">18 (2)</span><span
                              class="pages">: 147-156</span>
                     </span></cite>

                                            <a data-bypass="" data-toggle="collapse"
                                               data-target="[data-collapsible=publicationc70]"><i
                                                    class="icon-caret-right"></i><span>More</span></a>
                                            <div data-collapsible="publicationc70"
                                                 class="collapse indented-collapsible-section">
                                                <div class="detail"><h4>Abstract</h4>
                                                    <p class="abstract">The gastric pathogen Helicobacter pylori
                                                        interacts intimately with the gastric mucosa to avoid the
                                                        microbicidal acid in the stomach lumen. The cues H.&nbsp;pylori
                                                        senses to locate and colonize the gastric epithelium have not
                                                        been well defined. We show that metabolites emanating from human
                                                        gastric organoids rapidly attract H.&nbsp;pylori. This response
                                                        is largely controlled by the bacterial chemoreceptor TlpB, and
                                                        the main attractant emanating from epithelia is urea. Our
                                                        previous structural analyses show that TlpB binds urea with high
                                                        affinity. Here we demonstrate that this tight binding controls
                                                        highly sensitive responses, allowing detection of urea
                                                        concentrations as low as 50&nbsp;nM. Attraction to urea requires
                                                        that H.&nbsp;pylori urease simultaneously destroys the signal.
                                                        We propose that H.&nbsp;pylori has evolved a sensitive urea
                                                        chemodetection and destruction system that allows the bacterium
                                                        to dynamically and locally modify the host environment to locate
                                                        the epithelium.</p>
                                                    <p class="doi">
                                                        <span><i class="icon-external-link"></i>View details for <a
                                                                href="http://dx.doi.org/10.1016/j.chom.2015.07.002"
                                                                target="_blank">DOI 10.1016/j.chom.2015.07.002</a></span>
                                                    </p>
                                                    <p class="wos">
                                                        <span><i class="icon-external-link"></i>View details for <a
                                                                href="http://ws.isiknowledge.com/cps/openurl/service?url_ver=Z39.88-2004&amp;rft_id=info:ut/000359601800007"
                                                                target="_blank">Web of Science ID 000359601800007</a></span>
                                                    </p>
                                                    <p class="pub-med">
                                                        <span><i class="icon-external-link"></i>View details for <a
                                                                href="http://www.ncbi.nlm.nih.gov/pubmed/26269952"
                                                                target="_blank">PubMedID 26269952</a></span>
                                                    </p></div>
                                            </div>
                                        </li>
                                        <li class="publication featured article">
                                            <cite><span class="title">
                      <span>Helicobacter pylori Activates and Expands Lgr5(+) Stem Cells Through Direct Colonization of the Gastric Glands</span>
                      <i>GASTROENTEROLOGY</i>
                    </span>
                                                <span class="authors collapse-partial in" data-toggle="collapsePartial"><span
                                                        class="line-clamp" style="height: auto;">Sigal, M., Rothenberg, M. E., Logan, C. Y., Lee, J. Y., Honaker, R. W., Cooper, R. L., Passarelli, B., Camorlinga, M., Bouley, D. M., Alvarez, G., Nusse, R., Torres, J., Amieva, M. R.<a
                                                            class="toggle-button" data-bypass="" style="display: none;"><i
                                                                class="icon-caret-left"></i>Hide</a></span></span>

                    <span class="details">
                     <span class="year">2015</span>; <span class="volume">148 (7)</span><span
                            class="pages">: 1392-?</span>
                   </span></cite>

                                            <a data-bypass="" data-toggle="collapse"
                                               data-target="[data-collapsible=publicationc71]"><i
                                                    class="icon-caret-right"></i><span>More</span></a>
                                            <div data-collapsible="publicationc71"
                                                 class="collapse indented-collapsible-section">
                                                <div class="detail"><p class="doi">
                                                        <span><i class="icon-external-link"></i>View details for <a
                                                                href="http://dx.doi.org/10.1053/j.gastro.2015.02.049"
                                                                target="_blank">DOI 10.1053/j.gastro.2015.02.049</a></span>
                                                    </p>
                                                    <p class="wos">
                                                        <span><i class="icon-external-link"></i>View details for <a
                                                                href="http://ws.isiknowledge.com/cps/openurl/service?url_ver=Z39.88-2004&amp;rft_id=info:ut/000355014700031"
                                                                target="_blank">Web of Science ID 000355014700031</a></span>
                                                    </p></div>
                                            </div>
                                        </li>
                                        <li class="publication featured article">
                                            <cite><span class="title">
                  <span>Helicobacter pylori Activates and Expands Lgr5(+) Stem Cells Through Direct Colonization of the Gastric Glands.</span>
                  <i>Gastroenterology</i>
                </span>
                                                <span class="authors collapse-partial in" data-toggle="collapsePartial"><span
                                                        class="line-clamp" style="height: auto;">Sigal, M., Rothenberg, M. E., Logan, C. Y., Lee, J. Y., Honaker, R. W., Cooper, R. L., Passarelli, B., Camorlinga, M., Bouley, D. M., Alvarez, G., Nusse, R., Torres, J., Amieva, M. R.<a
                                                            class="toggle-button" data-bypass="" style="display: none;"><i
                                                                class="icon-caret-left"></i>Hide</a></span></span>

                <span class="details">
                 <span class="year">2015</span>; <span class="volume">148 (7)</span><span
                        class="pages">: 1392-404 e21</span>
               </span></cite>

                                            <a data-bypass="" data-toggle="collapse"
                                               data-target="[data-collapsible=publicationc72]"><i
                                                    class="icon-caret-right"></i><span>More</span></a>
                                            <div data-collapsible="publicationc72"
                                                 class="collapse indented-collapsible-section">
                                                <div class="detail"><h4>Abstract</h4>
                                                    <p class="abstract">Helicobacter pylori infection is the main risk
                                                        factor for gastric cancer. We characterized the interactions of
                                                        H pylori with gastric epithelial progenitor and stem cells in
                                                        humans and mice and investigated how these interactions
                                                        contribute to H pylori-induced pathology.We used quantitative
                                                        confocal microscopy and 3-dimensional reconstruction of entire
                                                        gastric glands to determine the localizations of H pylori in
                                                        stomach tissues from humans and infected mice. Using lineage
                                                        tracing to mark cells derived from leucine-rich
                                                        repeat-containing G-protein coupled receptor 5-positive
                                                        (Lgr5(+)) stem cells (Lgr5-eGFP-IRES-CreERT2/Rosa26-TdTomato
                                                        mice) and in situ hybridization, we analyzed gastric stem cell
                                                        responses to infection. Isogenic H pylori mutants were used to
                                                        determine the role of specific virulence factors in stem cell
                                                        activation and pathology.H pylori grow as distinct bacterial
                                                        microcolonies deep in the stomach glands and interact directly
                                                        with gastric progenitor and stem cells in tissues from mice and
                                                        humans. These gland-associated bacteria activate stem cells,
                                                        increasing the number of stem cells, accelerating Lgr5(+) stem
                                                        cell proliferation, and up-regulating expression of stem
                                                        cell-related genes. Mutant bacteria with defects in chemotaxis
                                                        that are able to colonize the stomach surface but not the antral
                                                        glands in mice do not activate stem cells. In addition, bacteria
                                                        that are unable to inject the contact-dependent virulence factor
                                                        CagA into the epithelium colonized stomach glands in mice, but
                                                        did not activate stem cells or produce hyperplasia to the same
                                                        extent as wild-type H pylori.H pylori colonize and manipulate
                                                        the progenitor and stem cell compartments, which alters turnover
                                                        kinetics and glandular hyperplasia. Bacterial ability to alter
                                                        the stem cells has important implications for gastrointestinal
                                                        stem cell biology and H pylori-induced gastric pathology.</p>
                                                    <p class="doi">
                                                        <span><i class="icon-external-link"></i>View details for <a
                                                                href="http://dx.doi.org/10.1053/j.gastro.2015.02.049"
                                                                target="_blank">DOI 10.1053/j.gastro.2015.02.049</a></span>
                                                    </p>
                                                    <p class="pub-med">
                                                        <span><i class="icon-external-link"></i>View details for <a
                                                                href="http://www.ncbi.nlm.nih.gov/pubmed/25725293"
                                                                target="_blank">PubMedID 25725293</a></span>
                                                    </p></div>
                                            </div>
                                        </li>
                                        <li class="publication featured article">
                                            <cite><span class="title">
                <span>Pathobiology of Helicobacter pylori-induced Gastric Cancer.</span>
                <i>Gastroenterology</i>
              </span>
                                                <span class="authors collapse-partial in" data-toggle="collapsePartial"><span
                                                        class="line-clamp" style="height: auto;">Amieva, M., Peek, R. M.<a
                                                            class="toggle-button" data-bypass="" style="display: none;"><i
                                                                class="icon-caret-left"></i>Hide</a></span></span>

              <span class="details">
               <span class="year">2015</span>
             </span></cite>

                                            <a data-bypass="" data-toggle="collapse"
                                               data-target="[data-collapsible=publicationc73]"><i
                                                    class="icon-caret-right"></i><span>More</span></a>
                                            <div data-collapsible="publicationc73"
                                                 class="collapse indented-collapsible-section">
                                                <div class="detail"><h4>Abstract</h4>
                                                    <p class="abstract">Colonization of the human stomach by
                                                        Helicobacter pylori and its role in causing gastric cancer is
                                                        one of the richest examples of complex relationship among human
                                                        cells, microbes, and their environment. It is also a puzzle of
                                                        enormous medical importance given the incidence and lethality of
                                                        gastric cancer worldwide. We review recent findings that have
                                                        changed how we view these relationships and affected the
                                                        direction of gastric cancer research. For example, recent data
                                                        indicate that subtle mismatches between host and microbe genetic
                                                        traits greatly affect risk of gastric cancer. The ability of H
                                                        pylori and its oncoprotein CagA to reprogram epithelial cells
                                                        and activate properties of stemness demonstrates the
                                                        sophisticated relationship among H pylori and progenitor cells
                                                        in the gastric mucosa. The observation that cell-associated H
                                                        pylori can colonize the gastric glands and directly affect
                                                        precursor and stem cells supports these observations. The
                                                        ability to mimic these interactions in human gastric organoid
                                                        cultures as well as animal models will allow investigators to
                                                        more fully unravel the extent of H pylori control on the
                                                        renewing gastric epithelium. Finally, our realization that
                                                        external environmental factors, such as dietary components and
                                                        essential micronutrients, as well as the gastrointestinal
                                                        microbiota, can change the balance between H pylori's activity
                                                        as a commensal or a pathogen has provided direction to studies
                                                        aimed at defining the full carcinogenic potential of this
                                                        organism.</p>
                                                    <p class="doi">
                                                        <span><i class="icon-external-link"></i>View details for <a
                                                                href="http://dx.doi.org/10.1053/j.gastro.2015.09.004"
                                                                target="_blank">DOI 10.1053/j.gastro.2015.09.004</a></span>
                                                    </p>
                                                    <p class="pub-med">
                                                        <span><i class="icon-external-link"></i>View details for <a
                                                                href="http://www.ncbi.nlm.nih.gov/pubmed/26385073"
                                                                target="_blank">PubMedID 26385073</a></span>
                                                    </p></div>
                                            </div>
                                        </li>
                                        <li class="publication featured article">
                                            <cite><span class="title">
              <span>Three-dimensional human skin models to understand Staphylococcus aureus skin colonization and infection</span>
              <i>FRONTIERS IN IMMUNOLOGY</i>
            </span>
                                                <span class="authors collapse-partial in" data-toggle="collapsePartial"><span
                                                        class="line-clamp" style="height: auto;">Popov, L., Kovalski, J., Grandi, G., Bagnoli, F., Amieva, M. R.<a
                                                            class="toggle-button" data-bypass="" style="display: none;"><i
                                                                class="icon-caret-left"></i>Hide</a></span></span>

            <span class="details">
             <span class="year">2014</span>; <span class="volume">5</span>
           </span></cite>

                                            <a data-bypass="" data-toggle="collapse"
                                               data-target="[data-collapsible=publicationc74]"><i
                                                    class="icon-caret-right"></i><span>More</span></a>
                                            <div data-collapsible="publicationc74"
                                                 class="collapse indented-collapsible-section">
                                                <div class="detail"><p class="doi">
                                                        <span><i class="icon-external-link"></i>View details for <a
                                                                href="http://dx.doi.org/10.3389/fimmu.2014.00041"
                                                                target="_blank">DOI 10.3389/fimmu.2014.00041</a></span>
                                                    </p>
                                                    <p class="wos">
                                                        <span><i class="icon-external-link"></i>View details for <a
                                                                href="http://ws.isiknowledge.com/cps/openurl/service?url_ver=Z39.88-2004&amp;rft_id=info:ut/000354461400001"
                                                                target="_blank">Web of Science ID 000354461400001</a></span>
                                                    </p></div>
                                            </div>
                                        </li>
                                        <li class="publication featured article">
                                            <cite><span class="title">
          <span>Three-Dimensional Human Skin Models to Understand Staphylococcus aureus Skin Colonization and Infection.</span>
          <i>Frontiers in immunology</i>
        </span>
                                                <span class="authors collapse-partial in" data-toggle="collapsePartial"><span
                                                        class="line-clamp" style="height: auto;">Popov, L., Kovalski, J., Grandi, G., Bagnoli, F., Amieva, M. R.<a
                                                            class="toggle-button" data-bypass="" style="display: none;"><i
                                                                class="icon-caret-left"></i>Hide</a></span></span>

        <span class="details">
         <span class="year">2014</span>; <span class="volume">5</span><span class="pages">: 41-?</span>
       </span></cite>

                                            <a data-bypass="" data-toggle="collapse"
                                               data-target="[data-collapsible=publicationc75]"><i
                                                    class="icon-caret-right"></i><span>More</span></a>
                                            <div data-collapsible="publicationc75"
                                                 class="collapse indented-collapsible-section">
                                                <div class="detail"><h4>Abstract</h4>
                                                    <p class="abstract">Staphylococcus aureus is both a major bacterial
                                                        pathogen as well as a common member of the human skin
                                                        microbiota. Due to its widespread prevalence as an asymptomatic
                                                        skin colonizer and its importance as a source of skin and soft
                                                        tissue infections, an improved understanding of how S. aureus
                                                        attaches to, grows within, and breaches the stratified layers of
                                                        the epidermis is of critical importance. Three-dimensional
                                                        organotypic human skin culture models are informative and
                                                        tractable experimental systems for future investigations of the
                                                        interactions between S. aureus and the multi-faceted skin
                                                        tissue. We propose that S. aureus virulence factors, primarily
                                                        appreciated for their role in pathogenesis of invasive
                                                        infections, play alternative roles in promoting asymptomatic
                                                        bacterial growth within the skin. Experimental manipulations of
                                                        these cultures will provide insight into the many poorly
                                                        understood molecular interactions occurring at the interface
                                                        between S. aureus and stratified human skin tissue.</p>
                                                    <p class="doi">
                                                        <span><i class="icon-external-link"></i>View details for <a
                                                                href="http://dx.doi.org/10.3389/fimmu.2014.00041"
                                                                target="_blank">DOI 10.3389/fimmu.2014.00041</a></span>
                                                    </p>
                                                    <p class="pub-med">
                                                        <span><i class="icon-external-link"></i>View details for <a
                                                                href="http://www.ncbi.nlm.nih.gov/pubmed/24567733"
                                                                target="_blank">PubMedID 24567733</a></span>
                                                    </p></div>
                                            </div>
                                        </li>
                                        <li class="publication featured article">
                                            <cite><span class="title">
        <span>Iron deficiency accelerates Helicobacter pylori-induced carcinogenesis in rodents and humans</span>
        <i>JOURNAL OF CLINICAL INVESTIGATION</i>
      </span>
                                                <span class="authors collapse-partial in" data-toggle="collapsePartial"><span
                                                        class="line-clamp" style="height: auto;">Noto, J. M., Gaddy, J. A., Lee, J. Y., Piazuelo, M. B., Friedman, D. B., Colvin, D. C., Romero-Gallo, J., Suarez, G., Loh, J., Slaughter, J. C., Tan, S., Morgan, D. R., Wilson, K. T., Bravo, L. E., Correa, P., Cover, T. L., Amieva, M. R., Peek, R. M.<a
                                                            class="toggle-button" data-bypass="" style="display: none;"><i
                                                                class="icon-caret-left"></i>Hide</a></span></span>

      <span class="details">
       <span class="year">2013</span>; <span class="volume">123 (1)</span><span class="pages">: 479-492</span>
     </span></cite>

                                            <a data-bypass="" data-toggle="collapse"
                                               data-target="[data-collapsible=publicationc76]"><i
                                                    class="icon-caret-right"></i><span>More</span></a>
                                            <div data-collapsible="publicationc76"
                                                 class="collapse indented-collapsible-section">
                                                <div class="detail"><h4>Abstract</h4>
                                                    <p class="abstract">Gastric adenocarcinoma is strongly associated
                                                        with Helicobacter pylori infection; however, most infected
                                                        persons never develop this malignancy. H. pylori strains
                                                        harboring the cag pathogenicity island (cag+), which encodes
                                                        CagA and a type IV secretion system (T4SS), induce more severe
                                                        disease outcomes. H. pylori infection is also associated with
                                                        iron deficiency, which similarly augments gastric cancer risk.
                                                        To define the influence of iron deficiency on microbial
                                                        virulence in gastric carcinogenesis, Mongolian gerbils were
                                                        maintained on iron-depleted diets and infected with an oncogenic
                                                        H. pylori cag+ strain. Iron depletion accelerated the
                                                        development of H. pylori-induced premalignant and malignant
                                                        lesions in a cagA-dependent manner. H. pylori strains harvested
                                                        from iron-depleted gerbils or grown under iron-limiting
                                                        conditions exhibited enhanced virulence and induction of
                                                        inflammatory factors. Further, in a human population at high
                                                        risk for gastric cancer, H. pylori strains isolated from
                                                        patients with the lowest ferritin levels induced more robust
                                                        proinflammatory responses compared with strains isolated from
                                                        patients with the highest ferritin levels, irrespective of
                                                        histologic status. These data demonstrate that iron deficiency
                                                        enhances H. pylori virulence and represents a measurable
                                                        biomarker to identify populations of infected persons at high
                                                        risk for gastric cancer.</p>
                                                    <p class="doi">
                                                        <span><i class="icon-external-link"></i>View details for <a
                                                                href="http://dx.doi.org/10.1172/JCI64373"
                                                                target="_blank">DOI 10.1172/JCI64373</a></span>
                                                    </p>
                                                    <p class="wos">
                                                        <span><i class="icon-external-link"></i>View details for <a
                                                                href="http://ws.isiknowledge.com/cps/openurl/service?url_ver=Z39.88-2004&amp;rft_id=info:ut/000313598500049"
                                                                target="_blank">Web of Science ID 000313598500049</a></span>
                                                    </p>
                                                    <p class="pub-med">
                                                        <span><i class="icon-external-link"></i>View details for <a
                                                                href="http://www.ncbi.nlm.nih.gov/pubmed/23257361"
                                                                target="_blank">PubMedID 23257361</a></span>
                                                    </p></div>
                                            </div>
                                        </li>
                                        <li class="publication featured article">
                                            <cite><span class="title">
      <span>ChePep Controls Helicobacter pylori Infection of the Gastric Glands and Chemotaxis in the Epsilonproteobacteria</span>
      <i>MBIO</i>
    </span>
                                                <span class="authors collapse-partial in" data-toggle="collapsePartial"><span
                                                        class="line-clamp" style="height: auto;">Howitt, M. R., Lee, J. Y., Lertsethtakarn, P., Vogelmann, R., Joubert, L., Ottemann, K. M., Amieva, M. R.<a
                                                            class="toggle-button" data-bypass="" style="display: none;"><i
                                                                class="icon-caret-left"></i>Hide</a></span></span>

    <span class="details">
     <span class="year">2011</span>; <span class="volume">2 (4)</span>
   </span></cite>

                                            <a data-bypass="" data-toggle="collapse"
                                               data-target="[data-collapsible=publicationc77]"><i
                                                    class="icon-caret-right"></i><span>More</span></a>
                                            <div data-collapsible="publicationc77"
                                                 class="collapse indented-collapsible-section">
                                                <div class="detail"><h4>Abstract</h4>
                                                    <p class="abstract">Microbes use directed motility to colonize harsh
                                                        and dynamic environments. We discovered that Helicobacter pylori
                                                        strains establish bacterial colonies deep in the gastric glands
                                                        and identified a novel protein, ChePep, necessary to colonize
                                                        this niche. ChePep is preferentially localized to the flagellar
                                                        pole. Although mutants lacking ChePep have normal flagellar
                                                        ultrastructure and are motile, they have a slight defect in
                                                        swarming ability. By tracking the movement of single bacteria,
                                                        we found that ?ChePep mutants cannot control the rotation of
                                                        their flagella and swim with abnormally frequent reversals.
                                                        These mutants even sustain bursts of movement backwards with the
                                                        flagella pulling the bacteria. Genetic analysis of the
                                                        chemotaxis signaling pathway shows that ChePep regulates
                                                        flagellar rotation through the chemotaxis system. By examining
                                                        H. pylori within a microscopic pH gradient, we determined that
                                                        ChePep is critical for regulating chemotactic behavior. The
                                                        chePep gene is unique to the Epsilonproteobacteria but is found
                                                        throughout this diverse group. We expressed ChePep from other
                                                        members of the Epsilonproteobacteria, including the zoonotic
                                                        pathogen Campylobacter jejuni and the deep sea hydrothermal vent
                                                        inhabitant Caminibacter mediatlanticus, in H. pylori and found
                                                        that ChePep is functionally conserved across this class. ChePep
                                                        represents a new family of chemotaxis regulators unique to the
                                                        Epsilonproteobacteria and illustrates the different strategies
                                                        that microbes have evolved to control motility.Helicobacter
                                                        pylori strains infect half of all humans worldwide and
                                                        contribute to the development of peptic ulcers and gastric
                                                        cancer. H. pylori cannot survive within the acidic lumen of the
                                                        stomach and uses flagella to actively swim to and colonize the
                                                        protective mucus and epithelium. The chemotaxis system allows H.
                                                        pylori to navigate by regulating the rotation of its flagella.
                                                        We identified a new protein, ChePep, which controls chemotaxis
                                                        in H. pylori. ChePep mutants fail to colonize the gastric glands
                                                        of mice and are completely outcompeted by normal H. pylori.
                                                        Genes encoding ChePep are found only in the class
                                                        Epsilonproteobacteria, which includes the human pathogen
                                                        Campylobacter jejuni and environmental microbes like the
                                                        deep-sea hydrothermal vent colonizer Caminibacter
                                                        mediatlanticus, and we show that ChePep function is conserved in
                                                        this class. Our study identifies a new colonization factor in H.
                                                        pylori and also provides insight into the control and evolution
                                                        of bacterial chemotaxis.</p>
                                                    <p class="doi">
                                                        <span><i class="icon-external-link"></i>View details for <a
                                                                href="http://dx.doi.org/10.1128/mBio.00098-11"
                                                                target="_blank">DOI 10.1128/mBio.00098-11</a></span>
                                                    </p>
                                                    <p class="wos">
                                                        <span><i class="icon-external-link"></i>View details for <a
                                                                href="http://ws.isiknowledge.com/cps/openurl/service?url_ver=Z39.88-2004&amp;rft_id=info:ut/000296844000004"
                                                                target="_blank">Web of Science ID 000296844000004</a></span>
                                                    </p>
                                                    <p class="pub-med">
                                                        <span><i class="icon-external-link"></i>View details for <a
                                                                href="http://www.ncbi.nlm.nih.gov/pubmed/21791582"
                                                                target="_blank">PubMedID 21791582</a></span>
                                                    </p></div>
                                            </div>
                                        </li>
                                        <li class="publication featured article">
                                            <cite><span class="title">
    <span>Helicobacter pylori Perturbs Iron Trafficking in the Epithelium to Grow on the Cell Surface</span>
    <i>PLOS PATHOGENS</i>
  </span>
                                                <span class="authors collapse-partial in" data-toggle="collapsePartial"><span
                                                        class="line-clamp" style="height: auto;">Tan, S., Noto, J. M., Romero-Gallo, J., Peek, R. M., Amieva, M. R.<a
                                                            class="toggle-button" data-bypass="" style="display: none;"><i
                                                                class="icon-caret-left"></i>Hide</a></span></span>

  <span class="details">
   <span class="year">2011</span>; <span class="volume">7 (5)</span>
 </span></cite>

                                            <a data-bypass="" data-toggle="collapse"
                                               data-target="[data-collapsible=publicationc78]"><i
                                                    class="icon-caret-right"></i><span>More</span></a>
                                            <div data-collapsible="publicationc78"
                                                 class="collapse indented-collapsible-section">
                                                <div class="detail"><h4>Abstract</h4>
                                                    <p class="abstract">Helicobacter pylori (Hp) injects the CagA
                                                        effector protein into host epithelial cells and induces growth
                                                        factor-like signaling, perturbs cell-cell junctions, and alters
                                                        host cell polarity. This enables Hp to grow as microcolonies
                                                        adhered to the host cell surface even in conditions that do not
                                                        support growth of free-swimming bacteria. We hypothesized that
                                                        CagA alters host cell physiology to allow Hp to obtain specific
                                                        nutrients from or across the epithelial barrier. Using a
                                                        polarized epithelium model system, we find that isogenic ?cagA
                                                        mutants are defective in cell surface microcolony formation, but
                                                        exogenous addition of iron to the apical medium partially
                                                        rescues this defect, suggesting that one of CagA's effects on
                                                        host cells is to facilitate iron acquisition from the host. Hp
                                                        adhered to the apical epithelial surface increase basolateral
                                                        uptake of transferrin and induce its transcytosis in a
                                                        CagA-dependent manner. Both CagA and VacA contribute to the
                                                        perturbation of transferrin recycling, since VacA is involved in
                                                        apical mislocalization of the transferrin receptor to sites of
                                                        bacterial attachment. To determine if the transferrin recycling
                                                        pathway is involved in Hp colonization of the cell surface, we
                                                        silenced transferrin receptor expression during infection. This
                                                        resulted in a reduced ability of Hp to colonize the polarized
                                                        epithelium. To test whether CagA is important in promoting iron
                                                        acquisition in vivo, we compared colonization of Hp in
                                                        iron-replete vs. iron-deficient Mongolian gerbils. While wild
                                                        type Hp and ?cagA mutants colonized iron-replete gerbils at
                                                        similar levels, ?cagA mutants are markedly impaired in
                                                        colonizing iron-deficient gerbils. Our study indicates that CagA
                                                        and VacA act in concert to usurp the polarized process of host
                                                        cell iron uptake, allowing Hp to use the cell surface as a
                                                        replicative niche.</p>
                                                    <p class="doi">
                                                        <span><i class="icon-external-link"></i>View details for <a
                                                                href="http://dx.doi.org/10.1371/journal.ppat.1002050"
                                                                target="_blank">DOI 10.1371/journal.ppat.1002050</a></span>
                                                    </p>
                                                    <p class="wos">
                                                        <span><i class="icon-external-link"></i>View details for <a
                                                                href="http://ws.isiknowledge.com/cps/openurl/service?url_ver=Z39.88-2004&amp;rft_id=info:ut/000291014000034"
                                                                target="_blank">Web of Science ID 000291014000034</a></span>
                                                    </p>
                                                    <p class="pub-med">
                                                        <span><i class="icon-external-link"></i>View details for <a
                                                                href="http://www.ncbi.nlm.nih.gov/pubmed/21589900"
                                                                target="_blank">PubMedID 21589900</a></span>
                                                    </p></div>
                                            </div>
                                        </li>
                                    </ul>
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