//app.js
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const port = process.env.PORT || 5000;

//routes
const routes = require('./routes/'); // index.js는 /와 같으므로 생략가능
const routesUpload = require('./routes/upload.js');

//connectDB
const models = require('./models'); // mysql model
models.sequelize.sync()
    .then(() => {
        console.log('DB connection is success.');
    })
    .catch(err => {
        console.err('DB connection is error.');
        console.log('Error Contents \n' + err);
    }); // 서버 실행시 시퀄라이저의 스키마를 DB에 적용

//body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(routes); // use는 경로에 대한 확장성의 의미
app.use(routesUpload);

//정적인 파일이 접근할 라우터 path 설정
app.use('/image', express.static('./upload'));


http.listen(port, () => {
    console.log(`Listening on port Number ${port}`);
    }); 