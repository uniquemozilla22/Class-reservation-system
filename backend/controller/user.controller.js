import {getUserInfo, register} from "../database/Querys/user.js";

export const validateUser = async (username, password) => {
    let responseBody = await getUserInfo(username, password);

    return responseBody;
}

export const registerNewUser = async ({username, password, email}) => {
    let responseBody = await register([username, password, email]);

    return responseBody;
}