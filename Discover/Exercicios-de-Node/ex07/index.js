const questions = [
  "Seu dia hoje foi produtivo?",
  "Oque você aprendeu hoje?",
  "Oque você vai aprender amanhã?",
  "Seja melhor do que você foi hoje, amanhã!",
];
const reply = [];

const ask = (index = 0) => {
  process.stdout.write(questions[index] + " > ");
  process.stdin.write("");
};
ask();

process.stdin.on("data", (data) => {
  reply.push(data.toString().trim());
  if (reply.length < questions.length) {
    ask(reply.length);
  } else {
    console.log(`
        
Beleza Giovanni, suas respostas de hoje foram:

        "Seu dia hoje foi produtivo?"
       r: ${reply[0]}
       "Oque você aprendeu hoje?"
       r: ${reply[1]}
       "Oque você vai aprender amanhã?"
       r: ${reply[2]}
       "Seja melhor do que você foi hoje, amanhã!"
       r: ${reply[3]}`);
    process.exit();
  }
});
