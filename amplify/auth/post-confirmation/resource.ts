import { defineFunction } from '@aws-amplify/backend';

export const postConfirmation = defineFunction({
  name: 'post-confirmation',
  handler: async (event) => {
    console.log("Post confirmation trigger fired:", event);
    return event;
  },
});
