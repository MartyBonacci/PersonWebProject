/* This JavaScript file handles the menu and button events in the DOM */
"use strict";
window.onload = function() {
	// Auto-close Nav
	$('body').on('click', function() {
		$('.navbar-collapse').collapse('hide');
	});

	// Grab modal triggering buttons
	let cardButtons = document.getElementsByClassName('card-button');

	// Grab modal closing buttons
	let modalCloseButtons = document.getElementsByClassName("modal-close");
	let modalCloseSecondary = document.getElementsByClassName("modal-close-secondary");

	// Add event listeners to modal close buttons
	for(let i = 0; i < modalCloseButtons.length; i++) {
		modalCloseButtons[i].addEventListener("click", () => {
			// Rotate icon back to normal state
			cardButtons[i].style.mozTransform = 'rotate(0deg)';
			cardButtons[i].style.msTransform = 'rotate(0deg)';
			cardButtons[i].style.oTransform = 'rotate(0deg)';
			cardButtons[i].style.transform = 'rotate(0deg)';
		});

		// Add event listeners to modal close secondary buttons
		for(let i = 0; i < modalCloseSecondary.length; i++) {
			modalCloseSecondary[i].addEventListener("click", () => {
				cardButtons[i].style.mozTransform = 'rotate(0deg)';
				cardButtons[i].style.msTransform = 'rotate(0deg)';
				cardButtons[i].style.oTransform = 'rotate(0deg)';
				cardButtons[i].style.transform = 'rotate(0deg)';
			});
		}
	}

	// Add event listeners to card button icons and remove their text
	for(let i = 0; i < cardButtons.length; i++) {
		// Change card button text to icon at specified screen size
		if(window.innerWidth <= 768 && window.innerHeight <= 1024) {
			// Remove text from buttons
			cardButtons[i].innerHTML = "";

			// Add event listeners to all of the card buttons
			cardButtons[i].addEventListener("click", (event) => {
				cardButtons[i].style.mozTransform = 'rotate(180deg)';
				cardButtons[i].style.msTransform = 'rotate(180deg)';
				cardButtons[i].style.oTransform = 'rotate(180deg)';
				cardButtons[i].style.transform = 'rotate(180deg)';
			});

			// Create the card icon image element
			let icon = {
				element: document.createElement('img'),
				class: "card-icon",
				src: "resources/images/mobile-card-button-image.png",
				width: 50,
				height: 60,
				setup: function() {
					// Set card properties
					this.element.src = this.src;
					this.element.className = this.id;
					this.element.width = this.width;
					this.element.height = this.height;
					return this.element;
				}
			};

			// Insert image element into the cards
			cardButtons[i].insertAdjacentElement('afterbegin', icon.setup());
		}
	}// End for loop
};