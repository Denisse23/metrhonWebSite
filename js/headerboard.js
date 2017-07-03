function checkBodySize(size) {
	var headerboard = document.getElementById('header-board');
	var horizontalNavigationBar = document.getElementById('horizontal-menu');
	var verticalMenu = document.getElementById('vertical-menu');
	var companyHeader = document.getElementById('company-header');
	var companyText = document.getElementById('company-text');
	var menu = document.getElementById('menu');
	var content = document.getElementById('content');
	if (size < 800 || isMobileDevice()) {
		if (menu.style.display === 'none') {
			verticalMenu.style.display = 'block';
			horizontalNavigationBar.style.display = 'none';
			companyText.style.display = 'none';
			companyHeader.style.justifyContent = 'center';
			content.style.marginTop = '0px';
			headerboard.style.position = 'static';
			headerboard.style.display = 'block';
			companyHeader.style.paddingLeft = '0px';
		}
		
	} else {
		headerboard.style.display = 'block';
		verticalMenu.style.display = 'none';
		horizontalNavigationBar.style.display = 'block';
		menu.style.display = 'none';
		content.style.display = 'block';
		companyText.style.display = 'block';
		headerboard.style.display = 'block';
		// content.style.marginTop = getContentMarginTop();
	}
	
}

function getContentMarginTop () {
	var marginTop = (window.innerHeight * 0.37);
	return marginTop + 'px';
}

function showMenu() {
	var headerboard = document.getElementById('header-board');
	var menu = document.getElementById('menu');
	var content = document.getElementById('content');
	headerboard.style.display = 'none';
	menu.style.display = 'block';
	content.style.display = 'none';
}

function hideMenu() {
	var headerboard = document.getElementById('header-board');
	var menu = document.getElementById('menu');
	var content = document.getElementById('content');
	headerboard.style.display = 'block';
	menu.style.display = 'none';
	content.style.display = 'block';
}
