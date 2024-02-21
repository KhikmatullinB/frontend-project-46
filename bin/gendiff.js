import { Command } from "commander";

const program = new Command();
program
  .description("Compares two configuration files and shows a difference.")
  .version("-v, --version", "-h, --help");
program.parse();
