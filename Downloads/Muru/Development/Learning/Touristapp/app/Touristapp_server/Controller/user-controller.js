

const HttpError = require("../Module/httpError");

const validate =  require("express-validator");
const userList = [
    {
        id: 'u1',
        mailid: 'user1',
        userimgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCSIX9lfno6Jf2RaEi6m0of2XqSSAZ0B7hqSagG9S3FUPAyXWwD6lomwgy6FPQKk-Pw7I&usqp=CAU',
        password: 'user1',
        places: 3
    },
    {
        id: 'u2',
        mailid: 'user2',
        userimgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCSIX9lfno6Jf2RaEi6m0of2XqSSAZ0B7hqSagG9S3FUPAyXWwD6lomwgy6FPQKk-Pw7I&usqp=CAU',
        password: 'user2',
        places: 2
    }
]

const findUser = (req, res, next) => {
    console.log('req the user');
    res.json({ userList });
}

const loginUser = (req, res, next) => {
    const { mailid, password } = req.body;
    console.log('req the user' + mailid);
    const findUser = userList.find(u => {
        return u.mailid == mailid
    })
    console.log('findUser the user' + findUser);
    if (findUser) {

        const matchpass = userList.find(u => {
            return u.password == password
        })
        console.log('matchpass the user' + matchpass);
        if (matchpass) {
            return res.status(200).json("Logged In");
        }
        throw new HttpError(' Password missmatch', 401);

    }

    const error = new HttpError('No user found', 400);
    throw error;
}

const signIn = (req,res,next) =>{
    const isValid = validate.validationResult(req);
    if(isValid.errors.length > 0)
    {
        console.log(isValid);
        const user= isValid.errors[0];
        return next(new HttpError(user.msg +' in ' +user.path,244));
    }
    const {mailid,password} = req.body;

    const isUserexit = userList.find(u => u.mailid ==mailid)
    if(isUserexit)
        throw new HttpError('User already exist',400);
    const newuser={
        mailid,
        password
    }
    userList.push(newuser);

    return res.status(201).json({message:'User Created '+newuser});
}

exports.findUser = findUser;
exports.loginUser = loginUser;
exports.signIn=signIn;