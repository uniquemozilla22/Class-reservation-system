import {getUserIDByUserName, getUserInfo, register} from "../database/Querys/user.js";

export const validateUser = async (username, password) => {
    let responseBody = await getUserInfo(username, password);
    let response =  await getUserIDByUserName(username);
    response = {
        ...response,
        token: response.data[0].user_id
    }
    return response
}

export const registerNewUser = async ({ username, password, email}) => {
    await register([username, password, email]);
    let response =  await getUserIDByUserName(username);
    response = {
        ...response,
        message:"User Logged in :"+username,
        token: response.data[0].user_id
    }
    return response;
}