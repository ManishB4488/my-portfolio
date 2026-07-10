import { useEffect } from "react";

function PageTitle({ title }) {

  useEffect(() => {
    document.title = `${title} | Manish Bisht`;
  }, [title]);

  return null;
}

export default PageTitle;