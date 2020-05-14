export interface IUser {
  userId: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
}

export interface IDefaultUser {
  firstName?: 'John';
  lastName?: 'Doe';
  profilePicture: 'https://firebasestorage.googleapis.com/v0/b/eve-test-devs.appspot.com/o/users%2Ficon-anonyme.png?alt=media&token=8162f92c-67e6-4156-ba0a-744c62140fe9';
}
