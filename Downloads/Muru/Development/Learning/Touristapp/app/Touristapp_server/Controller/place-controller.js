const validate = require('express-validator');
const { v4: uuidv4 } = require('uuid');
const HttpError = require('../Module/httpError');
const Place = require("../Module/PlacesModel");
let dummy_placess = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u1'
    },
    {
        id: 'p1',
        title: '2 Emp. State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u1'
    }
];

const getallplaced = (req, res, next) => {
    // res.json(dummy_placess);
    // const allPlace = new Place.get();
    // console.log(allPlace);
}

const getPlaceById = async (req, res, next) => {
    const placeid = req.params.pid;
    // const placelist = dummy_placess.filter((p) => {
    //     // if(p.id == placeid) 
    //     return p.id == placeid;
    // });
    let placelist;
    try{
        placelist =  await Place.findById(placeid);
    }catch (er){
        return next(new HttpError('error in DB connection in get process',404));
    }
     
    console.log("got the pid request" + placelist);

    if (placelist.length == 0) {
        console.log("error request");
        return res.status(400).json({ message: 'not found placeid' });
    }
    res.json({ placelist })
};

const getPlaceandUserId = async(req, res, next) => {
    const placeid = req.params.pid;
    const userid = req.params.uid;

    // const placelist = dummy_placess.filter((p) => {
    //     if (p.id == placeid && p.creator == userid)
    //         return p;
    // });

    let placelist;

    try{
        placelist = await Place.find({creator: userid, 
            _id:placeid });
    }catch (er){
        return next(new HttpError('error in DB connection in get process',404));
    }

    console.log("got the request getPlaceandUserId");
    if (placelist.length == 0) {
        console.log("error pid request");
        const error = new Error("No user id and place id was found.");
        error.code = 400;
        return next(error);
    }
    res.json({ placelist })
};

const getPlacebyUserId = async (req, res, next) => {

    const userid = req.params.uid;
    // const placelist = dummy_placess.filter((p) => {
    //     if (p.creator == userid)
    //         return p;
    // });
    let placelist;

    console.log("got the request in getPlacebyUserId " + placelist);

    try{
        placelist = await Place.find({creator: userid});
    }catch (er){
        return next(new HttpError('error in DB connection in get process',404));
    }
    
    console.log("got the request" + placelist);
    if (placelist.length == 0) {
        console.log("error uid request");
        const error = new HttpError("No user id found",404);
        return next(error);
    }
    console.log("got the request");
    res.json({ placelist })
};

const createPlace = async (req, res, next) => {
    const isvalid = validate.validationResult(req);
    console.log(isvalid);
    if(isvalid.errors.length > 0)
    {
        let errormsg = isvalid.errors[0];
        console.log(errormsg);
        const error =new HttpError( errormsg.msg+ ' in '+errormsg.path ,422);
        return next(error);
    }
    const { title, description, imageUrl, address, location, creator } = req.body;

    // const newplace = {
    //     id: uuidv4(), title, description, imageUrl, address, location, creator
    // }
    // dummy_placess.push(newplace);

    const newPlace= new Place({
        title, description, 
        imageUrl,
         address, location, creator
    })
    console.log(newPlace);
    try{
        await newPlace.save();
    }catch (er){
        return next(new HttpError('error in DB connection in creation process',404));
    }
    console.log("data " + newPlace);

    res.status(201).json(newPlace);
}

const updatePlaces =  async(req,res,next) => {
    const isValid = validate.validationResult(req);

    if(isValid.error.length>0)
    {
        let errormsg = isvalid.errors[0];
        console.log(errormsg);
        const error = new HttpError(errormsg.msg,422);
        return next(error);
    }
    const {title,description} = req.body;
    const pid = req.params.pid;
    // const newplace = {...dummy_placess.find(p => p.id===pid)};
    // const placeindex = dummy_placess.findIndex(p => p.id==pid);
    // dummy_placess[placeindex]=newplace;

    let newplace, placeindex;
    try{
        newplace = await Place.findById(pid);
    }catch (er){
        return next(new HttpError('error in DB connection in up process',404));
    }
   
    newplace.title=title;
    newplace.description=description;
    
    

    console.log( " index" + placeindex + " newplace " + newplace.description);

    res.status(200).json({places: newplace});
}

const deletePlaces = (req,res,next) =>{
    const pid = req.params.pid;
    const newplace = {...dummy_placess.find(p => p.id ===pid)};
    console.log(newplace);
    if(newplace.id)
    {
        console.log(dummy_placess.length);
        dummy_placess =  dummy_placess.filter((p) => {
            if (p.id !== pid)
                return p;
        });
        console.log(dummy_placess.length);
        return res.status(200).json({places: "deleted"});
    }
    else
    {
        return res.status(400).json({places: "no data found"});
    }
}
module.exports.getallplaced = getallplaced;
module.exports.getPlaceById = getPlaceById;
module.exports.getPlaceandUserId = getPlaceandUserId;
module.exports.getPlacebyUserId = getPlacebyUserId;
module.exports.createPlace = createPlace;
module.exports.updatePlaces=updatePlaces;
module.exports.deletePlaces=deletePlaces