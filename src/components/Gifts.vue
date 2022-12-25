<template>

    <main class="">
        <div class="container mt-5">



            <div class="row mb-5">

                <h2>Gifts</h2>
                <h5 style="font-style: italic; font-family:Avantgarde;">Life is filled with occasions and Floward has them covered</h5>


                <div class="col">

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








                </div>


                <div class="col">

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

                </div>


                <div class="col">

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