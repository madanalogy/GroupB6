import * as React from 'react';

import consts from 'consts';

import Bridge from 'libraries/bridges';
import Button from './components/Button';
import { getWebUrl } from 'libraries/utils/url';
import { get } from 'libraries/utils/fetch';


import './style.scss';
import Carousel from './screens/Carousel';

function Review() {
  const [userId, setUserId] = React.useState(0);
  const [userName, setUserName] = React.useState('');

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
    const getUserInfo = React.useCallback(() => {
      (async () => {
        const response = await get(`${consts.USER_GET_INFO}`, {});
        if (response && response.data && response.data.user_id && response.data.user_name) {
          setUserId(response.data.user_id);
          setUserName(response.data.user_name);
        }
      })();
    }, []);
    getUserInfo();
  
    return (
      <>
        <Carousel user_id={userId} user_name={userName}/>
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
