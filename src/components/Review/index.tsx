import * as React from 'react';

import Bridge from 'libraries/bridges';
import Button from './components/Button';
import { getWebUrl } from 'libraries/utils/url';

import './style.scss';

function Review() {

  /*
  const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(false);

  Bridge.isUserLoggedIn().then(({ isLoggedIn }: { isLoggedIn: boolean }) => {
    setIsUserLoggedIn(isLoggedIn);
  });

  Bridge.loginIfNeeded(getWebUrl(`${window.location.origin}/login`));
  */
  // TODO: Uncomment auth check above and remove static boolean assignment
  const isUserLoggedIn = true;

  if (isUserLoggedIn) {
    return (
      <>
        <div>Hello World!</div>
      </>
    );
  } else {
    return (
      <>
        <div>Login is required!</div>
        <br />
        <div>
          <Button
            onClick={() => {
              Bridge.loginIfNeeded(getWebUrl(`${window.location.origin}/login`));
            }}
          >
            Log In
          </Button>
        </div>
      </>
    );
  }
}

export default Review;
