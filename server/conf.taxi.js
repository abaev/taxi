const conf = {
	listenPort: 3000,
	url: 'https://taxi-form.herokuapp.com',
	email: {
		service: 'Yandex',
		user: 'cool.northcoast.send@yandex.ru',
		from: 'cool.northcoast.send@yandex.ru',
		to: 'lowrydertrue@gmail.com', // <-- Только для отладки
		subject: 'Новый заказ'
	}
}

module.exports = conf;