const {postOneUser,getOneUser}=require("../modules/user.ts")
const bcrypt=require('bcrypt')
const postOn = async (req: any, res: any) => {
  try {
    const dbUser = await getOneUser(req.body.useremail);
    if (dbUser.length > 0) {
      res.status(409).send('User already exists');
      return;
    }
    const hashedPassword = await bcrypt.hash(req.body.userpw, 10);
    const user = {
      username: req.body.username,
      userpw: hashedPassword,
      useremail: req.body.useremail,
    };
    await postOneUser(user);
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

export default {postOn}