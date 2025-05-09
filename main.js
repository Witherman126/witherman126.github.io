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

//ustawianie przełączenia ustawień

var SettingsActive = 0;
console.log("are settings currently on? (0 no / 1 yes): "+SettingsActive);

// przełączanie okienka ustawień (napewno sie dało lepiej)

function settingsToggle(){
  switch (SettingsActive) {
    case 0:

    document.getElementById("settingsArea").style.visibility="visible";
    SettingsActive=1;
    console.log("are settings currently on? (0 no / 1 yes): "+SettingsActive);
    break;

    case 1:
      
    document.getElementById("settingsArea").style.visibility="hidden";
    console.log("are settings currently on? (0 no / 1 yes): "+SettingsActive);
    SettingsActive=0;
    break;
  
    default:
      console.log("????????????");
      break;
  }
}

//------------------------------FUNKCJE USTAWIEŃ------------------------------

//włączanie/wyłączanie scrolla (janky as fuck)

function toggleScrollbar(){
  if(document.getElementById("scrollCheckbox").checked == true){
    //jeżeli ma być widoczny
    console.log("Is Scrollbar visibility enabled? (true/false): "+document.getElementById("scrollCheckbox").checked);
    document.getElementById("scrollbarStyle").innerHTML=`
    *{
    box-sizing: border-box; /*sizing*/
    }
    `;

  }else{
    //jeżeli nie ma być widoczny
    console.log("Is Scrollbar visibility enabled? (true/false): "+document.getElementById("scrollCheckbox").checked);
    document.getElementById("scrollbarStyle").innerHTML=`
    *{
    -ms-overflow-style: none; /*dla edge*/
    scrollbar-width: none;  /* dla firefoxa*/
    box-sizing: border-box; /*sizing*/
    }
    *::-webkit-scrollbar {
    display: none; /*chromium*/
    }
    `;
  }
}

/* 
document.getElementById("scrollStyleTag").innerHTML=
    '*::-webkit-scrollbar {'+
    ' display: inline;}'+
    '*{-ms-overflow-style: scrollbar;'+
    'scrollbar-width: auto;}'
    */