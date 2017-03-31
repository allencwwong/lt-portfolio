
// when click on specific button base on button will generate specific modal, inside button need to specifc data-modal-name

// user need to specific class/id of click button
// user need to create a modal class section with same data-modal-name



var Modal = function(el,modalName) {
	this.element = $(el);
	this.$modal = $(modalName);
	this.init = function() {
		var self = this;
		$(window).click(function(e) {
			console.log(e.target);
		});

		$(this.element).on('click',function() {
			console.log("hello");
			$("body").prepend("<div class='overlay'></div>")
			$(self.$modal).css("opacity","1");
		});
	};

}




