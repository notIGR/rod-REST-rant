const React = require("react");
const Def = require("../default");

//cant get any comments to show on anything but h thai m l but i deletee that
const commentPage = () => {
    return (
        <Def>
            <div class="d-flex justify-content-center">


                <div class="content text-center">

                    <div class="ratings">

                        <span class="product-rating">4.6</span><span>/5</span>
                        <div class="stars">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>

                        <div class="rating-text">

                            <span>46 ratings & 15 reviews</span>

                        </div>

                    </div>

                </div>

            </div>
        </Def>
    )
}

module.exports = commentPage