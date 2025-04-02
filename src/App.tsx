import type { Schema } from '../amplify/data/resource';
import { postConfirmation } from "../auth/post-confirmation/resource";

import { useAuthenticator } from '@aws-amplify/ui-react';
import { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/data';

const client = generateClient<Schema>();

function App() {
    const { user, signOut } = useAuthenticator();

  const { signOut } = useAuthenticator();

  // ...

  return (
    <main>
       <h1>{user?.signInDetails?.loginId}'s todos</h1>
      {/* ... */}
      <button onClick={signOut}>Sign out</button>
    </main>
  );
}

export default App;
