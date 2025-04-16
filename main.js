/* ------------------------------SKRYPTY ZDJĘĆ------------------------------ */

//dawanie zdjęć na główną ramkę
function setPhoto(){
    document.onclick = function(photo){
        if (photo.target.className == 'chooseableImage') {
            var path = photo.target.getAttribute("src");
            var urlString = 'url('+path+')';
            document.getElementById('photoFrame').style.backgroundImage = urlString;
            
            for (let element of document.getElementsByClassName("custParagraph")){
              element.style.display="none";
            }
        }
    }
  }

function resetPhoto(){
  document.getElementById('photoFrame').style.backgroundImage = "none";

  for (let element of document.getElementsByClassName("custParagraph")){
    element.style.display="";
  }
  
}

//kod poniżej skopiowany z neta, ale działa :D     dzięki MrFlamey, https://stackoverflow.com/a/23189786

function mlString(f) {
		return f.toString().
			replace(/^[^\/]+\/\*!?/, '').
			replace(/\*\/[^\/]+$/, '');
}

//wczytywanie zdjęć do mini-galerii

function run_onload() {
		var filenames = g_FOLDER_CONTENTS.match(/\S+/g);
		var fragment = document.createDocumentFragment();
		for (var i = 0; i < filenames.length; ++i) {
			var extension = filenames[i].substring(filenames[i].length-3);
			if (extension == "jpg" || extension == "png") {
				var image = document.createElement("img");
				image.src = "images/screenshots/" + filenames[i];
				image.width = "600";
        image.className="chooseableImage";
        image.onclick=setPhoto();
				fragment.appendChild(image);
			}
		}
	document.getElementById("miniGallery").appendChild(fragment);
}