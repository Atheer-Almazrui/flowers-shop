<template>

    <main class="">
        <div class="container mt-5">



            <div class="row mb-5">

                <h2>New Arrivals</h2>
                <h5 style="font-style: italic; font-family:Avantgarde;">Discover what is new</h5>


                <div class="col">

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




                </div>


                <div class="col">

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


                </div>


                <div class="col">
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