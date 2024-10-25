const express = require('express');

const { ServerConfig } = require('./config');

const apiRoutes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT,async ()=>{
    console.log(`Successfully started the server on the PORT : ${ServerConfig.PORT}`);

    // Bad Code Alert
     const {City,Airport} = require('./models');
    // console.log(City);
    // const bengaluru = await City.findByPk(1);
    // console.log(bengaluru);
    // const airport = await Airport.create({name: 'ABC Airport',code:'ABC',cityId: 2});
    // console.log(airport);

    // const airpt = await bengaluru.createAirport({name: 'DEF Airport',code:'DEF'});
    // console.log(airpt);

    // const airports = await bengaluru.getAirports();
    // console.log(airports);

    // console.log(await bengaluru.getAirports());
    // console.log(await bengaluru.countAirports());

    // const kmp = await Airport.findByPk(10);
    // await bengaluru.removeAirport(kmp);
    // console.log(await bengaluru.countAirports());

    // const indore = await City.create({ name : 'Indore'});
    // console.log(indore);

    // const city = await City.findByPk(11);
    // await city.createAirport({name: 'Indore Airport', code : 'IND'});

    await City.destroy({
        where : {
            id : 11
        }
    });
    
})