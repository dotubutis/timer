const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding("utf8");

stdin.on("data", (key) => {
  if (key === "b") {
    process.stdout.write(".\n");
  }
  if ([1, 2, 3, 4, 5, 6, 7, 8, 9].includes(Number(key))) {
    console.log("setting timer for x seconds...");
    setTimeout(() => {
      process.stdout.write(`.\n`);
    }, 1000 * key);
  }
  if (key === "\u0003") {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }
});
