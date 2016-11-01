export default {
  browserPort: 3000,
  UIPort: 3001,

  sourceDir: './src/',
  buildDir: './dist/',

  scripts: {
    src: 'src/js/**/*.js',
    dest: 'dist/public/js',
    filename: 'bundle.min.js'
  },

  views: {
    src: 'src/**/*.html',
    dest: 'dist'
  },

  assetExtensions: [
    'js',
    'css',
    'png',
    'jpe?g',
    'gif',
    'svg',
    'eot',
    'otf',
    'ttc',
    'ttf',
    'woff2?',
    'map',
    'mp4',
    'webm',
    'ogg',
    'html',
  ],
}
