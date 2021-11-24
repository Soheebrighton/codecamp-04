import { ApolloServer, gql } from "apollo-server";
import { argsToArgsConfig } from "graphql/type/definition";
import { createConnection } from "typeorm";
import Board from "./Board.mysql";

const typeDefs = gql`
  input createBoardInput {
    writer: String
    title: String
    age: Int
  }
  type AAA {
    number: Int
    writer: String
    title: String
    age: Int
  }
  type Query {
    fetchBoards: [AAA]
  }

  type Mutation {
    #createBoard(writer: String, title: String, age: Int): String
    createBoard(createBoardInput: createBoardInput!): String
    deleteBoard(number: Int!): String
  }
`;

const resolvers = {
  Query: {
    fetchBoards: async () => {
      /// 데이터베이스에서 게시물데이터 꺼내오기

      const result = await Board.find({ where: { deletedAt: false } });
      console.log(result);
      return result;
    },
  },
  Mutation: {
    // loginCheck: (parent: any, args: any) => {},

    deleteBoard: async (_: any, args: any) => {
      await Board.update({ number: args.number }, { deletedAt: new Date() });
      return "게시물이 정상적으로 삭제되었습니다.";
    },
    createBoard: async (_: any, args: any) => {
      // loginCheck({aaa: "철수"})
      // 데이터베이스에 게시물데이터 등록하기
      // agrs는 인자
      // writer: String, title: String, age: Int

      /// 2 번째 방법 ///
      // await Board.insert({
      //   title: args.title,
      //   writer: args.writer,
      //   age: args.age,
      // });

      // 3번째 방법/ /
      // await Board.insert({
      //   title: args.createBoardInput.title,
      //   writer: args.createBoardInput.writer,
      //   age: args.createBoardInput.age,
      // });

      await Board.insert({
        ...args.createBoardInput,
      });
      return "게시물 등록에 성공하였습니다!!";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

createConnection({
  type: "mysql",
  database: "mysql",
  username: "root",
  password: "codecamp",
  host: "34.64.207.239",
  port: 3306,
  // @ts-ignore
  entities: [__dirname + "/*.mysql.ts"],
  logging: true,
  synchronize: true,
})
  .then(() => {
    // 연결성공시 실행하기
    console.log("연결완료");
    server.listen({ port: 4000 });
  })
  .catch((error) => {
    // 연결 실패시 실행하기
    console.log(error);
  });
