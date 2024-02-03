interface IAuthForm {
  email: string;
  password: string;
}

interface IRegisterForm extends IAuthForm {
  name: string;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

interface ITourist extends IUser {
  location: sting;
}

export { IAuthForm, IRegisterForm, IUser, ITourist };
