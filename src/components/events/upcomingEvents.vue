<template>
  <v-container fluid>
    <v-snackbar v-model="errorAlert" bottom left>
      {{ errorMsg }}
      <v-btn color="pink" text @click="errorAlert = false">Close</v-btn>
    </v-snackbar>
    <!-- <v-row
      align="center"
      justify="center"
      :style="{'background-image':'url('+require('@/assets/img/svg/bg.svg')+')'}"
      style="background-position:right"
    > -->
      <v-col cols="12" md="12" lg="12" sm="12" class>
        <p class=" mb-0" style="font-size:150%;color: #1a73e8;">Upcoming Events</p>
        <p
          class=" mt-0"
          style="font-size:95%"
        >As events and Trainings are scheduled, they will appear below along with additional contact information for those events. </p>
        <v-row v-if="showLoader">
          <v-col md="4" lg="4" sm="6" cols="12" class="pa-2" v-for="(item,i) in 3" :key="i">
            <upcomingEventLoader />
          </v-col>
        </v-row>

        <v-row v-else>
          <v-col
            md="4"
            lg="4"
            sm="6"
            cols="12"
            class="pa-2"
            v-for="(item,i) in eventsData"
            :key="i"
          >
            <v-slide-y-reverse-transition>
              <upcomingEvent v-show="showData" :data="{data:item}" />
            </v-slide-y-reverse-transition>
          </v-col>
        </v-row>

        <v-row v-if="notFoundUpcomingEventFlag" class="pa-2">
          <v-col
            md="3"
            lg="3"
            sm="6"
            cols="12"
            class="pa-3"
            :class="$vuetify.theme.dark == true?'darkModeCard':'lightModeCard'"
          >
            <p class=" px-2 mb-0" style="font-size:140%">
              <v-icon>mdi-calendar-blank</v-icon>
              <br />No Upcoming Events!
            </p>
          </v-col>
        </v-row>
      </v-col>
    <!-- </v-row> -->
  </v-container>
</template>

<script>
import { configData } from "@/config/config";
import upcomingEvent from "@/components/common/card/upcomingEvent";
import upcomingEventLoader from "@/components/common/card/upcomingEventLoader";
export default {
  name: "App",
  components: {
    upcomingEvent,
    upcomingEventLoader
  },
  data: () => ({
    eventsData: [],
    showLoader: true,
    showData: false,
    notFoundUpcomingEventFlag: false,
    errorAlert: false,
    errorMsg: ""
  }),
  created() {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://api.meetup.com/" +
        configData.MeetupURLName +
        "/events?&sign=true"
    )
      .then(data => data.json())
      .then(res => {
        if (res.length > 0) {
          this.showLoader = false;
          this.showData = true;
          this.eventsData = res;
        } else {
          this.showLoader = false;
          this.notFoundUpcomingEventFlag = true;
        }
      })
      .catch(e => {
        // console.log(e)
        this.showLoader = false;
        this.errorMsg = "Issue found with " + e;
        this.errorAlert = true;
        this.notFoundUpcomingEventFlag = true;
      });
  },
  methods: {
    getImgUrl(url) {
      if (url.length > 0) {
        return require("@/assets/img/what-we-do/" + url);
      } else {
        return require("@/assets/img/what-we-do/notFound.png");
      }
    }
  }
};
</script>