import React, { useContext, useEffect } from "react";

import Page from "../../components/Page";

import { UserContext } from "../../contexts/UserContext";

export default () => {
  const { signOut } = useContext(UserContext);

  useEffect(() => {
    signOut();
  }, []);

  return <Page></Page>;
};
