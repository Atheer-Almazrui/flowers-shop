<template>

    <!-- أثير عبدالرحمن المزروعي
    atheer.almazrui@gmail.com -->


    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.2.1/css/all.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">


    <nav class="bg-light">
        <div class="d-flex justify-content-between">

            <div class="ms-5 mt-4">
                <form class="d-flex">
                    <input class="form-control me-1" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn mb-1" type="submit"><i class="bi bi-search"></i></button>
                </form>
            </div>

            <div>
                <img class="mt-2 mb-2" src="https://i.postimg.cc/zfHkDLNX/n-logo.png" height="90">
            </div>


            <div class="me-5 mt-4 pt-3">
                <i class="bi bi-person-circle mx-2" dir="rtl"> Log in</i>
                <i class="bi bi-three-dots-vertical fa-lg m-1" style="color:#909090;" />
                <i class="bi bi-cart3" dir="rtl" data-bs-toggle="modal" data-bs-target="#cart"> Cart</i>
                <span class="badge rounded-pill badge-notification bg-danger" style="font-size:11px">{{
                        $store.state.count
                }}</span>



                <!--modal-->
                <div class="modal" tabindex="-1" id="cart">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content bg-light">

                            <div class="modal-header">
                                <h5 class="modal-title">Order Summary</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row">

                                    <div class="col-md-9">
                                        <p style="font-weight:lighter;font-size:18px">Subtotal ({{ $store.state.count }}
                                            items)</p>
                                        <p style="font-weight:lighter;font-size:18px">Shipping</p>



                                        <form class="d-flex mt-3">
                                            <input class="form-control" type="text" placeholder="Coupon Code">
                                        </form>

                                    </div>

                                    <div class="col-md-3">

                                        <p>{{ $store.state.total }} SAR</p>
                                        <p class="text-decoration-line-through">30 SAR<span class="text-danger ps-2"
                                                style="font-weight:bold;font-size:larger;"> FREE</span></p>

                                        <form class="d-flex mt-4">
                                            <button class="btn btn-outline-dark px-4" type="submit"
                                                style="font-size: 14px; font-weight:bold;">apply</button>
                                        </form>
                                    </div>
                                </div>




                            </div>
                            <div class="modal-footer justify-content-between">
                                <div class="row">
                                    <div class="col">
                                        <h3 class="px-1 my-3">Total : {{ $store.state.total }} SAR</h3>

                                    </div>

                                    <div class="d-flex justify-content-center mt-2">
                                        <button type="button" class="btn text-white btn mb-2"
                                            style="width: 280px; background-color: #A62A6C; font-weight: bold;"
                                            data-bs-dismiss="modal">
                                            Checkout
                                            <i class="bi bi-cart-check text-white fa-lg"></i>
                                        </button>                                    
                                    </div>
                                </div>




                            </div>
                        </div>
                    </div>
                </div>
                <!----------------end modal---------------->




            </div>
        </div>


    </nav>

    <nav class="navbar navbar-expand-lg navbar-light bg-light border-top border-2">

        <div class="container justify-content-center justify-content-md-between" style="font-size: 18px;">

            <ul class="navbar-nav flex-row">

                <li class="nav-item me-2 me-lg-3 d-none d-md-inline-block">
                    <router-link to="/" class="nav-link">All Categories</router-link>
                </li>
                <li class="nav-item me-2 me-lg-3 d-none d-md-inline-block">
                    <router-link to="/New_products" class="nav-link">New Arrivals</router-link>
                </li>
                <li class="nav-item me-2 me-lg-3 d-none d-md-inline-block">
                    <router-link to="/Bestsellers" class="nav-link">Bestsellers</router-link>
                </li>
                <li class="nav-item me-2 me-lg-3 d-none d-md-inline-block">
                    <router-link to="/Gifts" class="nav-link">Gifts</router-link>
                </li>
            </ul>
        </div>

    </nav>
    <router-view />


</template>

<script>
export default {

    data() {
        return {


        }


    },
    mounted() {

    },

    methods: {




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

span {
    font-size: 16px;
    position: absolute;
    border-radius: 60%;
    height: 17px;
}

.nav-link:hover {
    color: #d0276b !important;
    background-color: rgb(236, 236, 236);
    border-radius: 10%;
}

.router-link-exact-active {
    color: #d0276b !important;
    background-color: rgb(236, 236, 236);
    border-radius: 10%;

}
</style>