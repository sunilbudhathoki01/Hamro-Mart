import config from "./config.js";

function cloudinaryConnect(){
    cloudname=config.cloudinary.cloudName,
    apiKey=config.cloudinary.apiKey,
    apiSecret=config.cloudinary.apiSecret
}
export default cloudinaryConnect