function welcome() {
	window.location.href='katalog.html';
}

function diskon() {
	Swal.fire({
		title: 'Siapa nama kamu?',
		input: 'text',
		inputPlaceholder: 'Masukkan nama kamu',
		showCancelButton: true,
		confirmButtonText: 'Dapatkan Diskon!',
		cancelButtonText: 'Batal'
	}).then((result) => {
		if (result.isConfirmed && result.value) {
			Swal.fire(
				'Selamat ' + result.value + '!',
				'Kamu mendapatkan voucher 2%!',
				'success'
			);
		}
	});
}

function showWelcomeMessage() {
	Swal.fire({
		title: 'Welcome All!',
		text: 'Selamat datang di website kami.',
		icon: 'info',
		confirmButtonText: 'Terima Kasih'
	});
}

function showCatalogMessage() {
	Swal.fire({
		title: 'Welcome To Catalog!',
		text: 'Selamat datang di katalog kami.',
		icon: 'info',
		confirmButtonText: 'Terima Kasih'
	});
}