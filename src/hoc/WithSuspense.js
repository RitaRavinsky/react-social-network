import React, { Suspense } from "react";
import Preloader from "../components/common/Preloader/Preloader";

const WithSuspense = (Component) => {
  return (props) => {
    <Suspense fallback={<Preloader />}>
      <Component {...props} />
    </Suspense>;
  };
};


export default WithSuspense;
