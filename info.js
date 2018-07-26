const doInfo = function() {
	const bubbleTop = document.querySelector("div");
	bubbleTop.addEventListener("mouseover", function(event) { // "click" is another way to go
		if (event.target.tagName === "SPAN") {
			let clickedWord = event.target;
// Get information.
			let wordForm = (clickedWord.dataset.intext) ? clickedWord.dataset.intext : "&nbsp;";
			let wordLemma = (clickedWord.dataset.lemma) ? clickedWord.dataset.lemma : " ";
			let wordPos = (clickedWord.dataset.pos) ? clickedWord.dataset.pos : " ";
			let wordDef = (clickedWord.dataset.def) ? clickedWord.dataset.def : " ";
			let infoBox = 
				`
					<li class="entry">${wordForm}</li>
					<li><em>LEMMA</em>: ${wordLemma}</li>
					<li><em>POS</em>: ${wordPos}</li>
					<li><em>DEFINITION</em>: ${wordDef}</li>
				`;
			document.querySelector("#info").innerHTML = infoBox;
		}
	});
};

doInfo();