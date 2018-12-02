
$(document).ready(function(){

	var $body = $("body");

	$body.on("click", ".card-item", function(){
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
	});

	$("[type='tel']").mask("+7(999)-999-9999");

	$(".form-location-tab").click(function(){		
		$(this).parents(".form-location-data").find(".form-location-tab").removeClass("active");
		$(this).addClass("active");

		var tab = $(this).data("tab");

		$(".form-intro-tab-item[data-tab="+tab+"]").addClass("active");
		$(".form-intro-tab-item[data-tab="+tab+"]").siblings().removeClass("active");
	});

	$('.timepicker').wickedpicker({
		title: 'Укажите время',
	});


	var addressHtml = $(".filing-address").html();	

	$body.on("click", ".js-add-address", function(e){
		e.preventDefault();
		console.log(12);
		$(".filing-address").append(addressHtml);
	});

});