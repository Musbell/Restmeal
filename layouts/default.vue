<template>
    <v-app>
        <v-toolbar dark color="red darken-4" dense prominent extended>
            <v-toolbar-title> <v-icon x-large>restaurant</v-icon>
                <span class="heading display-1">Restmeal</span></v-toolbar-title>
            <v-toolbar-title class="white--text" slot="extension">Online Food Ordering & Delivery Services</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat>Link One</v-btn>
                <v-btn flat>Link Two</v-btn>
                <v-btn flat>Link Three</v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-carousel hide-controls dark=true>
            <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i">
                <v-container>
                    <v-layout>
                        <v-flex class="white--text headline" style="max-width: 100%">
                            <span id="carousel-content"> {{ item.text }}</span><br><br><br>
                            <span id="carousel-description"> {{ item.description }}</span>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-carousel-item>
        </v-carousel>
        <div style="text-align: center">
            <v-stepper v-model="e1" style="background-color: #4E342E" dark>
                <div style="background-color: #B71C1C; padding: 10px; color: white">
                    <h1 style="margin: 10px" class="heading">How to order online food in just 4 steps</h1>
                </div>
                <v-stepper-header style="background-color: #2F1D1B">
                    <v-stepper-step step="1" :complete="e1 > 1" >Select Restaurant</v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step step="2" :complete="e1 > 2">Choose Food</v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step step="3" :complete="e1 > 3">Meal's on it's way</v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step step="4">Pay & Enjoy Food!</v-stepper-step>
                </v-stepper-header>
                <v-stepper-items>
                    <v-stepper-content step="1">
                        <v-container grid-list-md text-xs-center>
                            <v-layout row wrap>
                                <v-flex xs6>
                                    <img src="https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?w=940&h=650&auto=compress&cs=tinysrgb"
                                         alt="" style="max-width: 90%; border: white thick solid; box-shadow: 3px 3px;">
                                </v-flex>
                                <v-flex xs6>
                                    <div>
                                        <p class="white--text">jhdhfsuehgherthwe ertuwie isugwe srghwe</p>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-container>
                        <v-btn color="red darken-4" dark @click.native="e1 = 2">Continue</v-btn>
                        <v-btn flat>Cancel</v-btn>
                    </v-stepper-content>
                    <v-stepper-content step="2">
                        <v-container grid-list-md text-xs-center>
                            <v-layout row wrap>
                                <v-flex xs6>
                                    <img src="https://images.pexels.com/photos/163018/food-business-lunch-restaurant-lunch-163018.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
                                         alt="" style="max-width: 90%; border: white thick solid; box-shadow: 3px 3px;">
                                </v-flex>
                                <v-flex xs6>
                                    <div>
                                        jdjkshui kjbfgisd kdbgiusdbgisbdig kdbgfiusd kdbfgdf kjbifga lbgfd
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-container>
                        <v-btn color="red darken-4" dark @click.native="e1 = 3">Continue</v-btn>
                        <v-btn flat>Cancel</v-btn>
                    </v-stepper-content>
                    <v-stepper-content step="3">
                        <v-container grid-list-md text-xs-center>
                            <v-layout row wrap>
                                <v-flex xs6>
                                    <img src="https://images.pexels.com/photos/417005/pexels-photo-417005.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
                                         alt="" style="max-width: 90%; border: white thick solid; box-shadow: 3px 3px;">
                                </v-flex>
                                <v-flex xs6>
                                    <div>
                                        jdjkshui kjbfgisd kdbgiusdbgisbdig kdbgfiusd kdbfgdf kjbifga lbgfd
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-container>
                        <v-btn color="red darken-4" dark @click.native="e1 = 4">Continue</v-btn>
                        <v-btn flat>Cancel</v-btn>
                    </v-stepper-content>
                    <v-stepper-content step="4">
                        <v-container grid-list-md text-xs-center>
                            <v-layout row wrap>
                                <v-flex xs6>
                                    <img src="https://images.pexels.com/photos/159991/pexels-photo-159991.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
                                         alt="" style="max-width: 90%; border: white thick solid; box-shadow: 3px 3px;">
                                </v-flex>
                                <v-flex xs6>
                                    ngdghsdfhdgdoi
                                </v-flex>
                            </v-layout>
                        </v-container>
                        <v-btn color="red darken-4" dark @click.native="e1 = 1">Continue</v-btn>
                        <v-btn flat>Cancel</v-btn>
                    </v-stepper-content>
                </v-stepper-items>
            </v-stepper>
        </div>

        <div>
            <v-parallax src="https://images.pexels.com/photos/326281/pexels-photo-326281.jpeg?w=940&h=650&auto=compress&cs=tinysrgb">
                <v-layout column align-center justify-center>
                    <h1 class="white--text">Vuetify.js</h1>
                    <h4 class="white--text">Build your application today!</h4>
                </v-layout>
            </v-parallax>
        </div>

        <div style="background-color: black; color: white;" dark>
            <v-container fill-height>
                <v-layout>
                    <v-flex>
                        <h3 class="display-3 text-xs-center heading">Special Services</h3>
                        <v-container grid-list-md>
                            <v-layout row wrap>
                                <v-flex xs6>
                                    <v-container>
                                        <v-layout row wrap>
                                            <v-flex xs2>
                                                <v-icon x-large dark>local_shipping</v-icon>
                                            </v-flex>
                                            <v-flex xs10>
                                                <h4 class="display-1">Delivery Services</h4>
                                                <p>We're into delivery services at a reasonable amount.</p>
                                            </v-flex>
                                        </v-layout>
                                    </v-container>
                                </v-flex>
                                <v-flex xs6>
                                    <v-container>
                                        <v-layout row wrap>
                                            <v-flex xs2>
                                                <v-icon x-large dark>cake</v-icon>
                                            </v-flex>
                                            <v-flex xs10>
                                                <h4 class="display-1">Party Orders</h4>
                                                <p>We cover events planning, only when food is involved.</p>
                                            </v-flex>
                                        </v-layout>
                                    </v-container>
                                </v-flex>

                                <v-flex xs6>
                                    <v-container>
                                        <v-layout row wrap>
                                            <v-flex xs2>
                                                <v-icon x-large dark>group</v-icon>
                                            </v-flex>
                                            <v-flex xs10>
                                                <h4 class="display-1">Team Up Scheme</h4>
                                                <p>Our Food Experts/Analysis Team can come in handy anytime.</p>
                                            </v-flex>
                                        </v-layout>
                                    </v-container>
                                </v-flex>
                                <v-flex xs6>
                                    <v-container>
                                        <v-layout row wrap>
                                            <v-flex xs2>
                                                <v-icon x-large dark>local_dining</v-icon>
                                            </v-flex>
                                            <v-flex xs10>
                                                <h4 class="display-1">Restaurant Online Presence</h4>
                                                <p>We bring your restaurants online to help you reach more customers.</p>
                                            </v-flex>
                                        </v-layout>
                                    </v-container>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-flex>
                </v-layout>
            </v-container>
        </div>


        <v-footer height="auto" dark>
            <v-card
                    flat
                    tile
                    class="white--text text-xs-center"
            >
                <v-card-text>
                    <v-btn
                            v-for="icon in icons"
                            :key="icon"
                            icon
                            class="mx-3 white--text"
                    >
                        <v-icon size="24px">{{ icon }}</v-icon>
                    </v-btn>
                </v-card-text>
                <v-card-text class="white--text pt-0">
                    Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </v-card-text>
                <v-card-text class="white--text">
                    &copy; 2018 <strong>vuetifyjs.com</strong>
                </v-card-text>
            </v-card>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        data () {
            return {
                items: [
                    {
                        src: 'https://s3.amazonaws.com/busites_www/mvillehotel/pages/meta/thanksgiving_1509635534.jpg',
                        text: 'Welcome to Restmeal',
                        description: 'Food delivery at your fingertip'
                    },
                    {
                        src: 'https://www.walldevil.com/wallpapers/h14/meal-seed-nut-onion-broccoli-meat.jpg',
                        text: 'Order delicious meals',
                        description: 'from your favourite restaurants.'
                    }
                ],
                e1: 0,

                icons: ['home', 'email', 'cake', 'mood', 'public']
            }
        }

    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Berkshire+Swash');

    .heading{
        font-family: 'Berkshire Swash', cursive;
    }
    #carousel-content{
        font-size: 2em;
    }
    #carousel-content, #carousel-description {
        background-color: black;
        opacity: 0.6;
        padding: 30px;
        max-width: 100%;
    }
</style>
