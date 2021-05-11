var workshop = {
  teacher: "robert",
  ask(question) {
    console.log(this.teacher, question);
  },
};

workshop.ask("what is implicit binding?");
