import {getUserInfo} from "../database/Querys/user.js";

export const validateUser = async (username, password) => {
    let responseBody = await getUserInfo(username, password);

    return responseBody;
}