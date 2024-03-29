import User from "../models/user.model.js";

export const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (req.userId !== user._id.toString()) {
    console.log("String", user._id.toString());
    return res.status(401).send("You can delete only your account!!!");
  }
  await User.findByIdAndDelete(req.params.id);
  res.status(200).send("User deleted");
};
