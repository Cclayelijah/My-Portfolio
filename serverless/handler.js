const AWS = require("aws-sdk");
const SES = new AWS.SES();

("use strict");

function sendEmail(formData, callback) {
  const emailParams = {
    Source: "cclayelijah@gmail.com", // SES SENDING EMAIL
    ReplyToAddresses: [formData.reply_to],
    Destination: {
      ToAddresses: ["cclayelijah@gmail.com"], // SES RECEIVING EMAIL
    },
    Message: {
      Body: {
        Text: {
          Charset: "UTF-8",
          Data: `Name: ${formData.firstname} ${formData.lastname}\nEmail: ${formData.reply_to}\n\nMessage: ${formData.description}`,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "You received a message from elijahdev.com",
      },
    },
  };

  SES.sendEmail(emailParams, callback);
}

module.exports.staticSiteMailer = (event, context, callback) => {
  const formData = JSON.parse(event.body);

  sendEmail(formData, function (err, data) {
    const response = {
      statusCode: err ? 500 : 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://elijahdev.com",
        "Access-Control-Allow-Origin": "https://elijahdev.com",
      },
      body: JSON.stringify({
        message: err ? err.message : data,
      }),
    };

    callback(null, response);
  });
};
