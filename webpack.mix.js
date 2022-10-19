const { applyStyles } = require('@popperjs/core');
const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/css')
.vue()
.sass('resources/sass/app.scss', 'public/css')
.sourceMaps();