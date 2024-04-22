const settings = {
	async: true,
	crossDomain: true,
	url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back?limit=10',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f3e5d0f1b4msh526af959f676396p1bcc67jsnedcf231b09f6',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});