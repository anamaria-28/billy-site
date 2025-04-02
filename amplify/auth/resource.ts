import { defineAuth } from '@aws-amplify/backend';

const postConfirmation = async (event) => {
  console.log("Post confirmation trigger fired:", event);
  return event;
}
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  triggers: {
    postConfirmation
  }
});
