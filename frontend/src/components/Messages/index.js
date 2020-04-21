import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../store/ducks/actions/appActions";
import "./style.css";

const Alerts = ({ message }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(Actions.removeMessages(message));
    }, 2000);
  }, [dispatch, message]);

  return (
    <div className="container mt-3">
      <div className="alert alert-success" role="alert">
        {message}
      </div>
    </div>
  );
};

export default function Messages() {
  const { messages } = useSelector((state) => state.ux);
  return (
    <div className="messages">
      {messages.map((msg, index) => (
        <Alerts key={index} message={msg} />
      ))}
    </div>
  );
}
