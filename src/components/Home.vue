<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Home"/>

    <StackLayout>
      <Button class="btn btn-primary" @tap="$router.push('/counter')">Counter</Button>
      <Button class="btn btn-primary" @tap="$router.push('/hello')">Hello World</Button>
      <Button class="btn btn-primary" @tap="$router.push('/reddit')">Reddit</Button>
      <Button class="btn btn-primary" @tap="$router.push('/plugins')">Plugins</Button>
      <Button class="btn btn-primary" @tap="$router.push('/refresh')">Pull to Refresh</Button>
      <Button class="btn btn-primary" @tap="$router.push('/login')">Login Screen</Button>
    </StackLayout>

  </Page>
</template>
