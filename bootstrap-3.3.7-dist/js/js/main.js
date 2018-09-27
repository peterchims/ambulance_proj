
$(document).ready(function(){
	$(".bit").on('click' , function(){
		$(".cover").fadeIn('100');
	$(".rat").fadeIn('100');
	});
	$(".rat").on('click' , function(){
		if($(event.target).is(".cancel .ext")){
			$(".cover").fadeOut('slow');
	$(".rat").fadeOut('slow');					  
	}
	});
	$('.bat').on('click' , function(){
			$('.sear').fadeIn(2000);
			$('.btn_search').fadeIn(2000);
			$('.bit').fadeOut(1000);
			$('.fa-search').hide();
		});
	
	var textmax = $('.txt_area').attr('maxlength');
	$(".textarea-feedback").html(textmax + " characters remaining");
	
	$('.txt_area').keydown(function(){
		var character_count = $('.txt_area').val().length;
		var remaining = textmax - character_count;
		
		$(".textarea-feedback").html(remaining + " Characters remaining");
	});
	function Scroll(){
	var top = document.getElementById('header');
	var ypos = window.pageYOffset;
	
	if(ypos > 500){
		top.style.background = "rgba(255,0,0,0.4)";
	}else{
		top.style.background = "transparent";
	}
}
window.addEventListener("scroll", Scroll);
	$('.navbar-toggle').on('click',function(){
		$('#het-content').fadeOut();
		$('.amb .container .btn-grp').fadeOut();
		
	});
		$('.cancel_nav').on('click',function(){
			
		$('#het-content').fadeIn();
		$('.amb .container .btn-grp').fadeIn();
		$('#navbar').fadeOut();
			
			
		
	});
	});