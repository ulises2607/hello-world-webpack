import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGreeting, randomGreeting } from "../redux/greeting/greetingSlice";
import { Link } from "react-router-dom";

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector(randomGreeting);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <section>
      <h1>Random Greeting</h1>
      <h3>{greeting}</h3>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </section>
  );
};

export default Greeting;