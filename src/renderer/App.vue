<template>
    <div id="app">
      <md-app>

        <md-app-drawer
            :md-active.sync="menuVisible"
            md-persistent="mini"
            md-permanent="full">
          <md-list>
            <md-list-item @click="toggleMenu">
              <md-icon>menu</md-icon>
              <span class="md-list-item-text"></span>
            </md-list-item>

            <md-list-item to="/">
              <md-icon>home</md-icon>
              <span class="md-list-item-text">Home</span>
            </md-list-item>

            <md-list-item @click="openCompanyPortal" v-if="platform == 'win32'">
              <md-icon>domain</md-icon>
              <span class="md-list-item-text">Company Portal</span>
            </md-list-item>

            <md-list-item to="/settings">
              <md-icon>settings</md-icon>
              <span class="md-list-item-text">Settings</span>
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
      menuVisible: false,
      platform: require('os').platform()
    }),
    methods: {
        toggleMenu () {
            this.menuVisible = !this.menuVisible
        },
        openCompanyPortal () {
            require("electron").shell.openExternal('companyportal://');
        }
    }
  }
</script>

<style>
    :root {
        --md-theme-default-icon-on-background: #1781e3;
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
    .md-drawer.md-persistent-mini.md-active {
        width: 200px;
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
