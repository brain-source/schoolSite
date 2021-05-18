import slick from '../../slick/slick.js';
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );


$(document).ready(function(){
  $('.image').slick();
})