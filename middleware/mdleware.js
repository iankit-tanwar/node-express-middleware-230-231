
let mdlwre =  (req, res, next) => {

   // console.log(req.query)

    fullDetails = '';
    for (k in req.query){
       // console.log(k);
        console.log(req.query[k])
        fullDetails +=req.query[k]+' ';
    }
    console.log(fullDetails);

    req.query= fullDetails;

    next();
}

module.exports = {mdlwre};