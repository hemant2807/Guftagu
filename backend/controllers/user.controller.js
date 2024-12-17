import User from "../models/user.model.js";

export const getUsersForSidebar= async(req,res) => {

    try {
        const loggedInUserId= req.user._id;

        const filteredUsers = await User.find({_id : {$ne: loggedInUserId}}).select("-password") //our userId will not be displayed because we have excluded ourselves with this $ne command but if we want to see ourselves too jsut like in Whatsapp we can remove this {_id : {$ne: loggedInUserId}}

        res.status(200).json(filteredUsers);
        
    } catch (error) {
        console.log("Error in getUsersForSidebar", error.message);
        res.status(500).json({ error: "Internal Server Error!" });
    }
}