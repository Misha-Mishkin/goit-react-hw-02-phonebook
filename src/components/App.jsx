import { Component } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";


export class App extends Component {
  state = {
    contacts: [],
    name: ''
  };
  
  render() {
    return (
    <div>
      <ContactForm/>
    </div>
  );
  };
};
