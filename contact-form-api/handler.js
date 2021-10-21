const aws = require("aws-sdk");
const ses = new aws.SES();
const myEmail = "cclayelijah@gmail.com";
const myDomain = "elijahdev.com";

function generateResponse(code, payload) {
  return {
    statusCode: code,
    headers: {
      "Access-Control-Allow-Origin": myDomain,
      "Access-Control-Allow-Headers": "x-requested-with",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify(payload),
  };
}

function generateError(code, err) {
  console.log(err);
  return {
    statusCode: code,
    headers: {
      "Access-Control-Allow-Origin": myDomain,
      "Access-Control-Allow-Headers": "x-requested-with",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify(err.message),
  };
}

function generateEmailParams(body) {
  const { email, firstname, lastname, message } = body;
  console.log(email, firstname, lastname, message);
  if (!(email && firstname && lastname && message)) {
    throw new Error(
      "Missing parameters! Make sure to add parameters 'email', 'firstname', 'lastname', 'message'."
    );
  }

  return {
    Source: myEmail,
    Destination: { ToAddresses: [myEmail] },
    ReplyToAddresses: [email],
    Message: {
      Body: {
        Text: {
          Charset: "UTF-8",
          Data: `Name:\n${firstname} ${lastname}\n\nMessage:\n${message}`,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: `You received a message from ${myDomain}!`,
      },
    },
  };
}

module.exports.send = async (event) => {
  try {
    console.log(event);
    const emailParams = generateEmailParams(event);
    const data = await ses.sendEmail(emailParams).promise();
    return generateResponse(200, data);
  } catch (err) {
    return generateError(500, err);
  }
};
