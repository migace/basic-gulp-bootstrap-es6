(function() {
	document.addEventListener('DOMContentLoaded', () => {
		var messageBox = document.getElementById('message'),
			message = messageBox.innerText;

		setTimeout(() => {
			messageBox.innerText = message + " test2";
		}, 2000);
	});
})();