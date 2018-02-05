module.exports={
  login: (req, res, next) => {
    const db = req.app.get('db');
    let { session } = req;
    let { username, password } = req.body;

    db.login([ username ])
      .then( userRes => {
        if ( userRes[0].UPassword == password ){
          session.user.id = userRes[0].UserId;
          session.user.username = userRes[0].Username;
          res.status(200).send( session.user );
        }
        else {
          res.status(401).send('Unauthorized.');
        }
      })
      .catch(() => res.status( 500 ).send());
  },

  register: (req, res, next) => {
    const db = req.app.get('db');
    let { session } = req;
    let { username, password } = req.body;

    db.register([ username, password ])
      .then(userRes => {
        session.user.id = userRes[0].UserId;
        session.user.username = userRes[0].Username;
        res.status(200).send( session.user );
      })
      .catch(() => res.status( 500 ).send());
  },

  logout: (req, res, next) => {
    req.session.destroy();
    res.status(200).send(req.session);
  }
}