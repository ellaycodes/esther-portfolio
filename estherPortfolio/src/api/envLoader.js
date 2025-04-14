import { getEnvVars } from "./envCache";

export let envVars = null;

export const loadEnvVars = async () => {
  if (!envVars) {
    envVars = await getEnvVars();
  }
  return envVars;
};
