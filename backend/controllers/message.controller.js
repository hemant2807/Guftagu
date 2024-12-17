import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
        messages: [],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }


    //SOCKET IO FUNCTIONALITY WILL BE IMPLEMENTED TO MAKE IT REAL TIME

    //takes much time 2s
    // await conversation.save();  1s
    // await newMessage.save();    1s

    //
    await Promise.all([conversation.save(), newMessage.save()]); //1s

    res.status(201).json(newMessage);


  } catch (error) {
    console.log("Error in sendMessage controller: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


export const getMessages = async(req, res) => {
    try {
        
        const {id:userToChatId}= req.params;
        const senderId = req.user._id;

        const conversation =await Conversation.findOne({
            participants: {$all: [senderId, userToChatId]}
        }).populate("messages"); //NOT ACTUAL MESSAGES BUT ACTUAL MESSAGE   


        if(!conversation) return res.status(200).json([]);

        const messages  = conversation.messages;

        res.status(200).json(messages);
    } catch (error) {
        console.log("Error in sendMessage controller: ", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
