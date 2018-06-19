<template>
  <Page>
      <ActionBar title="Refresh" class="action-bar" />

      <StackLayout class="home-panel">
      <PullToRefresh @refresh="refreshList">
      <ListView class="list-group" for="country in countries" @itemTap="onItemTap" style="height:100%">
        <v-template>
          <FlexboxLayout flexDirection="row" class="list-group-item">
            <Image :src="country.imageSrc" class="thumb img-circle" />
            <Label :text="country.name" class="list-group-item-heading" style="width: 60%" />
          </FlexboxLayout>
        </v-template>
      </ListView>
      </PullToRefresh>
      </StackLayout>

    </Page>
</template>

<script>
export default {
  data() {
    return {
      countries: [
        { name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" },
        { name: "Belgium", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/be.png" },
        { name: "Bulgaria", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/bg.png" },
        { name: "Canada", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ca.png" },
        { name: "Switzerland", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ch.png" },
        { name: "China", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cn.png" },
        { name: "Czech Republic", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cz.png" },
        { name: "Germany", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/de.png" },
        { name: "Spain", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/es.png" },
        { name: "Ethiopia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/et.png" },
        { name: "Croatia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/hr.png" },
        { name: "Hungary", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/hu.png" },
        { name: "Italy", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/it.png" },
        { name: "Jamaica", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/jm.png" },
        { name: "Romania", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ro.png" },
        { name: "Russia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ru.png" },
        { name: "United States", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/us.png" },
      ],
    }
  },

  methods: {
    refreshList(args) {
      var pullRefresh = args.object;
      setTimeout(function () {
        pullRefresh.refreshing = false;
      }, 1000);
    }
  }

}
</script>
