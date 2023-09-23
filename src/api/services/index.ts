import Client from "../index";

export const fetchPostById = (param?: number) => {
  return Client.credentialsInstance.get(
    `https://jsonplaceholder.typicode.com/posts/${param}`
  );
};

export const fetchAllPosts = () => {
  return Client.credentialsInstance.get(
    `https://jsonplaceholder.typicode.com/posts`
  );
};
