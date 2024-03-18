import React from 'react';

const Benefits = () => {
    return(
        <section class="benefit">
        <div class="container">
            <h1 class="abtus text-white">Key Benefits</h1>
            <div class="row mt-5 d-flex align-items-center">
                <div class="col-lg-4 col-md-4 col-12 mt-2 text-center">
                    <img src={require("../images/benefit1..PNG")} alt="feature-img" width="180px" class="img-fluid rounded"/>
                    <h3 class="text-white mt-4">24X7 English Tutor</h3>
                </div>
                <div class="col-lg-4 col-md-4 col-12 mt-2 text-center">
                    <img src={require("../images/benefit2.PNG")} alt="feature-img" width="180px" class="img-fluid rounded"/>
                    <h3 class="text-white mt-4">Ask Questions Any Time</h3>
                </div>
                <div class="col-lg-4 col-md-4 col-12 mt-2 text-center">
                    <img src={require("../images/benefit3.PNG")} alt="feature-img" width="180px" class="img-fluid rounded"/>
                    <h3 class="text-white mt-4">Progress Tracking</h3>
                </div>


            </div>

        </div>
    </section>

    );
};
export default Benefits;