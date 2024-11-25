const express = require('express')
const router = express.Router()
const {authentication} = require("../middlewares/authentication")
const multer = require("../middlewares/multer")

const VoterModel = require("../models/VoterSchema")

router.post('/postVoterImage', authentication , multer.uploadVoter ,async(req,res)=>{
    try{
        const {accountAddress,imageName}=req.body;

        const saveVoter = await VoterModel.create({
            accountAddress:accountAddress,
            imageName:imageName
        })

        res.status(200).json({message:"successfull"})

    }catch(error){
        console.log(error)
    }
})

module.exports = router;