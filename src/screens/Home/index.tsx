import * as React from 'react';

 // Components
 import { Link, LinkBack } from 'libraries/components/Link';

 // Stylings
 import './styles.scss';

 function Home() {
   // Start creating your awesome app here
   return (
     <div>
       <LinkBack>Back</LinkBack>

       <br />
       <br />

       <Link to='/demo' replace>
         Open Demo App
       </Link>

       <br />
       <br />

       <Link to='/review' replace>
         Shopee Year-in-Review
       </Link>
     </div>
   );
 }

 export default Home;