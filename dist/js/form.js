jQuery(document).ready(function($){
	var valid = false;
	valids();
	function valids() {
		var email = $('[name="email"]'),
			name = $('[name="name"]');

		name.change(function(){
			console.log($(this).val().length)
			if($(this).val().length >= 1){
				$(this).parent().find("p").remove();
				$(this).addClass('success');
				$(this).removeClass('incorrect');
				valid= true;
				console.log('valid', valid);
			}else{
				if($(this).parent().find('.error').length == 0){
					$(this).parent().append('<p class="error">Please, fill in the name...</p>')
				}
				$(this).removeClass('success');
				$(this).addClass('incorrect');
				valid= false;
				console.log('valid', valid);
			}
		});
		email.change(function(){
			var input = this.value;
			if (input && /(^\w.*@\w+\.\w)/.test(input)) {
				$(this).parent().find("p").remove();
				$(this).addClass('success');
				$(this).removeClass('incorrect');
				valid= true;
				console.log('valid', valid);
			} else {
				if($(this).parent().find('.error').length == 0){
					$(this).parent().append('<p class="error">Please, fill in the email...</p>')
				}
				$(this).removeClass('success');
				$(this).addClass('incorrect');
				valid= false;
				console.log('valid', valid);
			}
		});

		$('[type="tel"]').on("keypress", function (e) {
			if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
				return false;
			}
		});
		$('[type="tel"]').on("keydown", function (e) {
			if (e.which == 27) { /*escape*/
				$(this).val("").blur();
			} else if (e.which == 8) { /*backspace*/
				var digits = $(this).val();
				digits = digits.replace(/[^0-9]/g, "");
				if (digits.length == 2) {
					digits = "+" + digits.substring(1, 3);
					$(this).val(digits);
				}
			}
		})
		$('[type="tel"]').change(function(){
			var digits = $(this).val();
			if(digits.length == 16){
				$(this).parent().find("p").remove();
				$(this).addClass('success');
				$(this).removeClass('incorrect');
				valid = true;
			}else{
				if($(this).parent().find('.error').length == 0){
					$(this).parent().append('<p class="error">Please, fill in the phone...</p>')
				}
				$(this).removeClass('success');
				$(this).addClass('incorrect');
				valid= false;
			}
		});

		$('[type="tel"]').on("keyup", function () {
			var digits = $(this).val();
			digits = digits.replace(/[^0-9]/g, "");
			var len = digits.length;
			console.log(len)
			if (len == 0) {
				digits = "";
			}else if (len < 2) {
				digits = "+1(" + digits.substring(0, 4);
			}else if (len < 5) {
				digits = "+1(" + digits.substring(1, 4);
			} else if (len < 7) {
				digits = "+1(" + digits.substring(1, 4) + ") " + digits.substring(4, 7);
			} else {
				digits = "+1(" + digits.substring(1, 4) + ") " + digits.substring(4, 7) + "-" + digits.substring(7, 11);
			}
			$(this).val(digits);
		});
		return valid;
	}
	$('.single-room-form').submit(function(e){

		if(valids()){
			$('.single-room-form').trigger('submit');
		}
		else{
			e.preventDefault();
			console.log('function', valids());
		}
	});
	$('[name="email"],[name="name"],[name="phone"]').change(function(){
		valids();
	});



});
