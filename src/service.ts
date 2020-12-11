// there's a proxy config in package.json that specifies all unknown requests are proxied to the sendsei api
// this means instead of making a call to https://api.transmitmessage.com/v1/sender you would call just /v1/sender

export type SMS = {
  _id: string;
  cost: number;
  message: string;
  recipient: string;
};

export type SMSResponse = {
  sms: SMS;
  parts: number;
};

type SendSMSRequest = {
  sender: string;
  recipient: string;
  message: string;
};

const URI = "/v1/sms/message";
const HEADERS = new Headers({
  "Content-Type": "application/json",
  "x-api-key": process.env.REACT_APP_API_KEY as string,
});

function send(body: SendSMSRequest): Promise<SMS> {
  return fetch(URI, {
    method: "POST",
    redirect: "follow",
    headers: HEADERS,
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((smsResponse) => smsResponse.sms)
    .catch((err) => console.error(err));
}

export { send };
