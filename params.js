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
