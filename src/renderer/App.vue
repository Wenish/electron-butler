<template>
    <div id="app">
      <md-app>

        <md-app-drawer :md-active.sync="menuVisible" md-persistent="mini" md-permanent="full">
          <md-toolbar class="md-transparent" md-elevation="0">
            <span>Navigation</span>

            <div class="md-toolbar-section-end">
              <md-button class="md-icon-button md-dense" @click="toggleMenu">
                <md-icon>keyboard_arrow_left</md-icon>
              </md-button>
            </div>
          </md-toolbar>

          <md-list>
            <md-list-item>
              <md-icon>move_to_inbox</md-icon>
              <span class="md-list-item-text">Inbox</span>
            </md-list-item>

            <md-list-item>
              <md-icon>send</md-icon>
              <span class="md-list-item-text">Sent Mail</span>
            </md-list-item>

            <md-list-item>
              <md-icon>delete</md-icon>
              <span class="md-list-item-text">Trash</span>
            </md-list-item>

            <md-list-item>
              <md-icon>error</md-icon>
              <span class="md-list-item-text">Spam</span>
            </md-list-item>
          </md-list>
        </md-app-drawer>

        <md-app-content>
            <div id="app-content">
                <router-view></router-view>
            </div>
        </md-app-content>
      </md-app>
    </div>
</template>

<script>
  export default {
    name: 'electron-butler',
    data: () => ({
      menuVisible: false
    }),
    methods: {
      toggleMenu () {
        this.menuVisible = !this.menuVisible
      }
    }
  }
</script>

<style>
    :root {
        --md-theme-default-background: linear-gradient(135deg, #cfe4f7 0%,#e5f0f9 100%);
    }
    html, body, #app, .md-app {
        min-height: 100%;
        height: 100%;
    }
    .md-app {
      min-height: 350px;
      border: 1px solid rgba(#000, .12);
    }
    .md-drawer.md-permanent {
        position: absolute;
    }
    .md-drawer.md-persistent-mini {
        transform: translate3D(0,0,0);
    }
    .md-app-container, .md-app-scroller {
        overflow: hidden;
    }
    .md-app-content {
        padding: 0;
    }
    #app-content {
        height: 100%;
        width: 100%;
        max-height: 100%;
        max-width: 100%;
        position: relative;
    }

    .md-drawer.md-permanent-full .md-list {
        padding-top: 8px;
    }

    body{
        /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#cfe4f7+0,e5f0f9+100 */
        background: #cfe4f7; /* Old browsers */
        background: -moz-linear-gradient(-45deg, #cfe4f7 0%, #e5f0f9 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(-45deg, #cfe4f7 0%,#e5f0f9 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(135deg, #cfe4f7 0%,#e5f0f9 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cfe4f7', endColorstr='#e5f0f9',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
    }
</style>
