import React, { useState } from "react";
import { Fragment } from "react";

import Form from "../Components/Form";

const Registro = () => {
  const [completedForm, setCompletedForm] = useState(false);
  const [completedForm2, setCompletedForm2] = useState(false);

  return (
    <Fragment>
      
        <div>
          <Form
            completedForm={completedForm}
            setCompletedForm={setCompletedForm}
            completedForm2={completedForm2}
            setCompletedForm2={setCompletedForm2}
          />
        </div>
      
    </Fragment>
  );
};
export default Registro;
