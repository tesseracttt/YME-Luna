import React from "react";

const Styles = {
    p: {
        // maxWidth: "500px",
        marginBottom: "10px",
        lineHeight: "22px",
        padding: "10px 20px",
        borderRadius: "25px",
        position: "relative",
        color: "white",
        fontSize: "20px",
        // textAlign: "center",
    },
};

const Message = ({ message }) => {
    return (
        <div className="messageCard">
            {message.isBot ? (
                <div className="botCard">
                    <p style={Styles.p}>{message.text}</p>
                </div>
            ) : (
                <div className="userCard">
                    <p style={Styles.p}>{message.text}</p>
                </div>
            )}
        </div>
    );
};

export default Message;
