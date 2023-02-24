// const bcrypt = (await import("bcrypt")).default;
// import("bcrypt").then((module) => {
//   const bcrypt = module.default;

// });
const hashPassword = async (password) => {
  const bcrypt = (await import("bcrypt")).default;
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(12, (err, salt) => {
      if (err) {
        reject(err);
      }
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          reject(err);
        }
        resolve(hash);
      });
    });
  });
};

const comparePassword = (password, hashed) => {
  // return bcrypt.compare(password, hashed);
  return "compare";
};

module.exports = { hashPassword, comparePassword };
