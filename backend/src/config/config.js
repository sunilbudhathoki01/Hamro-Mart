import dotenv from "dotenv"
dotenv.config()
const config={
    dastabaseName:process.env.databaseName,
    port:process.env.PORT ||8000,
    MONGO_URL:process.env.MONGO_URL,
    cloudinary:{
        cloudName:process.env.cloudName,
        apiKey:process.env.apiKey,
        apiSecret:process.env.apiSecret
    }
}
export default config