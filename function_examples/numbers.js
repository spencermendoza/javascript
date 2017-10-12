for (var i = 1; i <= 100; i++) {
	let three = i/3;
	let five = i/5;
	if (three % 1 == 0 && five % 1 == 0) {
			document.write('Rightpoint ');
		} else if (three % 1 == 0) {
			document.write('Right ');
		} else if (five % 1 == 0) {
			document.write('Point ');
		} else {
			document.write(i + ' ');
		}
};