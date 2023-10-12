// remove properties from user before sending to prisma
export const mapUser = (user: any) => {
  delete user.id;
  delete user.recent;
  delete user.favorites;
  return user;
};
