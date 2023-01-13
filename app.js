const Imap = require('imap');
const {simpleParser} = require('mailparser');
require('dotenv').config();

const imapConfig = {
    user: process.env.EMAIL,
    password: process.env.PASSWORD,
    host: 'imap.gmail.com',
    port: 993,
    tls: true,
    tlsOptions: { rejectUnauthorized: false }
  };

//   console.log(new Date());

const getEmails = () => {
    try {
      const imap = new Imap(imapConfig);
      imap.once('ready', () => {
        imap.openBox('INBOX', false, () => {
          imap.search(['UNSEEN', ['ON', new Date()]], (err, results) => {
            const f = imap.fetch(results, {bodies: ''});
            f.on('message', msg => {
              msg.on('body', stream => {
                simpleParser(stream, async (err, parsed) => {
                  const {from, subject, textAsHtml, text} = parsed;
                //   console.log(parsed);
                console.log(subject);
                  /* Make API call to save the data
                     Save the retrieved data into a database.
                     E.t.c
                  */
                });
              });
            });
            f.once('error', ex => {
              return Promise.reject(ex);
            });
            f.once('end', () => {
            //   console.log('Done fetching all messages!');
              imap.end();
            });
          });
        });
      });
  
      imap.once('error', err => {
        console.log(err);
      });
  
      imap.once('end', () => {
        console.log('Connection ended');
      });
  
      imap.connect();
    } catch (ex) {
      console.log('an error occurred');
    }
  };
  
  getEmails();