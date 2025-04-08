import CONTROLER from './src/controller/Controler.js';

const {app,port} = CONTROLER;

app.listen(port, () =>{
    console.log(`Server is running on http://localhost:${port}`);
})