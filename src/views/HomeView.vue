<template>
  <v-sheet>
    <v-sheet color="deep-purple lighten-3 px-6">
      <v-container mx-auto>
        <v-row class="justify-center align-center">
          <v-col cols="12" md="5">
            <div class="hidden-xs-only ml-8">
              <h5 class="text-h2">I'm StaffM</h5>
              <h4 class="text-h3">
                an Employee Management Software That Keeps You Organized!
              </h4>
              <p class="text-h6 mt-2">
                Track and organize your employee data with ease with our
                easy-to-use web app. Get StaffM and make your workplace work for
                you.
              </p>
              <v-btn class="black" to="/staff" dark x-large>Demo App</v-btn>
            </div>
            <div class="hidden-sm-and-up my-10">
              <h5 class="text-h4">
                Employee Management App That Keeps You Organized!
              </h5>
              <p class="text-caption">
                Track and organize your employee data with ease with our
                easy-to-use web app. Get StaffM and make your workplace work for
                you.
              </p>
              <v-btn class="black" to="/staff" dark large>Demo App</v-btn>
            </div>
          </v-col>
          <v-spacer />
          <v-col cols="12" md="5">
            <v-img src="/Company-amico.png"></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-container class="mt-16">
      <v-row class="hidden-xs-only justify-center align-center mx-16 my-16">
        <v-col cols="12" md="6">
          <div class="ml-8 mb-16">
            <h5 class="text-h3">
              StaffM offers a comprehensive suite of employee management
              features.
            </h5>
          </div>
        </v-col>
        <v-col cols="12" md="3">
          <div class="ml-8">
            <h5 class="text-h1 text-center">25k+</h5>
            <p class="text-subtitle-1 text-center">Users</p>
          </div>
        </v-col>
        <v-col cols="12" md="3">
          <div class="ml-8">
            <h5 class="text-h1 text-center">25k+</h5>
            <p class="text-subtitle-1 text-center">Users</p>
          </div>
        </v-col>
      </v-row>
      <v-row class="justify-center hidden-sm-and-up align-center mx-4 my-16">
        <v-col cols="12" md="6">
          <div class="my-10">
            <h5 class="text-h5">
              StaffM offers a comprehensive suite of employee management
              features.
            </h5>
          </div>
        </v-col>
        <v-col cols="12" md="3">
          <div class="my-10 mx-4">
            <h5 class="text-h3 text-center">1.5k+</h5>
            <p class="text-caption text-center">User Ratings</p>
          </div>
        </v-col>
        <v-col cols="12" md="3">
          <div class="my-10 mx-4">
            <h5 class="text-h3 text-center">1.5k+</h5>
            <p class="text-caption text-center">User Ratings</p>
          </div>
        </v-col>
      </v-row>
      <v-card color="#EFEFEF" class="hidden-xs-only my-16 mx-16 rounded-lg">
        <v-row class="justify-center align-center">
          <v-col cols="5">
            <v-img src="/Performance-amico.png"></v-img>
          </v-col>
          <v-spacer />
          <v-col cols="6">
            <h5 class="text-h3">
              With its easy-to-use interface and powerful features, StaffM helps
              businesses manage their employees more effectively and
              efficiently.
            </h5>
          </v-col>
        </v-row>
      </v-card>
      <v-card color="#EFEFEF" class="hidden-sm-and-up my-8 mx-8 rounded-lg">
        <v-sheet color="#EFEFEF" class="py-4 px-4 rounded-b-0">
          <h5 class="text-h5">
            With its easy-to-use interface and powerful features, WorkforcePro
            helps businesses manage their employees more effectively and
            efficiently.
          </h5>
        </v-sheet>
        <v-img class="mx-4 mb-8" src="/Performance-amico.png"></v-img>
      </v-card>
    </v-container>
    <v-container>
      <v-carousel
        class="hidden-xs-only"
        hide-delimiter-background
        show-arrows-on-hover
        delimiter-icon=""
      >
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet height="100%">
            <v-row class="fill-height" align="center" justify="center">
              <v-card
                class="mx-auto py-12 px-8"
                color="#FED0AC"
                max-width="500"
              >
                <v-card-text class="text-h5 font-weight-bold">
                  "StaffM has helped me manage my startup business smoothly. The
                  interface is very intuitive and easy to use."
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-list-item class="grow">
                    <v-list-item-avatar color="white">
                      <v-img
                        class="elevation-6"
                        alt=""
                        src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                      ></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title>Evan You</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-card-actions>
              </v-card>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
      <v-carousel
        class="hidden-sm-and-up"
        hide-delimiter-background
        show-arrows-on-hover
        delimiter-icon=""
      >
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet height="100%">
            <v-row class="fill-height" align="center" justify="center">
              <v-card class="mx-auto py-4 px-2" color="#FED0AC" max-width="500">
                <v-card-text class="text-h5 font-weight-bold">
                  "Turns out semicolon-less style is easier and safer in TS
                  because most gotcha edge cases are type invalid as well."
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-list-item class="grow">
                    <v-list-item-avatar color="white">
                      <v-img
                        class="elevation-6"
                        alt=""
                        src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                      ></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title>Evan You</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-card-actions>
              </v-card>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-container>
    <Footer />
  </v-sheet>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  data() {
    return {
      slides: ["First", "Second", "Third"],
    };
  },
  components: { Footer },
};
</script>

<style>
/* <-- remove scoped here if you have it*/
.v-carousel__controls__item {
  color: orange !important;
}
</style>
