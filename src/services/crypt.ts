import bcrypt from "bcrypt";

/**
 * @param password - password to encrypt
 */
export const encrypt = async (password: string) => {
  const saltRound = 10;
  try {
    return bcrypt.hash(password, saltRound);
  } catch (e) {
    console.error(e);
  }
};

/**
 * @param password - password to compare
 * @param hash - password hashed
 */
export const comparition = async (password: string, hash: string) => {
  try {
    return await bcrypt.compare(password, hash);
  } catch (e) {
    console.error(e);
  }
};
