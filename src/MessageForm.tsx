import React, { MouseEvent, useCallback, useState } from "react";

import { send, SMS } from "./service";

interface Props {
  onSubmitted: (sms: SMS) => void;
}

const SENDER = "Enterprise";

const MessageForm: React.FC<Props> = ({ onSubmitted }) => {
  const [recipient, setRecipient] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const handleSubmit = useCallback(
    (e: MouseEvent<HTMLFormElement>) => {
      e.preventDefault();

      send({ sender: SENDER, recipient, message }).then((data) => {
        data && onSubmitted(data);
      });
    },
    [message, recipient, onSubmitted]
  );

  return (
    <div className="MessageForm">
      <header>Send SMS</header>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Sender: </label>
          <input
            required
            readOnly
            type="text"
            name="sender"
            value={SENDER}
            aria-label="Sender"
            id="MessageForm_sender"
          ></input>
        </div>
        <div>
          <label>Recipient: </label>
          <input
            required
            type="tel"
            name="recipient"
            defaultValue={recipient}
            id="MessageForm_recipient"
            placeholder="61412345678"
            onChange={(e) => setRecipient(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Message: </label>
          <textarea
            required
            name="message"
            id="MessageForm_message"
            placeholder="Message..."
            defaultValue={message}
            // 1 SMS chunk character size lmit is 160
            maxLength={480}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div>
          <input type="submit" id="submit"></input>
        </div>
      </form>
    </div>
  );
};

export default MessageForm;
