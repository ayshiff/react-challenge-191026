import React, { useState } from "react";
import { AGetStudents } from "../actions/student.action";
import { connect } from "react-redux";
import TextField, {Input} from '@material/react-text-field';
import '@material/react-text-field/dist/text-field.css';
import "./login.component.scss";

interface IProps {
  onFetchStudents: any;
}

const Login = (props: IProps) => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  return <div className="loginWrap">
    <div className="login">
      <div className="title">
        <h1>Intranet</h1>
        <span></span>
      </div>
      <form>
        <TextField
          outlined
          label='Adresse mail'
          >
          <Input
            value={email}
            // @ts-ignore
            onChange={e => setEmail(e.target.value)} />
        </TextField>
        <TextField
          outlined
          label='Mot de passe'
          >
          <Input
            value={password}
            // @ts-ignore
            onChange={e => setpassword(e.target.value)} />
        </TextField>
        <input className="submit" type="submit" name="submit" value="Se connecter"/>
      </form>
    </div>
  </div>;
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onFetchStudents: () => dispatch(AGetStudents())
  };
};

export default connect(
  mapDispatchToProps
)(Login);
