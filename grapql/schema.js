const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    

    type Post {
        _id:ID!
        title:String!
        content:String!
        creator: User!
        createAt:String!
        updatedAt:String!
    }

    type authData {
        token:String!
        user:String!
    }

    type User {
        _id : ID!
        name: String!
        email:String!
        password:String!
        status:String!
        role : String!
        posts:[Post!]!
    }

    type RootQuery {
        logIn(email:String!,password:String):authData!
        post(id:ID):Post!
   }

   input PostInputData {
    title:String!
    content:String!
   }
   input UserInputData{
        name: String!
        email:String!
        password:String!
    }
    
    type RootMutation {
        createUser(userInput: UserInputData):User!
        createPost(postInput: PostInputData):Post!
    }
    schema {
        query:RootQuery
        mutation: RootMutation
    }
`);
