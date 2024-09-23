import { useEffect } from "react";

function Title(titleString: string) {
  useEffect(() => {
    document.title = titleString
  }, [titleString])
}

export default Title