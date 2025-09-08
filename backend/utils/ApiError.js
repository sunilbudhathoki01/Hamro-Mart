class ApiError extends Error{
    constructor(statusCode,message="something went wrong",error=[],stack=""){
        this.statusCode=statusCode
        super(message)
        this.message=message
        console.log(message)
        this.error=error
        if(stack){
            this.stack=stack
        }else{
        Error.captureStackTrace(this,this.constructor)
        }
    }
}

export default ApiError