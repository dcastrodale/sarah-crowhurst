/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
exports.onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  // if (!(`IntersectionObserver` in window)) {
  //   import(`intersection-observer`)
  //   console.log(`# IntersectionObserver is polyfilled!`)
  // }
  console.log('hi');
}
