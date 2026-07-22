import React, { useState } from "react";
import "./MessageBubble.css";

function MessageBubble({ role, content }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(content);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    if (role === "user") {
        return (
            <div className="messageBubbleContainer userContainer">
                <div className="userBubble">
                    <p>{content}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="messageBubbleContainer assistantContainer">
            <div className="assistantAvatar">
                <span>✨</span>
            </div>
            <div className="assistantBubble">
                <div className="assistantContent">
                    {content}
                </div>
                <button
                    className="copyButton"
                    onClick={handleCopy}
                    title="Copy message"
                >
                    <i className={`fa-solid ${copied ? "fa-check" : "fa-copy"}`}></i>
                </button>
            </div>
        </div>
    );
}

export default MessageBubble;
