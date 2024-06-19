// #!/usr/bin/env node
const yargs = require("yargs");

yargs
  .command({
    command: "seed",
    describe: "Seed data into the database",
    handler: () => {
      require("./commands/seed");
    },
  })
  .demandCommand(1, "You need to specify a command to run")
  .help().argv;
