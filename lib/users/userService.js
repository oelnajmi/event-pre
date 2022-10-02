const bcrypt = require('bcrypt');
async function hashIt(password) {
  const salt = await bcrypt.genSalt(6);
  const hashed = await bcrypt.hash(password, salt);
  return hashed;
}

export async function createUser(formData) {
  const hashedPassword = await hashIt(formData.password);
  formData.password = hashedPassword;
}
