<!-- TEMPLATE WINDOW -->
<div class="wdw wdw-template base-color-bg">
    <div class="container">
        <!-- TYPOGRAPHY -->
        <section>

            <h1>H1 Title</h1>
            <h2>H2 Title</h2>
            <h3>H3 Title</h3>
            <h4>H4 Title</h4>
            <h5>H5 Title</h5>
            <h6>H6 Title</h6>

            <br>

            <p class="emphasis">Bespoke narwhal biodiesel, ethical before they sold out crucifix gochujang polaroid lo-fi truffaut yuccie pinterest deep v vice. Fixie pickled hexagon PBR&B gastropub, activated charcoal master cleanse kinfolk ugh ramps. Offal tbh cronut hella, shoreditch skateboard you probably haven't heard of them literally church-key hot chicken mumblecore jianbing tofu. Art party YOLO try-hard pour-over. Succulents shoreditch whatever, pitchfork 8-bit vexillologist taxidermy woke pug put a bird on it brunch. Austin meh food truck, vegan sartorial selfies pickled. Glossier heirloom sustainable cardigan.</p>

            <p>90's art party twee fanny pack, artisan chicharrones taxidermy vinyl beard deep v. Banjo tousled street art neutra, pinterest fam microdosing cronut VHS. Selfies wayfarers af ugh VHS. Pork belly cold-pressed chambray chicharrones. Craft beer migas jianbing, copper mug small batch brooklyn vinyl celiac pitchfork. Wolf gastropub everyday carry shoreditch, mumblecore lyft photo booth lumbersexual pinterest kogi scenester viral. Edison bulb gentrify craft beer, venmo green juice aesthetic retro sustainable hot chicken flexitarian before they sold out shabby chic biodiesel hexagon DIY.</p>

            <hr>

            <p class="note"><span class="attention">Please consider</span> supporting the site to help make
                it a sustainable and ad-free side project</p>


        </section>
        <!-- COLOURS -->
        <section>

            <h2>Colours</h2>

            <br>

            <table id="colors">
                <tr>
                    <td class="fixed-width"><div class="circle base-color-bg"></div></td>
                    <td>$base-color</td>
                </tr>
                <tr>
                    <td class="fixed-width"><div class="circle primary-color-bg"></div></td>
                    <td>$primary-color</td>
                </tr>
                <tr>
                    <td class="fixed-width"><div class="circle secondary-color-bg"></div></td>
                    <td>$secondary-color</td>
                </tr>
                <tr>
                    <td class="fixed-width"><div class="circle highlight-color-bg"></div></td>
                    <td>$highlight-color</td>
                </tr>
                <tr>
                    <td class="fixed-width"><div class="circle warning-color-bg"></div></td>
                    <td>$warning-color</td>
                </tr>
            </table>

        </section>
        <!-- BUTTONS -->
        <section>

            <button class="btn btn-animation">Button 1</button>
            <button class="btn-1">Button 2</button>
            <button class="btn-2">Button 3</button>
            <button class="btn-3">Button 4</button>

        </section>
        <!-- URL'S -->
        <section>
            <h2>Links</h2><br>
            <a href="#" class="link-appear-primary">Click here</a>
            <br><br>
            <a href="#" class="link-disappear-primary">Click here</a>
        </section>

        <!-- LOGOS -->
        <section>
            <h2>Logos</h2><br>

                <div class="center">
                    <img src="dist/images/logonoborder.png" alt />
                </div>
                <div class="center">
                    <img src="dist/images/logo400.png" alt />
                </div>
                <div class="center">
                    <img src="dist/images/logo100.png" alt />
                </div>

        </section>


         <!-- FORMS -->
        <section>
            <h2>Forms</h2>

            <form>
                <div>
                    <input type="text" id="name" name="name" class="floating-label">
                    <label for="name" class="active">Name</label>
                </div>

                <div>
                    <input type="text" id="email" name="email" class="floating-label">
                    <label for="email">Email</label>
                </div>

                <textarea></textarea><br>
                <input type="submit" value="Send" class="btn">
            </form>
        </section>

        <!-- DESIGN EXAMPLES -->
        <h2>Design examples</h2>

        <section class="horizontal-vertical-center box example-text secondary-color-bg">
            <h6>TechCPH Events <i class="fa fa-angle-right" aria-hidden="true"></i></h6>
            <h1>Expand your knowledge and improve your network</h1>
            <p class="emphasis">HTML is the the foundation behind all web pages. It's used to add structure and form to text, images, and more. CSS is the language used to style HTML content. In this first course, you'll  <span class="attention-highlight">learn the fundamentals of both languages</span> so that you can create visually appealing web pages.</p>
            <hr>
            <p class="note">
                Checkout these advanced HTML and CSS lessons to take a deeper look at front-end design and development, perfect for any designer or front-end developer looking to round out their skills.
               </p>
        </section>

        <section class="gradient-1"><p>.gradient-1</p></section>
        <section class="gradient-2"><p>.gradient-2</p></section>
        <!-- GOOGLE MAPS -->
        <section>
            <h2>Maps</h2>
        </section>
        <!-- WINDOWS -->
        <section>
            <h2>Windows</h2>
            <a href="javascript:void(0)" id="wdw-example-1" class="btn-wdw link-disappear-primary">Model 1</a><br/>
            <a href="javascript:void(0)" id="wdw-example-2" class="btn-wdw link-disappear-primary">Model 2 with half width image</a><br/>
            <a href="javascript:void(0)" id="wdw-example-3" class="btn-wdw link-disappear-primary">Model 3 with fullwidth background-image</a><br/>

            <!-- WINDOW EXAMPLE -->

            <!-- BUTTON -->
            <a href="javascript:void(0)" id="wdw-yourIdHere" class="btn-wdw">Button to open window</a>

            <!-- ACTUAL WINDOW (NOTE: PARENT DIV CANNOT BE ANOTHER WINDOW) -->
            <div class="wdw wdw-yourIdHere">
                <div class="btn-close"></div>
            </div>
            <!-- / END WINDOW-->

            <!-- / END WINDOW EXAMPLE -->


        </section>
        <!-- CARDS -->
        <section>
            <h2>Cards</h2>
            <div class="card-1 template-card">.card-1</div>
            <div class="card-2 template-card">.card-2</div>
        </section>


        <?php
        //INSERT FOOTER
        require_once('footer.php');
        ?>

    </div>
</div>

<!-- EXAMPLE WINDOW 1 GENERAL -->
<div class="wdw wdw-example-1 gradient-2">
    <div class="btn-close"></div>
    <div class="image-overlay"></div>
</div>
<!-- EXAMPLE WINDOW 2 HALF WIDTH IMAGE -->
<div class="wdw wdw-example-2 base-color-bg">
    <div class="btn-close"></div>
    <div class="background-image image-half-width"></div>
</div>
<!-- EXAMPLE WINDOW 3 FULL WIDTH IMAGE -->
<div class="wdw wdw-example-3 background-image">
    <div class="btn-close light"></div>
    <div class="background-image-overlay-primary-color">

    </div>
</div>

