function toBarnardRegistrationVideo(button){
	
	$('#columbia-video').addClass('hidden');
	$('#quick-tips-video').addClass('hidden');
	$('#barnard-video').removeClass('hidden');

	$('#columbia-video').removeClass('active');
	$('#quick-tips-video').removeClass('active');
	$('#barnard-video').addClass('active');
}

function toColumbiaRegistrationVideo(button){

	$('#barnard-video').addClass('hidden');
	$('#quick-tips-video').addClass('hidden');
	$('#columbia-video').removeClass('hidden');

	$('#barnard-video').removeClass('active');
	$('#quick-tips-video').removeClass('active');
	$('#columbia-video').addClass('active');
}

function toQuickTipsVideo(button){

	$('#barnard-video').addClass('hidden');
	$('#columbia-video').addClass('hidden');
	$('#quick-tips-video').removeClass('hidden');


	$('#barnard-button').removeClass('active');
	$('#columbia-button').removeClass('active');
	$('#quick-tips-button').addClass('active');
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

