Insert Into Users ( Username, UPassword )
Values ( $1, $2 );

Select *
From Users
Where Username = $1;