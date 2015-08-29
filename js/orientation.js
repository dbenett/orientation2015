function selectVideo(sender){
	var clicker=setActive(sender, '.video');

	var vidID = '#'+$(clicker).text().toLowerCase().replace(' ', '-')+'-video';
	setVisible(vidID, '.registration-iframe');
}
	

function toManhattanMap(button) {
	$('#food-map').css('background', 'url("http://static.thousandwonders.net/Manhattan.640.12979.jpg") 50% 0');
	$('#morningside-button').removeClass('active');
	$('#manhattan-button').addClass('active');
}

function toMorningsideMap(button) {
	$('#food-map').css('background', "url('img/morningside_heights.jpg') 50% 0");
	$('#morningside-button').addClass('active');
	$('#manhattan-button').removeClass('active');
}


// START 116 TRADITIONS CODE //
var traditionCount=0;

function clickTradition(sender) {
	var clicked = jQuery(sender);
	if ($(clicked).hasClass('completed')) {
		traditionCount --;
		$(clicked).removeClass('completed');
	}
	else {
		traditionCount++;
		$(clicked).addClass('completed');
	}
	$('#tradition-count').text(traditionCount.toString());
	if(traditionCount === 1) {
		$('#tradition-plural').text('tradition');
	}
	else {
		$('#tradition-plural').text('traditions');		
	}
}

function fbShare(){
	var name;
	var picture = "http://columbiaspectator.com/features/orientation-2014-interactive-116-traditions/img/116_trad_graphic.jpg";
	var link = 'http://columbiaspectator.com/features/orientation-2014-interactive-116-traditions/';
	if (traditionCount == null){
		name= "116 Traditions";
	}
	else {
		name= "I've completed "+ traditionCount + " of 116 Columbia traditions! How many have you completed?";
	}

	FB.ui(
	 {
	  method: 'feed',
	  link: link,
	  name: name,
	  description: description,
	  picture: picture
	}, function(response){});
}
// END 116 TRADITIONS CODE //


function selectCategory(sender) {
	var clicked = jQuery(sender);
	$('.category').each(function (key, value) {
		$(this).removeClass('active');
	});
	$(clicked).addClass('active');
	$('.subcategories').each(function (key, value) {
		$(this).addClass('hidden');
	});

	var id = $(sender).text().toLowerCase();
	id = id.replace(' ', '-');
	$('#'+id).removeClass('hidden');
	console.log(id);
}

function selectResource(sender) {
	var clicked = jQuery(sender);
	$('.resource').each(function (key, value) {
		$(this).removeClass('active');
	});
	$(clicked).addClass('active');
}

function selectSubwayStop(sender) {
	var clicked = setActive(sender, '.subway-stop');

	var imgPath = 'img/subway_stops/' + $(clicked).text().replace(' ', '_') +'.jpg';
	$('#subway-stop-map').attr('src', imgPath);
}

function setActive(element, classname) {
	var toActive = jQuery(element);
	$(classname).each(function (key, value) {
		$(this).removeClass('active');
	});
	$(toActive).addClass('active');
	return toActive;
}

function setVisible(id, classname) {
	$(classname).each(function (key, value) {
		$(this).addClass('hidden');
	});
	$(id).removeClass('hidden');
	return $(id);
}



