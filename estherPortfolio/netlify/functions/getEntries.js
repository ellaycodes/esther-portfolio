import dotenv from "dotenv";

dotenv.config();

export const handler = async function (event, context) {
  const accessToken = process.env.REACT_APP_ACCESS_TOKEN;
  const spaceId = process.env.REACT_APP_SPACE_ID;
  const environmentId = process.env.REACT_APP_ENVIRONMENT_ID;

  return {
    statusCode: 200,
    body: JSON.stringify({
      accessToken: `${accessToken}`,
      spaceId: `${spaceId}`,
      environmentId: `${environmentId}`
    }),
  };
};