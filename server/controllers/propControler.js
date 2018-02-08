module.exports={
  createNew:(req, res, next) => {
    const db = req.app.get('db');
    let { name, description, address, city, state, zip, imgURL, loanAmmount, mortgagePayment, rent } = req.body;
    let { id } = req.session.user;

    db.newProp([ id, name, description, address, city, state, zip, imgURL, loanAmmount, mortgagePayment, rent ])
      .then( propList => res.status( 200 ).send( propList ))
      .catch(() => res.status( 500 ).send())
  },

  getProps:(req, res, next) => {
    const db = req.app.get('db');
    let { id } = req.session.user;
    let { rentFilter } = req.query;

    if ( rentFilter === undefined){
      db.getAllProps([ id ])
        .then( propList => res.status( 200 ).send( propList ))
        .catch(() => res.status( 500 ).send())
    }
    else {
      db.getFilteredProps([ id, rentFilter ])
        .then( propList => res.status( 200 ).send( propList ))
        .catch(() => res.status( 500 ).send())
    }
  },

  deleteProp:(req, res, next) => {
    const db = req.app.get('db');
    let userId = req.session.user.id;
    let { id } = req.params;
    id = id.slice(1);

    db.deleteProp([ id, userId ])
      .then( propList => res.status( 200 ).send( propList ))
      .catch(() => res.status( 500 ).send(console.log))
  }
}