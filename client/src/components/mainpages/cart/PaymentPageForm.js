import React from "react";
import "react-square-payment-form/lib/default.css";
import axios from "axios";
import {
  SquarePaymentForm,
  CreditCardNumberInput,
  CreditCardExpirationDateInput,
  CreditCardPostalCodeInput,
  CreditCardCVVInput,
  CreditCardSubmitButton,
} from "react-square-payment-form";

// const express = require('express')
// const app = express()

const accessToken = `${process.env.SQUARE_ACCESS_TOKEN}`;
const SANDBOX_APPLICATION_ID = `${process.env.SQUARE_APPLICATION_ID}`;
const SANDBOX_LOCATION_ID = `${process.env.SQUARE_LOCATION_ID}`;

class PaymentPageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessages: [],
    };
  }

  cardNonceResponseReceived = (
    errors,
    nonce,
    cardData,
    buyerVerificationToken
  ) => {
    if (errors) {
      this.setState({ errorMessages: errors.map((error) => error.message) });
      return;
    }

    this.setState({ errorMessages: [] });
    alert(
      "nonce created: " +
        nonce +
        ", buyerVerificationToken: " +
        buyerVerificationToken
    );
    axios.post("/payments", cardData, {
      nonce: nonce,
      token: buyerVerificationToken,
    }); // implement this
  };

  createVerificationDetails() {
    return {
      amount: "100.00",
      currencyCode: "USD",
      intent: "CHARGE",
      billingContact: {
        familyName: "Smith",
        givenName: "John",
        email: "jsmith@example.com",
        country: "GB",
        city: "London",
        addressLines: ["1235 Emperor's Gate"],
        postalCode: "SW7 4JA",
        phone: "020 7946 0532",
      },
    };
  }

  render() {
    return (
      <div>
        <h1>Payment Page</h1>

        <SquarePaymentForm
          // {...props}
          sandbox={true}
          applicationId={SANDBOX_APPLICATION_ID}
          locationId={SANDBOX_LOCATION_ID}
          // accessToken={accessToken}
          cardNonceResponseReceived={this.cardNonceResponseReceived}
          createVerificationDetails={this.createVerificationDetails}
        >
          <fieldset className="sq-fieldset">
            <CreditCardNumberInput />
            <div className="sq-form-third">
              <CreditCardExpirationDateInput />
            </div>

            <div className="sq-form-third">
              <CreditCardPostalCodeInput />
            </div>

            <div className="sq-form-third">
              <CreditCardCVVInput />
            </div>
          </fieldset>

          <CreditCardSubmitButton>Pay $1.00</CreditCardSubmitButton>
        </SquarePaymentForm>

        <div className="sq-error-message">
          {this.state.errorMessages.map((errorMessage) => (
            <li key={`sq-error-${errorMessage}`}>{errorMessage}</li>
          ))}
        </div>
      </div>
    );
  }
}

export default PaymentPageForm;
