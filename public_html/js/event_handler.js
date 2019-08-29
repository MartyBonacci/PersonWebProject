/* This JavaScript file handles the menu and button events in the DOM */
"use strict";
window.onload = function() {

	// Grab Text Menu Clickables
	let textMenuItems = document.getElementsByClassName("text-card");

	// Grab Text Menu Icons
	let textMenuIcons = document.getElementsByClassName("text-menu-icon");

	// Set menu state
	let open = false;

	// Add event listeners
	for(let i = 0; i < textMenuItems.length; i++) {
		textMenuItems[i].addEventListener("click", function() {
			// Check if menu is open
			if(open) {
				textMenuIcons[i].className = "text-menu-icon hover_rotate";
			} else {
				textMenuIcons[i].className = "text-menu-icon hover_rotate open";
			}
			open = !open;
		});
	}

	// Auto-close Nav
	$('body').on('click', function() {
		$('.navbar-collapse').collapse('hide');
	});

	let jumboText = document.getElementById("jumbotron-text");

	// Fix spacing issue in Firefox vs Chrome
	if(window.innerWidth <= 768 && window.innerHeight <= 1024) {
		jumboText.className = "mt-2";
	}
};