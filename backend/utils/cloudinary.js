import {v2 as cloudinary}from "cloudinary"
const cloudinaryFolder="Hamro-Mart"
async function uploadFile(files) {
    const result=[]
    for(const file of files){
        const uploadResult=await new Promise((resolve,reject)=>{
            cloudinary.uploader.upload_stream(
              {folder:cloudinaryFolder},
              (error,uploadResult)=>{
                if(error){return reject(error)}
                return resolve(uploadResult)
              }
            ).end(file.buffer)
        })
        result.push(uploadResult)
    }
    return result;
}

export default uploadFile