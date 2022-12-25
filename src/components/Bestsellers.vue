<template>

 
<main class="">
    <div class="container mt-5">
    
    <div class="row mb-5">
    
    <h2>Bestsellers</h2>
    <h5 style="font-style: italic; font-family:Avantgarde;">Explore our most popular blooms</h5>
    
    
        <div class="col">
            <div class="card m-3">
                <img src="https://floward.imgix.net/web/Files/thumPro/210acf69-7a13-477d-8def-d402cd32cecd.jpg?w=450&max-h=400&max-w=400&fit=crop&auto=format"
                    class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">219 SAR</h5>
                    <p class="card-text text-muted">Pink & Purple Roses</p>
    
                    <button type="button" class="btn btn-outline-dark btm-sm" @click=add2cart(219) data-bs-toggle="modal"
                        data-bs-target="#f1">Add to cart <i class="bi bi-cart3 fa-sm"></i></button>
    
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
    
                                            <h5>Pink & Purple Roeses </h5><span
                                                class="text-success">Added successfully<i
                                                    class="bi bi-check-circle-fill text-success ps-1"></i></span>
    
                                        </div>
                                    </div>
    
                                    <div class="row">
                                        <div class="col">
                                            <h5 class="px-1 my-3">Cart total : {{$store.state.total}} SAR</h5>
                                        </div>
                                    </div>
    
    
                                </div>
                                <div class="modal-footer justify-content-center">
                                    <div class="row">
                                        <div class="col"> <button type="button"
                                                class="btn text-white btn"
                                                style="width: 180px; background-color: #A62A6C; font-weight: bold;">Checkout
                                                <i class="bi bi-cart3 text-white fa-sm"></i></button>
                                        </div>
                                        <div class="col"> <button type="button"
                                                class="btn btn-outline-dark btn" style="width: 180px;"
                                                data-bs-dismiss="modal">Continue Shopping</button>
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
    
                    <button type="button" class="btn btn-outline-dark btm-sm" @click=add2cart(319) data-bs-toggle="modal"
                        data-bs-target="#f2">Add to cart <i class="bi bi-cart3 fa-sm"></i></button>
    
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
                                            <h5 class="px-1 my-3">Cart total : {{$store.state.total}} SAR</h5>
                                        </div>
                                    </div>
    
    
                                </div>
                                <div class="modal-footer justify-content-center">
                                    <div class="row">
                                        <div class="col"> <button type="button"
                                                class="btn text-white btn"
                                                style="width: 180px; background-color: #A62A6C; font-weight: bold;">Checkout
                                                <i class="bi bi-cart3 text-white fa-sm"></i></button>
                                        </div>
                                        <div class="col"> <button type="button"
                                                class="btn btn-outline-dark btn" style="width: 180px;"
                                                data-bs-dismiss="modal">Continue Shopping</button>
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
    
                    <button type="button" class="btn btn-outline-dark btm-sm" @click=add2cart(189) data-bs-toggle="modal"
                        data-bs-target="#f3">Add to cart <i class="bi bi-cart3 fa-sm"></i></button>
    
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
                                            <h5 class="px-1 my-3">Cart total : {{$store.state.total}} SAR</h5>
                                        </div>
                                    </div>
    
    
                                </div>
                                <div class="modal-footer justify-content-center">
                                    <div class="row">
                                        <div class="col"> <button type="button"
                                                class="btn text-white btn"
                                                style="width: 180px; background-color: #A62A6C; font-weight: bold;">Checkout
                                                <i class="bi bi-cart3 text-white fa-sm"></i></button>
                                        </div>
                                        <div class="col"> <button type="button"
                                                class="btn btn-outline-dark btn" style="width: 180px;"
                                                data-bs-dismiss="modal">Continue Shopping</button>
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
                    <button type="button" class="btn btn-outline-dark btm-sm" @click=add2cart(305) data-bs-toggle="modal"
                        data-bs-target="#f13">Add to cart <i class="bi bi-cart3 fa-sm"></i></button>
    
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
                                            <h5 class="px-1 my-3">Cart total : {{$store.state.total}} SAR</h5>
                                        </div>
                                    </div>
    
    
                                </div>
                                <div class="modal-footer justify-content-center">
                                    <div class="row">
                                        <div class="col"> <button type="button"
                                                class="btn text-white btn"
                                                style="width: 180px; background-color: #A62A6C; font-weight: bold;">Checkout
                                                <i class="bi bi-cart3 text-white fa-sm"></i></button>
                                        </div>
                                        <div class="col"> <button type="button"
                                                class="btn btn-outline-dark btn" style="width: 180px;"
                                                data-bs-dismiss="modal">Continue Shopping</button>
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
    
                    <button type="button" class="btn btn-outline-dark btm-sm" @click=add2cart(325) data-bs-toggle="modal"
                        data-bs-target="#f5">Add to cart <i class="bi bi-cart3 fa-sm"></i></button>
    
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
                                            <h5 class="px-1 my-3">Cart total : {{$store.state.total}} SAR</h5>
                                        </div>
                                    </div>
    
    
                                </div>
                                <div class="modal-footer justify-content-center">
                                    <div class="row">
                                        <div class="col"> <button type="button"
                                                class="btn text-white btn"
                                                style="width: 180px; background-color: #A62A6C; font-weight: bold;">Checkout
                                                <i class="bi bi-cart3 text-white fa-sm"></i></button>
                                        </div>
                                        <div class="col"> <button type="button"
                                                class="btn btn-outline-dark btn" style="width: 180px;"
                                                data-bs-dismiss="modal">Continue Shopping</button>
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
                    <button type="button" class="btn btn-outline-dark btm-sm" @click=add2cart(299) data-bs-toggle="modal"
                        data-bs-target="#f6">Add to cart <i class="bi bi-cart3 fa-sm"></i></button>
    
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
                                            <h5 class="px-1 my-3">Cart total : {{$store.state.total}} SAR</h5>
                                        </div>
                                    </div>
    
    
                                </div>
                                <div class="modal-footer justify-content-center">
                                    <div class="row">
                                        <div class="col"> <button type="button"
                                                class="btn text-white btn"
                                                style="width: 180px; background-color: #A62A6C; font-weight: bold;">Checkout
                                                <i class="bi bi-cart3 text-white fa-sm"></i></button>
                                        </div>
                                        <div class="col"> <button type="button"
                                                class="btn btn-outline-dark btn" style="width: 180px;"
                                                data-bs-dismiss="modal">Continue Shopping</button>
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
    
                    <button type="button" class="btn btn-outline-dark btm-sm" @click=add2cart(128) data-bs-toggle="modal"
                        data-bs-target="#f7">Add to cart <i class="bi bi-cart3 fa-sm"></i></button>
    
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
    
                                            <h5>12 Yellow Roses Hand Bouquet VI </h5><span class="text-success">Added
                                                successfully<i
                                                    class="bi bi-check-circle-fill text-success ps-1"></i></span>
    
                                        </div>
                                    </div>
    
                                    <div class="row">
                                        <div class="col">
                                            <h5 class="px-1 my-3">Cart total : {{$store.state.total}} SAR</h5>
                                        </div>
                                    </div>
    
    
                                </div>
                                <div class="modal-footer justify-content-center">
                                    <div class="row">
                                        <div class="col"> <button type="button"
                                                class="btn text-white btn"
                                                style="width: 180px; background-color: #A62A6C; font-weight: bold;">Checkout
                                                <i class="bi bi-cart3 text-white fa-sm"></i></button>
                                        </div>
                                        <div class="col"> <button type="button"
                                                class="btn btn-outline-dark btn" style="width: 180px;"
                                                data-bs-dismiss="modal">Continue Shopping</button>
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