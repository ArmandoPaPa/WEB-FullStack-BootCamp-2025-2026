const bcrypt = require('bcrypt');

const hashPassword = async (pw) => {
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(pw, salt);
    console.log('Salt:', salt);
    console.log('Hash:', hash);
}

// const hashPassword = async (pw) => {
//     const hash = await bcrypt.hash(pw, 12);
//     console.log('Hash:', hash);
// }

const login = async(pw, hashedPw) => {
    const isMatch = await bcrypt.compare(pw, hashedPw);
    console.log('Password match:', isMatch);
}

// hashPassword('monkey');

login('monkey', '$2b$12$DeGmQgVxyHrC4n74f3KAbuwmd0SBMfI45rBY.fBLCQNg76k1Ot44a');

