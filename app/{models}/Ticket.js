import mongoose, { Mongoose, Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI),
mongoose.Promise = global.Promise

const ticketSchema = new Schema (
    {
        title : String,
        description : String,
        category : String,
        priority : Number,
        progress : Number,
        status : String,
        active : Boolean
    },
    {
        timestamps : true,

    }
)

const Ticket = Mongoose.models.Ticket || Mongoose.model("Ticket", ticketSchema);
export default Ticket
