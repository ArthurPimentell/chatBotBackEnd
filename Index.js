import CONTROLER from './src/adapter/rest/Controler.js';

const {app,port} = CONTROLER;



app.listen(port, () =>{
    console.log(`Server is running on http://localhost:${port}`);
})