$( document ).ready(function(){
	  $( "#head_company" ).click(function(){
      $( "#head_store_drop" ).fadeOut(300);
	    $( "#head_company_drop" ).fadeIn(300);
	  },

  );
});

$( document ).ready(function(){
	  $( "#head_company_drop" ).hover(function(){
	    $( "#head_company_drop" ).css('display','block');
	  },
    function() {
      $( "#head_company_drop" ).fadeOut(300);
    }
  );
});

$( document ).ready(function(){
	  $( "#head_store" ).click(function(){
	    $( "#head_store_drop" ).fadeIn(300);
      $( "#head_company_drop" ).fadeOut(300);
	  },

  );
});

$( document ).ready(function(){
	  $( "#head_store_drop" ).hover(function(){
	    $( "#head_store_drop" ).css('display','block');
	  },
    function() {
      $( "#head_store_drop" ).fadeOut(300);
    }
  );
});

$(document).ready(function(){
	$(".hidden_shadow").click(function(){
		$(".hidden_menu").fadeOut();
	});
});

$(document).ready(function(){
	$(".head_show_hidden_menu").click(function(){
		$(".hidden_menu").fadeIn(300);
		$(".hidden_menu").css('display','flex');
	});
});


$(document).ready(function(){
	$("#hidden_company_button").click(function(){
		if ($("#hidden_company_button").hasClass("Opens")) {
				$("#hidden_company").fadeOut(0);
				$("#hidden_company_button").removeClass("Opens");
				$("#hidden_company_button").text('Компания ⇒');
		}
		else {
			$("#hidden_company_button").text('Компания ⇓');
			$("#hidden_store_button").text('Store ⇒');
			$("#hidden_company_button").addClass("Opens");
			$("#hidden_store_button").removeClass("Opens");
			$("#hidden_company").fadeIn(0);
			$("#hidden_store").fadeOut(0);

		}
		});
});

$(document).ready(function(){
	$("#hidden_store_button").click(function(){
		if ($("#hidden_store_button").hasClass("Opens")) {
				$("#hidden_store").fadeOut(0);
				$("#hidden_store_button").removeClass("Opens");
				$("#hidden_store_button").text('Store ⇒');
		}
		else {
			$("#hidden_store_button").text('Store ⇓');
			$("#hidden_company_button").text('Компания ⇒');
			$("#hidden_store_button").addClass("Opens");
			$("#hidden_company_button").removeClass("Opens");
			$("#hidden_store").fadeIn(0);
			$("#hidden_company").fadeOut(0);
		}
		});
});
