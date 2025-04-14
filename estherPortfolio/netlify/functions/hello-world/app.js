import axios from 'axios';

export const handler = async function (event, context) {
    const value = process.env.ACCESS_TOKEN;
    return {
        statusCode: 200,
        body: JSON.stringify({message: `Value is ${value}`})
    }
}