const express = require("express");
const app = express();
const port = 5000;
const { graphqlHTTP } = require("express-graphql");
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require("graphql");

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "getmyfirstdata",
    fields: () => ({
      message: {
        type: GraphQLString,
        resolve: () => "my first message",
      },
    }),
  }),
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
