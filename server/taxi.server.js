const express = require('express');
const bodyParser = require('body-parser');
const enforce = require('express-sslify');
const path = require('path');
// const nodemailer = require('nodemailer');

const conf = require('./conf.taxi');
const sendMail = require('./send-email');


const app = express();

// For Node (being behind Heroku) can produce
// a Set-Cookie response header when cookie : { secure: true}
// app.set('trust proxy', 1);

// TODO: Uncomment this in prod
// For security reasons
app.disable('x-powered-by');

// TODO: Uncomment this in prod
// Redirect HTTP to HTTPS
// Use enforce.HTTPS({ trustProtoHeader: true }) in case you are behind
// a load balancer (e.g. Heroku)
app.use(enforce.HTTPS({ trustProtoHeader: true }));

// NOTE: app.get('env') === 'development' (=== 'production' )

// For Content-Type: application/json
app.use(bodyParser.json());


// Allow CORS
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 
    conf.url);
  res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept');
  // res.header('Access-Control-Allow-Credentials',
  //   'true');
  res.header('Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS');
  next();
});


app.options('/*', (req, res, next) => {
  res.status(200).send();
});


app.use( express.static(path.join(__dirname, 'public')) );

app.post('/email-send', (req, res, next) => {
	let client = req.body.client;
	let email = req.body.email;
	
	let html = `<b>${client.routeSelect}</b><br>
	<hr>
	<b>Город:</b> ${client.dataRoute.cities.city}<br>
	<b>Откуда:</b> ${client.dataRoute.cities.from}<br>
	<b>Куда:</b> ${client.dataRoute.cities.to}<br>
	<b>Туда и обратно:</b> ${client.dataRoute.bothWays ? 'Да' : 'Нет'}<br>
	<hr>
	<b>Тариф:</b> ${client.rate.title}<br>
	<b>Подача автомобиля (руб.):</b> ${client.rate.supplyCost}<br>
	<b>Ожидание (руб.):</b> ${client.rate.waitingCost}<br>
	<b>Стоимость км (руб.):</b> ${client.rate.kmCost}<br>
	<b>Скидка на обратную поездку (%):</b> ${client.rate.reverseWayDiscount}<br>
	<b>Ожидание при обратной поездке (руб./час):</b> ${client.rate.reverseWayWaitingCost}<br>
	<b>Максимальное количество пассажиров:</b> ${client.rate.maxPassengers}<br>
	<hr>
	<b>Время подачи автомобиля:</b> ${client.supply.date.day}.${client.supply.date.month}.${client.supply.date.year} ${client.supply.time}<br>
	<b>Адрес подачи автомобиля:</b> ${client.supply.address}<br>`;
	
	client.supply.destinationAddress.forEach( address => {
		html += `<b>Адрес назначения:</b> ${address}<br>`;
	});

	html += `
	<hr>
	<b>Данные пассажира</b><br>
	<b>Количество пассажиров:</b> ${client.passengerData.passengersQuantity}<br>
	<b>Имя и фамилия:</b> ${client.passengerData.name}<br>
	<b>Номер мобильного телефона:</b> ${client.passengerData.phone}<br>
	<b>Электронная почта:</b> ${client.passengerData.email}<br>
	<b>Примечание:</b> ${client.passengerData.remark}<br>
	<br>
	<hr>
	<b>ИТОГ:</b> <i>(Тут мне немного непонятно что и как считать :) )</i><br>`;
	sendMail({ html: html, to: email });
	res.status(200).send();
});


// Error handling middleware
app.use((err, req, res, next) => {
	let errStack;

	console.error(err);

	if(app.get('env') === 'development') errStack = err;
	
	res.status(err.statusCode || 500)
		.send(errStack || err.message || 'Internal server error');
});


app.listen(process.env.PORT || conf.listenPort, () => {
	console.log(`Server listen to: ${process.env.PORT || conf.listenPort}`);
});