
function onLoad() {
	checkBodySize(document.body.offsetWidth);
}

function onBodyResize() {
	checkBodySize(document.body.offsetWidth);
}

function isMobileDevice () {
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
		return true;
	}
	return false;
}

function adjustAsesoriasContent(fromLoad) {
	var paragraphContainer = document.getElementById('paragraphContainer');
	var paragraphTitle = document.getElementById('paragraphTitle');
	var paragraphs = document.getElementById('paragraphs');
	var paragraph1 = document.getElementById('paragraph1');
	var paragraphTitle2 = document.getElementById('paragraphTitle2');
	var paragraph2 = document.getElementById('paragraph2');
	var paragraphTitle3 = document.getElementById('paragraphTitle3');
	var paragraph3 = document.getElementById('paragraph3');
	var paragraphTitle4 = document.getElementById('paragraphTitle4');
	var paragraph4 = document.getElementById('paragraph4');
	var equipo2 = document.getElementById('equipo2');
	paragraphs.style.height = (paragraph1.clientHeight + equipo2.clientHeight +
										paragraphTitle2.clientHeight + paragraph2.clientHeight + 
										paragraphTitle3.clientHeight + paragraph3.clientHeight +
										paragraphTitle4.clientHeight + paragraph4.clientHeight) + "px";
	if (document.body.offsetWidth < 800 || isMobileDevice()) {
		if (fromLoad) {
			paragraphContainer.style.height = (paragraphTitle.clientHeight + paragraphs.clientHeight + 290) + "px";
		} else {
			paragraphContainer.style.height = (paragraphTitle.clientHeight + paragraphs.clientHeight + 235) + "px";
		}
		paragraphs.style.marginTop = "140px";
	} else {
		paragraphContainer.style.height = (paragraphTitle.clientHeight + paragraphs.clientHeight + 220) + "px";
		paragraphs.style.marginTop = "95px";
	}
	
	adjustPollContent();
	
}

function adjustContent(fromLoad) {
	var paragraphContainer = document.getElementById('paragraphContainer');
	var paragraphTitle = document.getElementById('paragraphTitle');
	var paragraph = document.getElementById('paragraph');
	if (document.body.offsetWidth < 800 || isMobileDevice()) {
		if (fromLoad) {
			paragraphContainer.style.height = (paragraphTitle.clientHeight + paragraph.clientHeight + 215) + "px";
		} else {
			paragraphContainer.style.height = (paragraphTitle.clientHeight + paragraph.clientHeight + 135) + "px";
		}
		paragraph.style.marginTop = "120px";
	} else {
		paragraphContainer.style.height = (paragraphTitle.clientHeight + paragraph.clientHeight + 95) + "px";
	
		paragraph.style.marginTop = "95px";
	}
	adjustPollContent();
}

function adjustPollContent () {
	var pollContainer = document.getElementById('pollContainer');
	var pollText = document.getElementById('pollText');
	var pollTitle = document.getElementById('pollTitle');
	var pollParagraph = document.getElementById('pollParagraph');
	var pollLinksImage = document.getElementById('pollLinksImage');
	var pollLinks = document.getElementById('pollLinks');
	var pollImage = document.getElementById('pollImage');
	pollText.style.height = (pollTitle.clientHeight + pollParagraph.clientHeight + 55) + "px";
	pollLinksImage.style.height = (pollLinks.clientHeight + pollImage.clientHeight + 10) + "px";
	pollContainer.style.height = (pollText.clientHeight +  pollLinksImage.clientHeight) + "px";
}
