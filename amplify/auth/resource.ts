import { defineAuth } from '@aws-amplify/backend';
import { postConfirmation } from "../auth/post-confirmation/resource";
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  triggers: {
    postConfirmation
  }
});
