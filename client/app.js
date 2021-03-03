PORT = 3000; 
const app = Express();

app.use(Express.json());
app.use(Express.urlencoded({extedned : fasle}));

app.post('/balance', (request, response) => {});
app.post('/withdraw', (request, response) => {});
app.post('/deposit', (request, response) => {});

