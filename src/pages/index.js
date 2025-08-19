import { useEffect } from "react";
import { navigate } from "gatsby";

const IndexPage = () => {
  useEffect(() => {
    navigate("/bio");
  }, []);

  return null;
};

export default IndexPage;
