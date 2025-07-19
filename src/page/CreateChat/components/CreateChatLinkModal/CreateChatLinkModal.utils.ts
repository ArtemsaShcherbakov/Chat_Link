const MAX_LENGTH_NAME_USER = 2;

export const validateNameUser = (nameUser: string) => nameUser.trim().length > MAX_LENGTH_NAME_USER;
