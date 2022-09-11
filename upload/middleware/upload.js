const path = require('path')
const multer = require('multer');

const multerStorage = multer.diskStorage({
    destination: function(req, file, cb){
        return cb(null,'./upload/images')
    },
    filename: function(req, file, cb){
        const ext = file.mimetype.split("/")[1]
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const multerFilter = (req, file, cb) =>{
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png'){
        cb(null, true)
    }else{
        cb(new Error ("Not a valid File"),false)
        
    }
}

const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter
})

module.exports = upload