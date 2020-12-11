import React, { useState } from "react";

import { SMS } from "./service";
import MessageDisplay from "./MessageDisplay";
import MessageForm from "./MessageForm";

const MessagePage = () => {
  // As criteria is page session state, so we can just simply use useState
  const [history, setHistory] = useState<SMS[]>([]);

  return (
    <div className="MessagePage">
      <MessageForm
        onSubmitted={(sms) => sms && setHistory([...history, sms])}
      />
      <MessageDisplay history={history} />
    </div>
  );
};

export default MessagePage;
