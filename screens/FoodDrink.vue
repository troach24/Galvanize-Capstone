<template>
  <nb-container>
    <nb-header>
      <nb-left>
        <nb-button
          transparent
          :onPress="() => this.props.navigation.goBack()"
        >
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
      <image
        :style="{ width: 40, height: 40}"
        :source="{uri: 
        'https://thumbs.dreamstime.com/b/golf-ball-5400074.jpg'}"/>
      </nb-body>
      <nb-right />
    </nb-header>
  </nb-container>
</template>
