import React from "react";
import { Form } from "react-router-dom";
import styles from "./SearchForm.module.css";
function SearchForm({ searchTerm }) {
  return (
    <Form className={`container ${styles.form}`}>
      <input
        type="text"
        name="search"
        id="search"
        defaultValue={searchTerm}
        required
      />
      <button type="submit">Search</button>
    </Form>
  );
}

export default SearchForm;
