"use strict";
$(document).ready(function() {

	/**
	 * jQuery Validate Function
	 *
	 * This function provides front-end validation for your form.
	 * If all tests set up here pass, the form data is AJAX submitted
	 * to the mailer.php file.
	 *
	 * Update this file as needed for your form.
	 * All ids and name values must match up to your form here.
	 *
	 * @author Rochelle Lewis <rlewis37@cnm.edu>
	 **/

	/* begin validate function here */
	$("#mailer-form").validate({

		// setup handling of form errors
		debug: true,
		errorClass: "alert alert-danger",
		errorLabelContainer: "#output-area",
		errorElement: "div",

		// rules here define what is good or bad input
		// each rule starts with the form input element's NAME attribute
		rules: {
			name: {
				required: true
			},
			email: {
				email: true,
				required: true
			},
			message: {
				required: true,
				maxlength: 2000
			}
		},

		// error messages to display to the end user when rules above don't pass
		messages: {
			name: {
				required: "Please enter your name."
			},
			email: {
				email: "Please enter a valid email address.",
				required: "Please enter a valid email address."
			},
			message: {
				required: "Please enter a message.",
				maxlength: "2000 characters max."
			}
		},

		// AJAX submit the form data to back end if rules pass
		submitHandler: function(form) {
			$("#mailer-form").ajaxSubmit({
				type: "POST",
				url: $("#mailer-form").attr("action"),

				success: function(ajaxOutput) {
					// clear the output area's formatting
					$("#output-area").css("display", "");

					// write the server's reply to the output area
					$("#output-area").html(ajaxOutput);

					// reset the form if it was successful
					if($(".alert-success").length >= 1) {
						$("#mailer-form")[0].reset();
					}
				}
			})
		}

	});/* end validate function here AND end school guided code */

	/* My javascript start */

	// Auto-close Nav
	$('body').on('click', function() {
		$('.navbar-collapse').collapse('hide');
	});

	// Change card button text to icon at specified screen size
	let cardButtons = document.getElementsByClassName('card-button');

	// Create an icon image element


	for(let i = 0; i < cardButtons.length; i++) {
		if(window.innerWidth <= 768 && window.innerHeight <= 1024) {
			cardButtons[i].innerHTML = "";

			cardButtons[i].addEventListener("click", (event) => {
				cardButtons[i].style.webkitTransform = 'rotate(180deg)';
				cardButtons[i].style.mozTransform    = 'rotate(180deg)';
				cardButtons[i].style.msTransform     = 'rotate(180deg)';
				cardButtons[i].style.oTransform      = 'rotate(180deg)';
				cardButtons[i].style.transform       = 'rotate(180deg)';
			});

			let icon = {
				element: document.createElement('img'),
				src: "resources/images/mobile-card-button-image.png",
				width: 25,
				height: 25,
				setup: function() {
					this.element.src = this.src;
					this.element.width = this.width;
					this.element.height = this.height;
					return this.element;
				}
			};

			cardButtons[i].insertAdjacentElement('afterbegin', icon.setup());
		}
	}// End for loop
});/*end document.ready()*/