import React, { useContext, useEffect } from "react";

import Page from "../../components/Page";
import Button from "../../components/Button";

import { UserContext } from "../../contexts/UserContext";

export default () => {
  const { signOut } = useContext(UserContext);

  useEffect(() => {
    signOut();
  }, []);

  return (
    <Page>
      <Button onPress={signOut}>Sair</Button>
    </Page>
  );
};
