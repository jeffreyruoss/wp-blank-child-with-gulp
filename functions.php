<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

define('FUNCTIONS_DIRECTORY', __DIR__.'/includes');

$dir = opendir(FUNCTIONS_DIRECTORY);

while( ($currentFile = readdir($dir)) !== false ) {
    $file_extention = explode('.', $currentFile);
    if ( end($file_extention) !== 'php') {
        continue;
    }
    include_once( FUNCTIONS_DIRECTORY . '/' . $currentFile );
}

closedir($dir);