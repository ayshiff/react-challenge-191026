import React, { useState, useEffect } from "react";
import { AGetStudents } from "../../actions/student.action";
import { connect } from "react-redux";
import TextField, { Input } from "@material/react-text-field";
import "@material/react-text-field/dist/text-field.css";
import "./login.component.scss";
import { ALoginUser } from "../../actions/login.action";

interface IProps {
  onFetchStudents: any;
  onLoginUser: any;
  auth: boolean;
  history: any;
}

const Login = (props: IProps) => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  useEffect(() => {
    if (props.auth) {
      props.history.push("/promo");
    }
  }, [props]);

  return (
    <div className="loginWrap">
      <div className="login">
        <div className="title">
          <h1>Intranet</h1>
          <span></span>
        </div>
        <form>
          <TextField outlined label="Adresse mail">
            <Input
              value={email}
              // @ts-ignore
              onChange={e => setEmail(e.target.value)}
            />
          </TextField>
          <TextField outlined label="Mot de passe">
            <Input
              value={password}
              type="password"
              // @ts-ignore
              onChange={e => setpassword(e.target.value)}
            />
          </TextField>
          <input
            onClick={e => {
              e.preventDefault();
              props.onLoginUser({ mail: email, password });
            }}
            className="submit"
            type="submit"
            name="submit"
            value="Se connecter"
          />
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    auth: state.login.auth
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onFetchStudents: () => dispatch(AGetStudents()),
    onLoginUser: (payload: any) => dispatch(ALoginUser(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
