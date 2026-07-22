import "./ChatWindow.css";
import Chat from "./Chat.jsx";
import { MyContext } from "./MyContext.jsx";
import { useContext, useState, useEffect, useRef } from "react";
import {ScaleLoader} from "react-spinners";

function ChatWindow() {
    const {prompt, setPrompt, reply, setReply, currThreadId, setPrevChats, setNewChat} = useContext(MyContext);
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const inputRef = useRef(null);

    const getReply = async () => {
        setLoading(true);
        setNewChat(false);

        console.log("message ", prompt, " threadId ", currThreadId);
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: prompt,
                threadId: currThreadId
            })
        };

        try {
            const response = await fetch("http://localhost:8080/api/chat", options);
            const res = await response.json();
            console.log(res);
            setReply(res.reply);
        } catch(err) {
            console.log(err);
        }
        setLoading(false);
    }

    //Append new chat to prevChats
    useEffect(() => {
        if(prompt && reply) {
            setPrevChats(prevChats => (
                [...prevChats, {
                    role: "user",
                    content: prompt
                },{
                    role: "assistant",
                    content: reply
                }]
            ));
        }

        setPrompt("");
    }, [reply]);


    const handleProfileClick = () => {
        setIsOpen(!isOpen);
    }

    const handleSuggestionClick = (suggestion) => {
        setPrompt(suggestion);
        // Focus input field after state update
        setTimeout(() => {
            if (inputRef.current) {
                inputRef.current.focus();
                // Move cursor to end of text
                inputRef.current.setSelectionRange(suggestion.length, suggestion.length);
            }
        }, 0);
    }

    return (
        <div className="chatWindow">
            <div className="navbar">
                <span>NovaAI 🌌 <i className="fa-solid fa-chevron-down"></i></span>
                <div className="userIconDiv" onClick={handleProfileClick}>
                    <span className="userIcon"><i className="fa-solid fa-user"></i></span>
                </div>
            </div>
            {
                isOpen && 
                <div className="dropDown">
                    <div className="dropDownItem"><i className="fa-solid fa-gear"></i> Settings</div>
                    <div className="dropDownItem"><i className="fa-solid fa-cloud-arrow-up"></i> Upgrade plan</div>
                    <div className="dropDownItem"><i className="fa-solid fa-arrow-right-from-bracket"></i> Log out</div>
                </div>
            }
            <Chat onSuggestionClick={handleSuggestionClick}></Chat>

            <ScaleLoader color="#7C3AED" loading={loading} size={12}>
            </ScaleLoader>
            
            <div className="chatInput">
                <div className="inputBox">
                    <input 
                        ref={inputRef}
                        placeholder="Ask NovaAI anything..."
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && !loading ? getReply() : ''}
                    >
                           
                    </input>
                    <button id="submit" onClick={getReply} disabled={loading}><i className="fa-solid fa-paper-plane"></i></button>
                </div>
                <p className="info">
                    NovaAI can make mistakes. Please verify important information.
                </p>
            </div>
        </div>
    )
}

export default ChatWindow;