import axios from "axios";

export const getEnvVars = async () => {
  let cachedEnvVars = null;

  const res = await axios.get("/.netlify/functions/getEntries");
  cachedEnvVars = res.data;
  return cachedEnvVars;
};
