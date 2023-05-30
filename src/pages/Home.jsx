import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Layout from "../shared/layout/Layout";
import Form from "../components/form/Form";
import List from "../components/list/List";

import { __getTodos } from "../shared/redux/modules/todosSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  return (
    <Layout>
      <Form />
      <List />
    </Layout>
  );
};

export default Home;
