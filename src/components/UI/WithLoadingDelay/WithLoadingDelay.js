import { Loading } from "carbon-components-react";
import { useEffect, useState } from "react";

const withLoadingDelay = (Component) => (props) => {
  const [isSpinnerShowedValue, setIsSpinnerShowedValue] = useState(true);

  useEffect(
    () =>
      setTimeout(() => {
        setIsSpinnerShowedValue(false);
      }, 2000),
    []
  );

  return isSpinnerShowedValue ? (
    <Loading withOverlay={false} className="spinner"></Loading>
  ) : (
    <Component {...props}></Component>
  );
};

export default withLoadingDelay;
