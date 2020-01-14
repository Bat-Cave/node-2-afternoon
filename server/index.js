const express = require('express');
const app = express();
const msgCtrl = require('./controllers/messages_controller');

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

const mbase = '/api/messages';

app.post(mbase, msgCtrl.create);
app.get(mbase, msgCtrl.read);
app.put(mbase + '/:id', msgCtrl.update);
app.delete(mbase + '/:id', msgCtrl.delete);



const port = 3001;
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});