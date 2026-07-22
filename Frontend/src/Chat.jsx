import "./Chat.css";
import React, { useContext, useState, useEffect, useRef } from "react";
import { MyContext } from "./MyContext";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import WelcomeScreen from "./WelcomeScreen";

function Chat({ onSuggestionClick }) {
    const { newChat, prevChats, reply } = useContext(MyContext);
    const [latestReply, setLatestReply] = useState(null);
    const [isTyping, setIsTyping] = useState(false);
    const chatsEndRef = useRef(null);

    // Auto-scroll to latest message
    const scrollToBottom = () => {
        chatsEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [prevChats, latestReply]);

    useEffect(() => {
        if (reply === null) {
            setLatestReply(null);
            setIsTyping(false);
            return;
        }

        if (!prevChats?.length) return;

        setIsTyping(true);
        const content = reply.split(" ");
        let idx = 0;

        const interval = setInterval(() => {
            setLatestReply(content.slice(0, idx + 1).join(" "));
            idx++;
            if (idx >= content.length) {
                clearInterval(interval);
                setIsTyping(false);
            }
        }, 40);

        return () => clearInterval(interval);
    }, [prevChats, reply]);

    if (newChat) {
        return <WelcomeScreen onSuggestionClick={onSuggestionClick} />;
    }

    return (
        <div className="chats">
            {prevChats?.slice(0, -1).map((chat, idx) => (
                <div key={idx} className={chat.role === "user" ? "userDiv" : "gptDiv"}>
                    {chat.role === "user" ? (
                        <div className="userMessage">{chat.content}</div>
                    ) : (
                        <>
                            <div className="gptAvatar">✨</div>
                            <div className="messageContent">
                                <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                                    {chat.content}
                                </ReactMarkdown>
                            </div>
                        </>
                    )}
                </div>
            ))}

            {prevChats.length > 0 && (
                <>
                    {latestReply === null ? (
                        <div className="gptDiv" key="non-typing">
                            <div className="gptAvatar">✨</div>
                            <div className="messageContent">
                                <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                                    {prevChats[prevChats.length - 1].content}
                                </ReactMarkdown>
                            </div>
                        </div>
                    ) : (
                        <div className="gptDiv" key="typing">
                            <div className="gptAvatar">✨</div>
                            <div className="messageContent">
                                <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                                    {latestReply}
                                </ReactMarkdown>
                            </div>
                            {isTyping && <span className="typingIndicator">▌</span>}
                        </div>
                    )}
                </>
            )}

            <div ref={chatsEndRef} />
        </div>
    );
}

export default Chat;