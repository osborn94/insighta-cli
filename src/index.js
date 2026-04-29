const { program } = require('commander');

program
  .name('insighta')
  .description('Insighta CLI Tool');


// AUTH COMMANDS (TOP LEVEL)
program
  .command('login')
  .description('Login with GitHub')
  .action(require('./commands/login'));

program
  .command('logout')
  .description('Logout user')
  .action(require('./commands/logout'));

program
  .command('whoami')
  .description('Show current user')
  .action(require('./commands/me'));

// PROFILES COMMAND GROUP
const profiles = program.command('profiles');

profiles
  .command('list')
  .option('--gender <gender>')
  .option('--country <country>')
  .option('--age-group <age_group>')
  .option('--min-age <min_age>')
  .option('--max-age <max_age>')
  .option('--sort-by <sort_by>')
  .option('--order <order>')
  .option('--page <page>')
  .option('--limit <limit>')
  .action(require('./commands/profiles/list'));

profiles
  .command('get <id>')
  .action(require('./commands/profiles/get'));

profiles
  .command('search <query>')
  .action(require('./commands/profiles/search'));

profiles
  .command('create')
  .option('--name <name>')
  .action(require('./commands/profiles/create'));

profiles
  .command('export')
  .option('--format <format>')
  .option('--gender <gender>')
  .option('--country <country>')
  .action(require('./commands/profiles/export'));

program.parse();