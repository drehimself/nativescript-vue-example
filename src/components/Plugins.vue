<template>
  <Page>
      <ActionBar title="Plugins" class="action-bar" />
      <ScrollView>
        <StackLayout class="home-panel">
          <CardView class="whiteCard" margin="10" elevation="40" radius="5">
            <GridLayout rows="200, auto, auto" columns="auto, auto, *">
                <Image src="https://raw.githubusercontent.com/bradmartin/nativescript-cardview/master/demo/app/images/batman.jpg" stretch="aspectFill" colSpan="2" row="0" />
                <Label text="Batman wants to be friends?" class="info" textWrap="true" row="1" colSpan="2" />
                <Button text="DECLINE" row="2" col="0" />
                <Button text="ACCEPT" @tap="onToastTap" row="2" col="1" />
            </GridLayout>
          </CardView>

          <Button class="btn btn-primary" text="Show Toast" @tap="onToastTap" />
          <Button class="btn btn-primary" text="Show Fancy Alert" @tap="onFancyTap" />
          <Button class="btn btn-primary" text="Show Feedback" @tap="onFeedbackTap" />
        </StackLayout>
      </ScrollView>
    </Page>
</template>

<script>
import { TNSFancyAlert, TNSFancyAlertButton } from 'nativescript-fancyalert'

var FeedbackPlugin = require("nativescript-feedback")
var feedback = new FeedbackPlugin.Feedback()

export default {
  methods: {
    onToastTap() {
      const toast = Toast.makeText("Hello World");
      toast.show();
    },

    onFancyTap() {
      TNSFancyAlert.showError('Error!', 'Fancy alerts are nice.', 'Yes they are!');
    },

    onFeedbackTap() {
      feedback.success({
        title: 'Success!',
        message: "Easiest thing ever, right?"
      });
    }

  }

}
</script>
