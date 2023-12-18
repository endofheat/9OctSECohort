const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Post extends Model { }
//Sequelize will create this table if it doesn't exist on startup
Post.init({
postID: {
type: DataTypes.INTEGER, allowNull: false, autoIncrement:
true, primaryKey: true
},
userID: {
type: DataTypes.INTEGER, references: { model: User, key:'id'}
},
title: {
type: DataTypes.STRING, allowNull: true, required: true
},
postDescription: {
type: DataTypes.STRING, allowNull: true, required: true,
unique: true
},
body: {
type: DataTypes.TEXT, allowNull: true, required: true
},
like: {
type: DataTypes.INTEGER, allowNull: true
},
postDate: {
type: DataTypes.DATE, allowNull: true, required: true,
unique: true
},
editDate: {
type: DataTypes.DATE, allowNull: true, required: true,
unique: true
},
image: {
type: DataTypes.STRING, allowNull: true, required: true,
unique: true
},},
{
sequelize: sequelizeInstance, modelName: 'posts', //use lowercase plural format
timestamps: true, freezeTableName: true
}
)
Post.belongsTo(User);
module.exports = Post;