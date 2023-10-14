import bcrypt from "bcrypt";

export const encrypt = async (password: string) => {
  const saltRound = 10;
  try {
    return bcrypt.hash(password, saltRound);
  } catch (e) {
    console.error(e);
  }
};

export const comparition = async (password: string, hash: string) => {
  try {
    return await bcrypt.compare(password, hash);
  } catch (e) {
    console.error(e);
  }
};
