<template>




    <main class="">
        <div class="container">

            <div class="row">
                <div class="col">
                    <div class="d-flex flex-row justify-content-center bd-highlight mb-4">
                        <div class="py-5 ms-5 bd-highlight"> <img src="https://i.postimg.cc/02QY92JP/car-gift.png"
                                width="180"></div>
                        <div class="pt-5 bd-highlight">
                            <h5 class="mb-5" style="font-style: italic; font-family: Avantgarde;">Don't miss out on
                            </h5>
                            <h1 class="bounce-top h1_free ms-4" style="font-weight:lighter; font-size:80px">FREE!
                                <br />delivery
                            </h1>
                        </div>
                    </div>

                </div>
            </div>

            <div class="row mb-5">

                <h2>All Flowers Bouquets</h2>
                <h5 style="font-style: italic; font-family:Avantgarde;">Our Flowers sourced from reliable growers and
                    carefully arranged by expert florists</h5>


                <div class="col">
                    <div class="card m-3">
                        <img src="https://floward.imgix.net/web/Files/thumPro/210acf69-7a13-477d-8def-d402cd32cecd.jpg?w=450&max-h=400&max-w=400&fit=crop&auto=format"
                            class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">219 SAR</h5>
                            <p class="card-text text-muted">Pink & Purple Roses</p>

                            <button type="button" class="btn btn-outline-dark btm-sm" @click=add2cart(219)
                                data-bs-toggle="modal" data-bs-target="#f1">Add to cart <i
                                    class="bi bi-cart3 fa-sm"></i></button>

                            <!--modal-->
                            <div class="modal" tabindex="-1" id="f1">
                                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                    <div class="modal-content">


                                        <div class="modal-body">
                                            <div class="row">
                                                <div class="col-md-3 px-3">

                                                    <img width="100"
                                                        src="https://floward.imgix.net/web/Files/thumPro/210acf69-7a13-477d-8def-d402cd32cecd.jpg?w=450&max-h=400&max-w=400&fit=crop&auto=format">

                                                </div>
                                                <div class="col-md-9 pt-4">

                                                    <h5>Pink & Purple Roeses </h5><span class="text-success">Added
                                                        successfully<i
                                                            class="bi bi-check-circle-fill text-success ps-1"></i></span>

                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col">
                                                    <h5 class="px-1 my-3">Cart total : {{ $store.state.total }} SAR</h5>
                                                </div>
                                            </div>


                                        </div>
                                        <div class="modal-footer justify-content-center">
                                            <div class="row">
                                                <div class="col"> <button type="button" class="btn text-white btn"
                                                        style="width: 180px; background-color: #A62A6C; font-weight: bold;">Checkout
                                                        <i class="bi bi-cart3 text-white fa-sm"></i></button>
                                                </div>
                                                <div class="col"> <button type="button" class="btn btn-outline-dark btn"
                                                        style="width: 180px;" data-bs-dismiss="modal">Continue
                                                        Shopping</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!----------------end modal---------------->




                        </div>
                    </div>
                    <div class="card m-3">
                        <img src="https://floward.imgix.net/web/Files/thumPro/add7c6b0-40d0-4448-bc15-2cd4c444309b.jpg?w=450&max-h=400&max-w=400&fit=crop&auto=format"
                            class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">319 SAR</h5>
                            <p class="card-text text-muted">Joyful Moments</p>

                            <button type="button" class="btn btn-outline-dark btm-sm" @click=add2cart(319)
                                data-bs-toggle="modal" data-bs-target="#f2">Add to cart <i
                                    class="bi bi-cart3 fa-sm"></i></button>

                            <!--modal-->
                            <div class="modal" tabindex="-1" id="f2">
                                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                    <div class="modal-content">


                                        <div class="modal-body">
                                            <div class="row">
                                                <div class="col-md-3 px-3">

                                                    <img width="100"
                                                        src="https://floward.imgix.net/web/Files/thumPro/add7c6b0-40d0-4448-bc15-2cd4c444309b.jpg?w=450&max-h=400&max-w=400&fit=crop&auto=format">

                                                </div>
                                                <div class="col-md-9 pt-4">

                                                    <h5>Joyful Moments </h5><span class="text-success">Added
                                                        successfully<i
                                                            class="bi bi-check-circle-fill text-success ps-1"></i></span>

                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col">
                                                    <h5 class="px-1 my-3">Cart total : {{ $store.state.total }} SAR</h5>
                                                </div>
                                            </div>


                                        </div>
                                        <div class="modal-footer justify-content-center">
                                            <div class="row">
                                                <div class="col"> <button type="button" class="btn text-white btn"
                                                        style="width: 180px; background-color: #A62A6C; font-weight: bold;">Checkout
                                                        <i class="bi bi-cart3 text-white fa-sm"></i></button>
                                                </div>
                                                <div class="col"> <button type="button" class="btn btn-outline-dark btn"
                                                        style="width: 180px;" data-bs-dismiss="modal">Continue
                                                        Shopping</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!----------------end modal---------------->



                        </div>
                    </div>


                    <div class="card m-3">
                        <img src="https://floward.imgix.net/web/Files/thumPro/5ec56f6e-a24c-4744-b64a-06109ec005c8.jpg?w=450&max-h=400&max-w=400&fit=crop&auto=format"
                            class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">295 SAR</h5>
                            <p class="card-text text-muted">Calm Wilds</p>

                            <button type="button" class="btn btn-outline-dark btm-sm" @click=add2cart(295)
                                data-bs-toggle="modal" data-bs-target="#f9">Add to cart <i
                                    class="bi bi-cart3 fa-sm"></i></button>

                            <!--modal-->
                            <div class="modal" tabindex="-1" id="f9">
                                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                    <div class="modal-content">


                                        <div class="modal-body">
                                            <div class="row">
                                                <div class="col-md-3 px-3">

                                                    <img width="100"
                                                        src="https://floward.imgix.net/web/Files/thumPro/5ec56f6e-a24c-4744-b64a-06109ec005c8.jpg?w=450&max-h=400&max-w=400&fit=crop&auto=format">

                                                </div>
                                                <div class="col-md-9 pt-4">

                                                    <h5>Calm Wilds </h5><span class="text-success">Added
                                                        successfully<i
                                                            class="bi bi-check-circle-fill text-success ps-1"></i></span>

                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col">
                                                    <h5 class="px-1 my-3">Cart total : {{ $store.state.total }} SAR</h5>
                                                </div>
                                            </div>


                                        </div>
                                        <div class="modal-footer justify-content-center">
                                            <div class="row">
                                                <div class="col"> <button type="button" class="btn text-white btn"
                                                        style="width: 180px; background-color: #A62A6C; font-weight: bold;">Checkout
                                                        <i class="bi bi-cart3 text-white fa-sm"></i></button>
                                                </div>
                                                <div class="col"> <button type="button" class="btn btn-outline-dark btn"
                                                        style="width: 180px;" data-bs-dismiss="modal">Continue
                                                        Shopping</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!----------------end modal---------------->



                        </div>
                    </div>


                    <div class="card m-3">
                        <img src="https://floward.imgix.net/web/Files/thumPro/637756748619542739.jpg?w=450&max-h=400&max-w=400&fit=crop&auto=format"
                            class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">385 SAR</h5>
                            <p class="card-text text-muted">Flowers with perfume</p>

                            <button type="button" class="btn btn-outline-dark btm-sm" @click=add2cart(385)
                                data-bs-toggle="modal" data-bs-target="#f10">Add to cart <i
                                    class="bi bi-cart3 fa-sm"></i></button>

                            <!--modal-->
                            <div class="modal" tabindex="-1" id="f10">
                                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                    <div class="modal-content">


                                        <div class="modal-body">
                                            <div class="row">
                                                <div class="col-md-3 px-3">

                                                    <img width="100"
                                                        src="https://floward.imgix.net/web/Files/thumPro/637756748619542739.jpg?w=450&max-h=400&max-w=400&fit=crop&auto=format">

                                                </div>
                                                <div class="col-md-9 pt-4">

                                                    <h5>Flowers with perfume </h5><span class="text-success">Added
                                                        successfully<i
                                                            class="bi bi-check-circle-fill text-success ps-1"></i></span>

                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col">
                                                    <h5 class="px-1 my-3">Cart total : {{ $store.state.total }} SAR</h5>
                                                </div>
                                            </div>


                                        </div>
                                        <div class="modal-footer justify-content-center">
                                            <div class="row">
                                                <div class="col"> <button type="button" class="btn text-white btn"
                                                        style="width: 180px; background-color: #A62A6C; font-weight: bold;">Checkout
                                                        <i class="bi bi-cart3 text-white fa-sm"></i></button>
                                                </div>
                                                <div class="col"> <button type="button" class="btn btn-outline-dark btn"
                                                        style="width: 180px;" data-bs-dismiss="modal">Continue
                                                        Shopping</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!----------------end modal---------------->



                        </div>
                    </div>






                </div>


                <div class="col">
                    <div class="card m-3">
                        <img src="https://floward.imgix.net/web/Files/thumPro/637554723139363830.jpg?w=450&max-h=400&max-w=400&fit=crop&auto=format"
                            class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">189 SAR</h5>
                            <p class="card-text text-muted">Lemon Bouquet</p>

                            <button type="button" class="btn btn-outline-dark btm-sm" @click=add2cart(189)
                                data-bs-toggle="modal" data-bs-target="#f3">Add to cart <i
                                    class="bi bi-cart3 fa-sm"></i></button>

                            <!--modal-->
                            <div class="modal" tabindex="-1" id="f3">
                                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                    <div class="modal-content">


                                        <div class="modal-body">
                                            <div class="row">
                                                <div class="col-md-3 px-3">

                                                    <img width="100"
                                                        src="https://floward.imgix.net/web/Files/thumPro/637554723139363830.jpg?w=450&max-h=400&max-w=400&fit=crop&auto=format">

                                                </div>
                                                <div class="col-md-9 pt-4">

                                                    <h5>Lemon Bouquet </h5><span class="text-success">Added
                                                        successfully<i
                                                            class="bi bi-check-circle-fill text-success ps-1"></i></span>

                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col">
                                                    <h5 class="px-1 my-3">Cart total : {{ $store.state.total }} SAR</h5>
                                                </div>
                                            </div>


                                        </div>
                                        <div class="modal-footer justify-content-center">
                                            <div class="row">
                                                <div class="col"> <button type="button" class="btn text-white btn"
                                                        style="width: 180px; background-color: #A62A6C; font-weight: bold;">Checkout
                                                        <i class="bi bi-cart3 text-white fa-sm"></i></button>
                                                </div>
                                                <div class="col"> <button type="button" class="btn btn-outline-dark btn"
                                                        style="width: 180px;" data-bs-dismiss="modal">Continue
                                                        Shopping</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!----------------end modal---------------->

                        </div>
                    </div>
                    <div class="card m-3">
                        <img src="https://floward.imgix.net/web/Files/thumPro/1bf569ef-a49a-4f1c-bdfa-a79dc8bdec34.jpg?w=450&max-h=400&max-w=400&fit=crop&auto=format"
                            class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">295 SAR</h5>
                            <p class="card-text text-muted">Stunning Citrus</p>
                            <button type="button" class="btn btn-outline-dark btm-sm" @click=add2cart(295)
                                data-bs-toggle="modal" data-bs-target="#f4">Add to cart <i
                                    class="bi bi-cart3 fa-sm"></i></button>

                            <!--modal-->
                            <div class="modal" tabindex="-1" id="f4">
                                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                    <div class="modal-content">


                                        <div class="modal-body">
                                            <div class="row">
                                                <div class="col-md-3 px-3">

                                                    <img width="100"
                                                        src="https://floward.imgix.net/web/Files/thumPro/1bf569ef-a49a-4f1c-bdfa-a79dc8bdec34.jpg?w=450&max-h=400&max-w=400&fit=crop&auto=format">

                                                </div>
                                                <div class="col-md-9 pt-4">

                                                    <h5>Stunning Citrus </h5><span class="text-success">Added
                                                        successfully<i
                                                            class="bi bi-check-circle-fill text-success ps-1"></i></span>

                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col">
                                                    <h5 class="px-1 my-3">Cart total : {{ $store.state.total }} SAR</h5>
                                                </div>
                                            </div>


                                        </div>
                                        <div class="modal-footer justify-content-center">
                                            <div class="row">
                                                <div class="col"> <button type="button" class="btn text-white btn"
                                                        style="width: 180px; background-color: #A62A6C; font-weight: bold;">Checkout
                                                        <i class="bi bi-cart3 text-white fa-sm"></i></button>
                                                </div>
                                                <div class="col"> <button type="button" class="btn btn-outline-dark btn"
                                                        style="width: 180px;" data-bs-dismiss="modal">Continue
                                                        Shopping</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!----------------end modal---------------->


                        </div>
                    </div>

                    <div class="card m-3">
                        <img src="https://floward.imgix.net/web/Files/thumPro/c5d26be2-773a-4da4-86c0-1b3814669834.jpg?w=450&max-h=400&max-w=400&fit=crop&auto=format"
                            class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">395 SAR</h5>
                            <p class="card-text text-muted">blissful</p>
                            <button type="button" class="btn btn-outline-dark btm-sm" @click=add2cart(395)
                                data-bs-toggle="modal" data-bs-target="#f11">Add to cart <i
                                    class="bi bi-cart3 fa-sm"></i></button>

                            <!--modal-->
                            <div class="modal" tabindex="-1" id="f11">
                                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                    <div class="modal-content">


                                        <div class="modal-body">
                                            <div class="row">
                                                <div class="col-md-3 px-3">

                                                    <img width="100"
                                                        src="https://floward.imgix.net/web/Files/thumPro/c5d26be2-773a-4da4-86c0-1b3814669834.jpg?w=450&max-h=400&max-w=400&fit=crop&auto=format">

                                                </div>
                                                <div class="col-md-9 pt-4">

                                                    <h5>blissful </h5><span class="text-success">Added
                                                        successfully<i
                                                            class="bi bi-check-circle-fill text-success ps-1"></i></span>

                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col">
                                                    <h5 class="px-1 my-3">Cart total : {{ $store.state.total }} SAR</h5>
                                                </div>
                                            </div>


                                        </div>
                                        <div class="modal-footer justify-content-center">
                                            <div class="row">
                                                <div class="col"> <button type="button" class="btn text-white btn"
                                                        style="width: 180px; background-color: #A62A6C; font-weight: bold;">Checkout
                                                        <i class="bi bi-cart3 text-white fa-sm"></i></button>
                                                </div>
                                                <div class="col"> <button type="button" class="btn btn-outline-dark btn"
                                                        style="width: 180px;" data-bs-dismiss="modal">Continue
                                                        Shopping</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!----------------end modal---------------->


                        </div>
                    </div>


                    <div class="card m-3">
                        <img src="https://floward.imgix.net/web/Files/thumPro/637710097381511132.jpg?w=450&max-h=400&max-w=400&fit=crop&auto=format"
                            class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">249 SAR</h5>
                            <p class="card-text text-muted">Home Fregnance Gift</p>
                            <button type="button" class="btn btn-outline-dark btm-sm" @click=add2cart(249)
                                data-bs-toggle="modal" data-bs-target="#f12">Add to cart <i
                                    class="bi bi-cart3 fa-sm"></i></button>

                            <!--modal-->
                            <div class="modal" tabindex="-1" id="f12">
                                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                    <div class="modal-content">


                                        <div class="modal-body">
                                            <div class="row">
                                                <div class="col-md-3 px-3">

                                                    <img width="100"
                                                        src="https://floward.imgix.net/web/Files/thumPro/637710097381511132.jpg?w=450&max-h=400&max-w=400&fit=crop&auto=format">

                                                </div>
                                                <div class="col-md-9 pt-4">

                                                    <h5>Home Fregnance Gift </h5><span class="text-success">Added
                                                        successfully<i
                                                            class="bi bi-check-circle-fill text-success ps-1"></i></span>

                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col">
                                                    <h5 class="px-1 my-3">Cart total : {{ $store.state.total }} SAR</h5>
                                                </div>
                                            </div>


                                        </div>
                                        <div class="modal-footer justify-content-center">
                                            <div class="row">
                                                <div class="col"> <button type="button" class="btn text-white btn"
                                                        style="width: 180px; background-color: #A62A6C; font-weight: bold;">Checkout
                                                        <i class="bi bi-cart3 text-white fa-sm"></i></button>
                                                </div>
                                                <div class="col"> <button type="button" class="btn btn-outline-dark btn"
                                                        style="width: 180px;" data-bs-dismiss="modal">Continue
                                                        Shopping</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!----------------end modal---------------->


                        </div>
                    </div>



                </div>


                <div class="col">
                    <div class="card m-3">
                        <img src="https://floward.imgix.net/web/Files/thumPro/69d51c0c-c13c-4798-8011-a122592b536b.jpg?w=450&max-h=400&max-w=400&fit=crop&auto=format"
                            class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">325 SAR</h5>
                            <p class="card-text text-muted">Written In The Stars</p>

                            <button type="button" class="btn btn-outline-dark btm-sm" @click=add2cart(325)
                                data-bs-toggle="modal" data-bs-target="#f5">Add to cart <i
                                    class="bi bi-cart3 fa-sm"></i></button>

                            <!--modal-->
                            <div class="modal" tabindex="-1" id="f5">
                                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                    <div class="modal-content">


                                        <div class="modal-body">
                                            <div class="row">
                                                <div class="col-md-3 px-3">

                                                    <img width="100"
                                                        src="https://floward.imgix.net/web/Files/thumPro/69d51c0c-c13c-4798-8011-a122592b536b.jpg?w=450&max-h=400&max-w=400&fit=crop&auto=format">

                                                </div>
                                                <div class="col-md-9 pt-4">

                                                    <h5>Written In The Stars </h5><span class="text-success">Added
                                                        successfully<i
                                                            class="bi bi-check-circle-fill text-success ps-1"></i></span>

                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col">
                                                    <h5 class="px-1 my-3">Cart total : {{ $store.state.total }} SAR</h5>
                                                </div>
                                            </div>


                                        </div>
                                        <div class="modal-footer justify-content-center">
                                            <div class="row">
                                                <div class="col"> <button type="button" class="btn text-white btn"
                                                        style="width: 180px; background-color: #A62A6C; font-weight: bold;">Checkout
                                                        <i class="bi bi-cart3 text-white fa-sm"></i></button>
                                                </div>
                                                <div class="col"> <button type="button" class="btn btn-outline-dark btn"
                                                        style="width: 180px;" data-bs-dismiss="modal">Continue
                                                        Shopping</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!----------------end modal---------------->

                        </div>
                    </div>
                    <div class="card m-3">
                        <img src="https://floward.imgix.net/web/Files/thumPro/abd198ed-caa9-4cc8-ba05-fd7413f98cf7.jpg?w=450&max-h=400&max-w=400&fit=crop&auto=format"
                            class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">299 SAR</h5>
                            <p class="card-text text-muted">20 Pink Baby Roses Bouquet</p>
                            <button type="button" class="btn btn-outline-dark btm-sm" @click=add2cart(299)
                                data-bs-toggle="modal" data-bs-target="#f6">Add to cart <i
                                    class="bi bi-cart3 fa-sm"></i></button>

                            <!--modal-->
                            <div class="modal" tabindex="-1" id="f6">
                                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                    <div class="modal-content">


                                        <div class="modal-body">
                                            <div class="row">
                                                <div class="col-md-3 px-3">

                                                    <img width="100"
                                                        src="https://floward.imgix.net/web/Files/thumPro/abd198ed-caa9-4cc8-ba05-fd7413f98cf7.jpg?w=450&max-h=400&max-w=400&fit=crop&auto=format">

                                                </div>
                                                <div class="col-md-9 pt-4">

                                                    <h5>20 Pink Baby Roses Bouquet </h5><span class="text-success">Added
                                                        successfully<i
                                                            class="bi bi-check-circle-fill text-success ps-1"></i></span>

                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col">
                                                    <h5 class="px-1 my-3">Cart total : {{ $store.state.total }} SAR</h5>
                                                </div>
                                            </div>


                                        </div>
                                        <div class="modal-footer justify-content-center">
                                            <div class="row">
                                                <div class="col"> <button type="button" class="btn text-white btn"
                                                        style="width: 180px; background-color: #A62A6C; font-weight: bold;">Checkout
                                                        <i class="bi bi-cart3 text-white fa-sm"></i></button>
                                                </div>
                                                <div class="col"> <button type="button" class="btn btn-outline-dark btn"
                                                        style="width: 180px;" data-bs-dismiss="modal">Continue
                                                        Shopping</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!----------------end modal---------------->


                        </div>
                    </div>
                    <div class="card m-3">
                        <img src="https://floward.imgix.net/web/Files/thumPro/f02ffcb8-2bd4-4ac4-bd06-79ed38d9a66c.jpg?w=450&max-h=400&max-w=400&fit=crop&auto=format"
                            class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">305 SAR</h5>
                            <p class="card-text text-muted">Mubkhar Perfumes</p>
                            <button type="button" class="btn btn-outline-dark btm-sm" @click=add2cart(305)
                                data-bs-toggle="modal" data-bs-target="#f13">Add to cart <i
                                    class="bi bi-cart3 fa-sm"></i></button>

                            <!--modal-->
                            <div class="modal" tabindex="-1" id="f13">
                                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                    <div class="modal-content">


                                        <div class="modal-body">
                                            <div class="row">
                                                <div class="col-md-3 px-3">

                                                    <img width="100"
                                                        src="https://floward.imgix.net/web/Files/thumPro/f02ffcb8-2bd4-4ac4-bd06-79ed38d9a66c.jpg?w=450&max-h=400&max-w=400&fit=crop&auto=format">

                                                </div>
                                                <div class="col-md-9 pt-4">

                                                    <h5>Mubkhar Perfumes </h5><span class="text-success">Added
                                                        successfully<i
                                                            class="bi bi-check-circle-fill text-success ps-1"></i></span>

                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col">
                                                    <h5 class="px-1 my-3">Cart total : {{ $store.state.total }} SAR</h5>
                                                </div>
                                            </div>


                                        </div>
                                        <div class="modal-footer justify-content-center">
                                            <div class="row">
                                                <div class="col"> <button type="button" class="btn text-white btn"
                                                        style="width: 180px; background-color: #A62A6C; font-weight: bold;">Checkout
                                                        <i class="bi bi-cart3 text-white fa-sm"></i></button>
                                                </div>
                                                <div class="col"> <button type="button" class="btn btn-outline-dark btn"
                                                        style="width: 180px;" data-bs-dismiss="modal">Continue
                                                        Shopping</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!----------------end modal---------------->


                        </div>
                    </div>
                    <div class="card m-3">
                        <img src="https://floward.imgix.net/web/Files/thumPro/637564183998393090.jpg?w=450&max-h=400&max-w=400&fit=crop&auto=format"
                            class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">699 SAR</h5>
                            <p class="card-text text-muted">Light Blooms with Jewelry</p>
                            <button type="button" class="btn btn-outline-dark btm-sm" @click=add2cart(699)
                                data-bs-toggle="modal" data-bs-target="#f14">Add to cart <i
                                    class="bi bi-cart3 fa-sm"></i></button>

                            <!--modal-->
                            <div class="modal" tabindex="-1" id="f14">
                                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                    <div class="modal-content">


                                        <div class="modal-body">
                                            <div class="row">
                                                <div class="col-md-3 px-3">

                                                    <img width="100"
                                                        src="https://floward.imgix.net/web/Files/thumPro/637564183998393090.jpg?w=450&max-h=400&max-w=400&fit=crop&auto=format">

                                                </div>
                                                <div class="col-md-9 pt-4">

                                                    <h5>Light Blooms with Jewelry </h5><span class="text-success">Added
                                                        successfully<i
                                                            class="bi bi-check-circle-fill text-success ps-1"></i></span>

                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col">
                                                    <h5 class="px-1 my-3">Cart total : {{ $store.state.total }} SAR</h5>
                                                </div>
                                            </div>


                                        </div>
                                        <div class="modal-footer justify-content-center">
                                            <div class="row">
                                                <div class="col"> <button type="button" class="btn text-white btn"
                                                        style="width: 180px; background-color: #A62A6C; font-weight: bold;">Checkout
                                                        <i class="bi bi-cart3 text-white fa-sm"></i></button>
                                                </div>
                                                <div class="col"> <button type="button" class="btn btn-outline-dark btn"
                                                        style="width: 180px;" data-bs-dismiss="modal">Continue
                                                        Shopping</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!----------------end modal---------------->


                        </div>
                    </div>
                </div>


                <div class="col">
                    <div class="card m-3">
                        <img src="https://floward.imgix.net/web/Files/thumPro/637740410296367805.jpg?w=450&max-h=400&max-w=400&fit=crop&auto=format"
                            class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">128 SAR</h5>
                            <p class="card-text text-muted">12 Yellow Roses Hand Bouquet VI</p>

                            <button type="button" class="btn btn-outline-dark btm-sm" @click=add2cart(128)
                                data-bs-toggle="modal" data-bs-target="#f7">Add to cart <i
                                    class="bi bi-cart3 fa-sm"></i></button>

                            <!--modal-->
                            <div class="modal" tabindex="-1" id="f7">
                                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                    <div class="modal-content">


                                        <div class="modal-body">
                                            <div class="row">
                                                <div class="col-md-3 px-3">

                                                    <img width="100"
                                                        src="https://floward.imgix.net/web/Files/thumPro/637740410296367805.jpg?w=450&max-h=400&max-w=400&fit=crop&auto=format">

                                                </div>
                                                <div class="col-md-9 pt-4">

                                                    <h5>12 Yellow Roses Hand Bouquet VI </h5><span
                                                        class="text-success">Added
                                                        successfully<i
                                                            class="bi bi-check-circle-fill text-success ps-1"></i></span>

                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col">
                                                    <h5 class="px-1 my-3">Cart total : {{ $store.state.total }} SAR</h5>
                                                </div>
                                            </div>


                                        </div>
                                        <div class="modal-footer justify-content-center">
                                            <div class="row">
                                                <div class="col"> <button type="button" class="btn text-white btn"
                                                        style="width: 180px; background-color: #A62A6C; font-weight: bold;">Checkout
                                                        <i class="bi bi-cart3 text-white fa-sm"></i></button>
                                                </div>
                                                <div class="col"> <button type="button" class="btn btn-outline-dark btn"
                                                        style="width: 180px;" data-bs-dismiss="modal">Continue
                                                        Shopping</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!----------------end modal---------------->

                        </div>
                    </div>
                    <div class="card m-3">
                        <img src="https://floward.imgix.net/web/Files/thumPro/dfded169-7d21-4a46-9124-8c2549de529b.jpg?w=450&max-h=400&max-w=400&fit=crop&auto=format"
                            class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">375 SAR</h5>
                            <p class="card-text text-muted">Just White</p>
                            <button type="button" class="btn btn-outline-dark btm-sm" @click=add2cart(375)
                                data-bs-toggle="modal" data-bs-target="#f8">Add to cart <i
                                    class="bi bi-cart3 fa-sm"></i></button>

                            <!--modal-->
                            <div class="modal" tabindex="-1" id="f8">
                                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                    <div class="modal-content">


                                        <div class="modal-body">
                                            <div class="row">
                                                <div class="col-md-3 px-3">

                                                    <img width="100"
                                                        src="https://floward.imgix.net/web/Files/thumPro/dfded169-7d21-4a46-9124-8c2549de529b.jpg?w=450&max-h=400&max-w=400&fit=crop&auto=format">

                                                </div>
                                                <div class="col-md-9 pt-4">

                                                    <h5>Just White </h5><span class="text-success">Added
                                                        successfully<i
                                                            class="bi bi-check-circle-fill text-success ps-1"></i></span>

                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col">
                                                    <h5 class="px-1 my-3">Cart total : {{ $store.state.total }} SAR</h5>
                                                </div>
                                            </div>


                                        </div>
                                        <div class="modal-footer justify-content-center">
                                            <div class="row">
                                                <div class="col"> <button type="button" class="btn text-white btn"
                                                        style="width: 180px; background-color: #A62A6C; font-weight: bold;">Checkout
                                                        <i class="bi bi-cart3 text-white fa-sm"></i></button>
                                                </div>
                                                <div class="col"> <button type="button" class="btn btn-outline-dark btn"
                                                        style="width: 180px;" data-bs-dismiss="modal">Continue
                                                        Shopping</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!----------------end modal---------------->


                        </div>
                    </div>
                    <div class="card m-3">
                        <img src="https://floward.imgix.net/web/Files/thumPro/53edcd83-b6c5-44fb-bcd7-22e3d7cb36c3.jpg?w=450&max-h=400&max-w=400&fit=crop&auto=format"
                            class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">195 SAR</h5>
                            <p class="card-text text-muted">Porsche Accessory & Flowers</p>

                            <button type="button" class="btn btn-outline-dark btm-sm" @click=add2cart(195)
                                data-bs-toggle="modal" data-bs-target="#f15">Add to cart <i
                                    class="bi bi-cart3 fa-sm"></i></button>

                            <!--modal-->
                            <div class="modal" tabindex="-1" id="f15">
                                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                    <div class="modal-content">


                                        <div class="modal-body">
                                            <div class="row">
                                                <div class="col-md-3 px-3">

                                                    <img width="100"
                                                        src="https://floward.imgix.net/web/Files/thumPro/53edcd83-b6c5-44fb-bcd7-22e3d7cb36c3.jpg?w=450&max-h=400&max-w=400&fit=crop&auto=format">

                                                </div>
                                                <div class="col-md-9 pt-4">

                                                    <h5>Porsche Accessory & Flowers </h5><span
                                                        class="text-success">Added
                                                        successfully<i
                                                            class="bi bi-check-circle-fill text-success ps-1"></i></span>

                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col">
                                                    <h5 class="px-1 my-3">Cart total : {{ $store.state.total }} SAR</h5>
                                                </div>
                                            </div>


                                        </div>
                                        <div class="modal-footer justify-content-center">
                                            <div class="row">
                                                <div class="col"> <button type="button" class="btn text-white btn"
                                                        style="width: 180px; background-color: #A62A6C; font-weight: bold;">Checkout
                                                        <i class="bi bi-cart3 text-white fa-sm"></i></button>
                                                </div>
                                                <div class="col"> <button type="button" class="btn btn-outline-dark btn"
                                                        style="width: 180px;" data-bs-dismiss="modal">Continue
                                                        Shopping</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!----------------end modal---------------->

                        </div>
                    </div>
                    <div class="card m-3">
                        <img src="https://floward.imgix.net/web/Files/thumPro/fb3755d0-d9f3-4b16-b720-851156081483.jpg?w=450&max-h=400&max-w=400&fit=crop&auto=format"
                            class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">225 SAR</h5>
                            <p class="card-text text-muted">Charming Red with Hanoverian</p>
                            <button type="button" class="btn btn-outline-dark btm-sm" @click=add2cart(225)
                                data-bs-toggle="modal" data-bs-target="#f16">Add to cart <i
                                    class="bi bi-cart3 fa-sm"></i></button>

                            <!--modal-->
                            <div class="modal" tabindex="-1" id="f16">
                                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                    <div class="modal-content">


                                        <div class="modal-body">
                                            <div class="row">
                                                <div class="col-md-3 px-3">

                                                    <img width="100"
                                                        src="https://floward.imgix.net/web/Files/thumPro/fb3755d0-d9f3-4b16-b720-851156081483.jpg?w=450&max-h=400&max-w=400&fit=crop&auto=format">

                                                </div>
                                                <div class="col-md-9 pt-4">

                                                    <h5>Charming Red with Hanoverian </h5><span
                                                        class="text-success">Added
                                                        successfully<i
                                                            class="bi bi-check-circle-fill text-success ps-1"></i></span>

                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col">
                                                    <h5 class="px-1 my-3">Cart total : {{ $store.state.total }} SAR</h5>
                                                </div>
                                            </div>


                                        </div>
                                        <div class="modal-footer justify-content-center">
                                            <div class="row">
                                                <div class="col"> <button type="button" class="btn text-white btn"
                                                        style="width: 180px; background-color: #A62A6C; font-weight: bold;">Checkout
                                                        <i class="bi bi-cart3 text-white fa-sm"></i></button>
                                                </div>
                                                <div class="col"> <button type="button" class="btn btn-outline-dark btn"
                                                        style="width: 180px;" data-bs-dismiss="modal">Continue
                                                        Shopping</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!----------------end modal---------------->


                        </div>
                    </div>



                </div>


            </div>



        </div>

    </main>







</template>

<script>

export default {

    data() {
        return {


        }


    },
    mounted() {
        //
    },

    methods: {

        add2cart(price) {
            this.$store.commit('increment');
            this.$store.commit('total_price', price);

        },


    }

}
</script>

<style>
i {
    color: #545454;
    font-size: 22px;
    font-style: normal;
    font-weight: lighter;
}

i:hover {
    color: #d0276b;
}
</style>