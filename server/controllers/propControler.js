module.exports={
  createNew:(req, res, next) => {
    const db = req.app.get('db');
    let { userId, name, description, address, city, state, zip, imgURL, loanAmmount, mortgagePayment, rent } = req.body;

    db.newProp([ userId, name, description, address, city, state, zip, imgURL, loanAmmount, mortgagePayment, rent ])
      .then( propList => res.status( 200 ).send( propList ))
      .catch(() => res.status( 500 ).send())
  },

  getProps:(req, res, next) => {
    const db = req.app.get('db');
    let { userId } = req.session.user;
    let { rentFilter } = req.query;

    if ( rentFilter !== undefined){
      db.getAllProps([ userId ])
        .then( propList => res.status( 200 ).send( propList ))
        .catch(() => res.status( 500 ).send())
    }
    else {
      db.getFilteredProps([ userId, rentFilter ])
        .then( propList => res.status( 200 ).send( propList ))
        .catch(() => res.status( 500 ).send())
    }
  },
  deleteProp:(req, res, next) => {
    const db = req.app.get('db');
    let { userId } = req.session.user;
    let { id } = req.params;

    db.deleteProp([ id, userId ])
      .then( propList => res.status( 200 ).send( propList ))
      .catch(() => res.status( 500 ).send())
  }
}