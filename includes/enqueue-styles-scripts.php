<?php

if ( ! defined( 'ABSPATH' ) ) {
  exit; // Exit if accessed directly.
}

function mysite_scripts() {
  wp_enqueue_script( 'mysite-script', get_stylesheet_directory_uri() . '/js/dist/script.min.js', array(), filemtime(get_stylesheet_directory() . '/js/dist/script.min.js'), true );
}
add_action('wp_enqueue_scripts', 'mysite_scripts');


function mysite_styles() {
  wp_enqueue_style( 'mysite-style', get_stylesheet_directory_uri() . '/css/styles.min.css', array(), filemtime(get_stylesheet_directory() . '/css/styles.min.css'));
}
add_action('wp_enqueue_scripts', 'mysite_styles');