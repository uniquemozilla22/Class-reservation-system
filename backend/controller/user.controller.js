import {getUserInfo, register} from "../database/Querys/user.js";

export const validateUser = async (username, password) => {
    let responseBody = await getUserInfo(username, password);

    return responseBody;
}

export const registerNewUser = async ({user_id, username, password, email, user_type}) => {
    let responseBody = await register([user_id, username, password, email, user_type]);

    return responseBody;
}