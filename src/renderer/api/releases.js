// https://api.github.com/repos/Wenish/electron-butler/releases

export default {
  getReleases () {
    return new Promise((resolve, reject) =>
      setTimeout(
        () => resolve('world'),
        1000
      )
    )
  }
}
