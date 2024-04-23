let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let chatContainerElement = document.getElementById("chatContainer");
let userInputElement = document.getElementById("userInput");

function onBotToChat() {
    let chatCounts = chatbotMsgList.length;
    let chatMsg = chatbotMsgList[Math.ceil(Math.random() * chatCounts) - 1];
    
    let botChatElement = document.createElement("div");
    botChatElement.classList.add("msg-to-chatbot-container");
    chatContainerElement.appendChild(botChatElement);
    
    let msgFromBotElement = document.createElement("span");
    msgFromBotElement.classList.add("msg-to-chatbot");
    msgFromBotElement.textContent = chatMsg;
    botChatElement.appendChild(msgFromBotElement);
}

function onAddToChat() {
    let userInputValue = userInputElement.value;
    
    let userChatElement = document.createElement("div");
    userChatElement.classList.add("msg-to-chatbot-container");
    chatContainerElement.appendChild(userChatElement);
    
    let msgElement = document.createElement("span");
    msgElement.classList.add("msg-to-chatbot");
    msgElement.textContent = userInputValue;
    userChatElement.appendChild(msgElement);
    userChatElement.value = "";
    onBotToChat();

    
}