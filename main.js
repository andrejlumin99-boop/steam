(function () {
	'use strict';

	var thumbs = document.getElementById('gallery-thumbs');
	var mainImage = document.getElementById('gallery-image');
	if (!thumbs || !mainImage) {
		return;
	}

	thumbs.addEventListener('click', function (event) {
		var target = event.target || event.srcElement;
		while (target && target !== thumbs && target.tagName !== 'A') {
			target = target.parentNode;
		}
		if (!target || target === thumbs) {
			return;
		}
		event.preventDefault();

		var links = thumbs.getElementsByTagName('a');
		for (var i = 0; i < links.length; i++) {
			links[i].className = links[i].className.replace(/\bis-selected\b/g, '').replace(/^\s+|\s+$/g, '');
		}
		target.className = (target.className + ' is-selected').replace(/^\s+/, '');
		mainImage.src = target.getAttribute('data-full');
	});
})();
