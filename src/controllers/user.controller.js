import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js"


const registerUser = asyncHandler(async(req, res)=>{
    const {username, password, fullname, avatar, coverImage} = req.body;
    if(!username || !password || !fullname || !avatar || ! coverImage){
      res.status(400);
    }
    res.status(201);
})
export {registerUser};