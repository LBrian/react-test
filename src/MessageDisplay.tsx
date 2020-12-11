import React from "react";

import { SMS } from "./service";

interface Props {
  history: SMS[];
}

const MessageDisplay: React.FC<Props> = ({ history }) => {
  return (
    <div className="MessageDisplay">
      <header>Sent SMS</header>
      <ol>
        {history.map(({ recipient, cost, message, _id }) => (
          <li key={_id}>
            <span>+{recipient}</span>
            <span>{cost}</span>
            <span>{message}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default MessageDisplay;
