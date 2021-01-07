$(document).ready(function(){
	$("#f1").hover(function(){
		$("#in1").fadeIn(300);
	},
	function() {
		$( "#in1" ).fadeOut(300);
	}
);
});
$(document).ready(function(){
	$("#f2").hover(function(){
		$("#in2").fadeIn(300);
	},
	function() {
		$( "#in2" ).fadeOut(300);
	}
);
});

$(document).ready(function(){
	$("#f3").hover(function(){
		$("#in3").fadeIn(300);
	},
	function() {
		$( "#in3" ).fadeOut(300);
	}
);
});
$(document).ready(function(){
	$("#f4").hover(function(){
		$("#in4").fadeIn(300);
	},
	function() {
		$( "#in4" ).fadeOut(300);
	}
);
});
$(document).ready(function(){
	$("#in1").hover(function(){
		$("#in1").css('display','block');
	},
	function() {
		$( "#in1" ).css('display','none');
	}
);
});
