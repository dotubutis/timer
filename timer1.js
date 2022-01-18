let args = process.argv.slice(2);
args = args.filter((arg) => !isNaN(arg) && arg > 0).map((arg) => Number(arg));
if (args.length === 0) {
  process.exit();
}
for (let i = 0; i < args.length; i++) {
  setTimeout(() => {
    process.stdout.write(`.\n`);
  }, 1000 * args[i]);
}
