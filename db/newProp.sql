Insert Into Properties ( UserId, Name, Description, Address, City, State, Zip, ImgURL, LoanAmmount, MortgagePayment, Rent )
Values ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11 );

Select *
From Properties
Where UserId = $1;