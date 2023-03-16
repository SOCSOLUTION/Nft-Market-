import nextConnect from 'next-connect';
import middleware from '../../middleware/database';
const regUser = require('../../middleware/database');
const bcrypt = require('bcrypt');

// handler.use(middleware);

// handler.get( (req, res) => {

//     regUser.findOne({ email: req.body.email }).then((user) => {
//         if (user) {
//           console.log("email already exists");
//         }
//         else{
//             alert("email added successfully")
//         }
// });
// })
// export default handler;

export default (req, res) => {
  const { name, email, password, repeatpassword } = req.body;
  if (!name || !email || !password || !repeatpassword) {
    console.log('Fill empty fields');
  }

  //Confirm Passwords
  if (password !== repeatpassword) {
    console.log('Password must match');
  } else {
    //Validation
    regUser.findOne({ email: email }).then((user) => {
      if (user) {
        console.log('email already exists');
        return res.status(404).send({
          auth: false,
          message: 'Email already exists',
        });
      } else {
        //Validation
        const newUser = new regUser({
          name,
          email,
          password,
          repeatpassword,
        });
        newUser.save().then(
          res.status(200).send({
            auth: true,
          })
        );
        //Password Hashing
        bcrypt.genSaltSync(10, (err, salt) =>
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.repeatpassword = hash;
            newUser
              .save()
              .then(
                res.status(200).send({
                  auth: true,
                })
              )
              // .then(res.redirect("/login"))
              .catch((err) => console.log(err));
          })
        );
      }
    });
  }
};

// regUser.findOne({ email: req.body.email }).then((user) => {
//             if (user) {
//               console.log("email already exists");
//             }
//             else{
//                 alert("email added successfully")
//             }

//     const validemail ='aj@gmail.com'
//     if(req.body.email === validemail) {

//     const obj={
//         message: 'This email is added to your account'
//     }
//     res.send(obj.message)
// }
// else{
//     res.send(400,'badrequest')
// }
