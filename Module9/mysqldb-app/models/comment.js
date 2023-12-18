const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Comment extends Model { }
//Sequelize will create this table if it doesn't exist on startup
Comment.init({
comment: {
type: DataTypes.STRING, allowNull: false, required: true
},
postID: {
type: DataTypes.INTEGER, references: { model: Post, key:'postID'}
},
userID: {
type: DataTypes.INTEGER, references: { model: User, key:'id'}
}},
{
sequelize: sequelizeInstance, modelName: 'comments', //use lowercase plural format
timestamps: true, freezeTableName: true
}
)
Comment.belongsTo(User);
Comment.belongsTo(Post);
module.exports = Comment;