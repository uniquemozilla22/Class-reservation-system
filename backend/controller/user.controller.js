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

export const registerNewUser = async ({user_id, username, password, email, user_type}) => {
    await register([user_id, username, password, email, user_type]);
    let response =  await getUserIDByUserName(username);
    response = {
        ...response,
        token: response.data[0].user_id
    }
    return response;
}