<template>
  <Page>
      <ActionBar title="Another"/>
      <StackLayout>
        <Label text="Here is anotherrr page" />
        <Image :src="this.imageSrc" />
        <Button text="Back" @tap="onButtonTap" />
      </StackLayout>
    </Page>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      required: true,
    }
  },
  methods: {
    onButtonTap() {
      console.log("Button was pressed");
      this.$navigateBack();
    },
  },
}
</script>

