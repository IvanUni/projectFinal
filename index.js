let express = require(`express`);
let app = express();
let cors = require('cors')
app.use(cors())
let port = 3005;

app.listen(port, function () {
    console.log(`Сервер запущен: http://localhost:${port}`)
});

app.use(express.static('public'));

// Пользователи сервера

let users = [
    {username: 'Кот Задира', avatar: 'cat.png'},
    {username: 'Гордый Орёл', avatar: 'eagle.png'},
    {username: 'Спокойный Слон', avatar: 'elephant.png'},
    {username: 'Мудрая Сова', avatar: 'owl.png'},
    {username: 'Обидчивая Рыба', avatar: 'puffer-fish.png'},
    {username: 'Трудолюбивый Ленивец', avatar: 'sloth.png'},
    {username: 'Гремучая Змея', avatar: 'snake.png'},
];




app.get(`/users`, function (req, res) {
    res.send(users);
});

