const { OAuth2Client } = require("google-auth-library");

const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  "postmessage"
);

exports.getProfileInfo = async (credentials) => {
  const ticket = await client.verifyIdToken({
    idToken: credentials.credential,
    audience: credentials.clientId,
  });
  const payload = ticket.getPayload();
  return payload;
};
