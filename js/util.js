
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

function adjustContent(fromLoad) {
	var column3 = document.getElementsByClassName('column-3');
	if (document.body.offsetWidth < 800 || isMobileDevice()) {
		if(column3 && column3.length > 0){
			for (var i = 0; i < column3.length; i++) {
				var col = column3[i];
				col.style.width = '100%';
			};
		}
	} else {
		if(column3 && column3.length > 0){
			for (var i = 0; i < column3.length; i++) {
				var col = column3[i]
				col.style.width = '30%';
			};
		}
	}
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
	var table = document.createElement('div');
	table.classList = "table";
	for (var i = ((currentPage * pageSize) - pageSize); i < (currentPage * pageSize); i++) {
		var productDiv = document.createElement('div');
		productDiv.classList = "product-container";
		var tool = elements[i];
		var imageCell = document.createElement('div');
		imageCell.classList = "image-container";
		var image = document.createElement('img');
		image.classList = "product-image";
		image.src = tool.image;
		var descriptionCell = document.createElement('div');
		descriptionCell.classList = "description-container";
		var description = document.createElement('span');
		description.innerHTML = tool.description;
		var type = document.createElement('img');
		var typeMap = {fc:'images/f_c.png',sh:'images/s_h.png'};
		type.src = typeMap[tool.type];
		imageCell.appendChild(image);
		descriptionCell.appendChild(description);
		descriptionCell.appendChild(type);
		productDiv.appendChild(imageCell);
		productDiv.appendChild(descriptionCell);
		table.appendChild(productDiv);
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
	if(isMobileDevice()){
		var productContainer = document.getElementsByClassName('product-container');
		if(productContainer && productContainer.length > 0){
			for (var i = 0; i < productContainer.length; i++) {
				productContainer[i].style.width = '100%';
			};
		}
	}
}
function filterByType(toolType){
	var tableContainer = document.getElementById('table-container');
	tableContainer.currentPage = toolType === 'sh' ? 4 : 1;
	renderTable();
}

function goToContactenos () {
	window.location.href = "contactenos.html#contactenos";
}

function goToSobreNosotros() {
	window.location.href = "contactenos.html#information";
}

function goToInicioReadMore() {
	var inicioReadMore = document.getElementById('inicio-readmore');
	inicioReadMore.style.display = 'block';
	window.location.href = "#inicio-readmore";
}


function hideReadMore () {
	var inicioReadMore = document.getElementById('inicio-readmore');
	inicioReadMore.style.display = 'none';
	window.location.href = "#information";
}

function goUp() {
	window.location.href = "#header-board";
}