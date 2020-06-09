import axios from "axios";

interface ISignup {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export const signup = async <ISignup>(data: ISignup) => {
  const res = await axios.post("http://localhost:8000/api/signup", data, { headers: {} });
  console.log(res);
};
