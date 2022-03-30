import React, { useEffect } from "react";

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = `Passcore: ${title}`;
  }, [title]);
  return;
};

export default useDocumentTitle;
