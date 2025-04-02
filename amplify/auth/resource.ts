import { defineAuth } from '@aws-amplify/backend';

export const postConfirmation = defineFunction({
  name: 'post-confirmation',
  handler: async (event) => {
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
