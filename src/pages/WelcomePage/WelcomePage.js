import React, { useEffect } from "react";
import { actions, selector } from "src/slices/authenticate";
import { useDispatch, useSelector } from "react-redux";

const WelcomePage = () => {
  const dispatch = useDispatch();

  const {
    checkAuthenticate: { data, loading, error },
  } = useSelector(selector);

  useEffect(() => {
    dispatch(actions.checkAuthenticate());
  }, [dispatch]);

  useEffect(() => {
    console.log(data, loading, error);
  }, [data, loading, error]);

  return <div>WelcomePage</div>;
};

export default React.memo(WelcomePage);
