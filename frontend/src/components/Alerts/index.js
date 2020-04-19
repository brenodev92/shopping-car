import React from "react";
import { useSelector } from "react-redux";

const Alerts = () => {
  const isShow = useSelector((state) => state.ux.isShowAlert);

  return (
    <React.Fragment>
      {isShow && (
        <div className="container mt-3">
          <div className="alert alert-success" role="alert">
            Produto cadastrado com sucesso!
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Alerts;
