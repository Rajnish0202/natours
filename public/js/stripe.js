/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe(
  'pk_test_51LRVZdSHJNAqnwe5jIBfoNwmhQaXhMqFz2IiU7dVNihRTh31vkWSCDduJepJQIDx724UsUSQBnB7B09gyLEk5ZAX00FHns8C1U'
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get the checkout session from API

    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    // console.log(session);

    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
