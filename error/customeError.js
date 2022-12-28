

class ApiError {
    constructor(message,statusCode) {
        this.mess = message
        this.statCode = statusCode
    }
}

const errorCustomeResponse = (mess,stat) => {
    return new ApiError(mess,stat)
}

module.exports = {ApiError,errorCustomeResponse}