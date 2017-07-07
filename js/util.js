
function onLoad() {
	checkBodySize(document.body.offsetWidth);
	jssorSliderInit();
}

function onBodyResize() {
	checkBodySize(document.body.offsetWidth);
}

function jssorSliderInit() {
    var jssor_1_options = {
      $AutoPlay: 1,
      $Idle: 2000,
      $SlideEasing: $Jease$.$InOutSine,
      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$
      },
      $BulletNavigatorOptions: {
        $Class: $JssorBulletNavigator$
      }
    };

    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

    /*#region responsive code begin*/
    /*remove responsive code if you don't want the slider scales while window resizing*/
    function ScaleSlider() {
        var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
        if (refSize) {
            refSize = Math.min(refSize, 1160);
            jssor_1_slider.$ScaleWidth(refSize);
        }
        else {
            window.setTimeout(ScaleSlider, 30);
        }
    }
    ScaleSlider();
    $Jssor$.$AddEvent(window, "load", ScaleSlider);
    $Jssor$.$AddEvent(window, "resize", ScaleSlider);
    $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
    /*#endregion responsive code end*/
};

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
			// paragraphContainer.style.height = (paragraphTitle.clientHeight + paragraphs.clientHeight + 290) + "px";
		} else {
			// paragraphContainer.style.height = (paragraphTitle.clientHeight + paragraphs.clientHeight + 235) + "px";
		}
		// paragraphs.style.marginTop = "140px";
	} else {
		// paragraphContainer.style.height = (paragraphTitle.clientHeight + paragraphs.clientHeight + 220) + "px";
		// paragraphs.style.marginTop = "95px";
	}
	
	adjustPollContent();
	
}

function adjustContent(fromLoad) {
	var paragraphContainer = document.getElementById('paragraphContainer');
	var paragraphTitle = document.getElementById('paragraphTitle');
	var paragraph = document.getElementById('paragraph');
	var column3 = document.getElementsByClassName('column-3');
	if (document.body.offsetWidth < 800 || isMobileDevice()) {
		if(column3 && column3.length > 0){
			for (var i = 0; i < column3.length; i++) {
				var col = column3[i];
				col.style.width = '100%';
			};
		}
		if (fromLoad) {
			// paragraphContainer.style.height = (paragraphTitle.clientHeight + paragraph.clientHeight + 215) + "px";
		} else {
			// paragraphContainer.style.height = (paragraphTitle.clientHeight + paragraph.clientHeight + 135) + "px";
		}
		// paragraph.style.marginTop = "120px";
	} else {
		// paragraphContainer.style.height = (paragraphTitle.clientHeight + paragraph.clientHeight + 95) + "px";
	
		// paragraph.style.marginTop = "95px";
		if(column3 && column3.length > 0){
			for (var i = 0; i < column3.length; i++) {
				var col = column3[i]
				col.style.width = '30%';
			};
		}
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
	// pollText.style.height = (pollTitle.clientHeight + pollParagraph.clientHeight + 55) + "px";
	// pollLinksImage.style.height = (pollLinks.clientHeight + pollImage.clientHeight + 10) + "px";
	// pollContainer.style.height = (pollText.clientHeight +  pollLinksImage.clientHeight) + "px";
}
function renderTable(){
	var tableContainer = document.getElementById('table-container');
	tableContainer.innerHTML = '';
	var elements = [
		{
			image:'images/catalog/prensa120000kg.jpg',
			description:'Prensa hidráulica de operación eléctrica para pruebas de compresión y flexión 120 000 kg de capacidad.',
			type:'fc'
		},{
			image: 'images/catalog/prensa120000kgmanual.jpg',
			description: 'Prensa hidráulica de operación manual para pruebas de compresión y flexión 120 000 kg de capacidad.',
			type:'fc'
		},{
			image: 'images/catalog/anillocarga_digital.jpg',
			description: 'Anillo de carga con indicador digital 500 kg de capacidad.',
			type:'fc'
		},{
			image: 'images/catalog/prensasinfin_1.jpg',
			description: 'Módulo seccional para prensa universal con sinfín para ajuste o prensa hidráulica de operación manual.',
			type:'fc'
		},{
			image: 'images/catalog/manometrodigital_2.jpg',
			description: 'Micrómetro con carátula digital.',
			type:'fc'
		},{
			image: 'images/catalog/agitadormanualtamices.jpg',
			description: 'Agitador manual para tamices de 8" de diámetro.',
			type:'fc'
		},{
			image: 'images/catalog/prensapruebatension_1.jpg',
			description: 'Módulo seccional para prensa universal para pruebas de tensión.',
			type:'fc'
		},{
			image: 'images/catalog/presnsamarshal.jpg',
			description: 'Prensa Marshall eléctrica equipada con: anillo, indicador del mismo, motor de 1 HP pilotos y control reversible de 3 toneladas de capacidad.',
			type:'fc'
		},{
			image: 'images/catalog/moldecilindro15x30cm.jpg',
			description: 'Molde para cilindro de 15x30 cm.',
			type:'fc'
		},{
			image: 'images/catalog/indicadordeflujo.jpg',
			description: 'Indicador de flujo para equipo Marshall con micrómetro.',
			type:'fc'
		},{
			image: 'images/catalog/autoclave.jpg',
			description: 'Autoclave esterilizador eléctrico tipo olla con manómetro (para concreto).',
			type:'fc'
		},{
			image: 'images/catalog/dinamometro_digital.png',
			description: 'Dinamómetro digital.',
			type:'fc'
		},{
			image: 'images/catalog/evaporador_reactor.jpg',
			description: 'Evaporador giratorio para la concentración, cristalización, separación y reciclaje de materiales sensibles a la temperatura. Equipo de uso importante en la industria bio-farmacéutica, química y de alimentos.',
			type:'sh'
		},{
			image: 'images/catalog/pozoisotermfrio.jpg',
			description: 'Bomba para la circulación de líquido refirgerante. Sistema de circulación que utiliza ANSIA304/316 y materiales anticorrosivos de polímero, con pozo de gran capacidad en la vuelta más externa que funciona como un tanque para congelar.',
			type:'sh'
		},{
			image: 'images/catalog/secadoenfrio.jpg',
			description: 'Caja de secado en frío. Tecnología de secado en frío y en vacío utilizada en la indstria química y de alimentos, también en medicina y productos biológicos (vacunas, antiobóticos, hormonas, sangre, tejidos biológicos y otros donde aplique esta tecnología).',
			type:'sh'
		},{
			image: 'images/catalog/mantoscalefaccion.jpg',
			description: 'Unidades inteligentes con termostatos digitales. Adoptan el mecanismo de control PID para calentamiento rápido, sin golpe térmico que brinda lectura de la temperatura y control digital de la misma.',
			type:'sh'
		},{
			image: 'images/catalog/hornoinfrarrojo.jpg',
			description: 'Horno infrarrojo de secado rápido. Hecho con una lámpara infrarroja, usado para secado de medicamentos en laboratorios, conveniente y no contaminante.',
			type:'sh'
		},{
			image: 'images/catalog/magnetico_reactor.jpg',
			description: 'Hervidor de reacción en alta presión hecho de acero inoxidable. Conexión de acoplamiento magnético, sello estático que soluciona el problema de goteo. Adecuado para líquidos inflamables, explosivos y otros haciéndolo el equipo ideal para reacciones en la industria química, síntesis orgánica, polimerización, procesado de alimentos para el vulcanizado, fluorizado y oxidación.',
			type:'sh'
		},{
			image: 'images/catalog/circulacion_vidrio.jpg',
			description: 'Dispositivos de circulación en alta y baja temperatura: vidrio cilíndirco para punto líquido.',
			type:'sh'
		},{
			image: 'images/catalog/filtro_vacio.jpg',
			description: 'Dispositivos de circulación en alta y baja temperatura: filtro de succión en vacío.',
			type:'sh'
		}
	];
	var pageSize = 4;
	var pages = Math.ceil(elements.length/pageSize);
	var currentPage = tableContainer.currentPage || 1;
	var table = document.createElement('table');
	for (var i = ((currentPage * pageSize) - pageSize); i < (currentPage * pageSize); i++) {
		var row = document.createElement('tr');
		var tool = elements[i];
		var imageCell = document.createElement('td');
		var image = document.createElement('img');
		image.src = tool.image;
		var descriptionCell = document.createElement('td');
		var description = document.createElement('span');
		description.innerHTML = tool.description;
		var type = document.createElement('img');
		var typeMap = {fc:'images/f_c.png',sh:'images/s_h.png'};
		type.src = typeMap[tool.type];
		imageCell.appendChild(image);
		descriptionCell.appendChild(description);
		descriptionCell.appendChild(type);
		row.appendChild(imageCell);
		row.appendChild(descriptionCell);
		table.appendChild(row);
	};
	tableContainer.appendChild(table);
	var tablePaginator = document.getElementById('paginator');
	tablePaginator.innerHTML = '';
	var onPageChange = function(pageNumber){
		tableContainer.currentPage = pageNumber;
		renderTable();
	}
	for(var i = 0; i < pages; i++){
		var pageNumber = document.createElement('div');
		var page = i + 1;
		pageNumber.innerHTML = page;
		if(page === Number(currentPage)){
			pageNumber.classList = 'selected';
		}
		pageNumber.onclick = function(evt){onPageChange(evt.target.innerHTML);};
		tablePaginator.appendChild(pageNumber);
	}
}
function filterByType(toolType){
	var tableContainer = document.getElementById('table-container');
	tableContainer.currentPage = toolType === 'sh' ? 4 : 1;
	renderTable();
}