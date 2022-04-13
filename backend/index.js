const app  = require('./app');
const port = process.env.POTR || 5000;


app.listen(5000, () => {
    console.log(`Server has started on ${port}`)
});
