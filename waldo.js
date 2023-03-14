$( document ).ready(function() {
	$(".imgContainer").click(function(e) {
		var posX = Math.floor(e.pageX - $(this).offset().left - 15),
            posY = Math.floor(e.pageY - $(this).offset().top - 15);
		$(this).append("<div class='circle' style='left:"+posX+"px;top:"+posY+"px;' onclick='event.stopPropagation();removeCircle(this);'>&nbsp;</div>");
	});
	
	$("#exportButton").click(function(e) {
		exportScreenshot();
	});
});

function removeCircle(el){
	$(el).remove();
}

function exportScreenshot(){
	/*$("canvas").remove();
	html2canvas(document.querySelector(".imgContainer")).then(canvas => {
		document.body.appendChild(canvas);
	});*/
	
	html2canvas(document.querySelector('body'),{useCORS: true,allowTaint: true, foreignObjectRendering: true, crossOrigin : 'anonymous'}).then(function(canvas) {
		/*var data = canvas.toDataURL();
		var img = document.createElement('img');
		img.setAttribute('download','myImage.png');
		img src = 'data:image/png;base64,' + data;*/
        saveAs(canvas.toDataURL(), 'solution.png');
    });
}

function saveAs(uri, filename) {

    var link = document.createElement('a');

    if (typeof link.download === 'string') {

        link.href = uri;
        link.download = filename;

        //Firefox requires the link to be in the body
        document.body.appendChild(link);

        //simulate click
        link.click();

        //remove the link when done
        document.body.removeChild(link);

    } else {

        window.open(uri);

    }
}