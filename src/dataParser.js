//-? Import parse-json and other modules as neccessary here
const parseJSON = require('parse-json');
const data = require('./src/data.json');

class DataParser {
  constructor(php, java, python, golang) {
    //++ Add your implementations here if necessary

    //+ Feel free to ignore the below lines for now and ask questions later
    this.php = this.php.bind(this);
    this.java = this.java.bind(this);
    this.python = this.python.bind(this);
    this.golang = this.golang.bind(this); 
  }

  php() {
    //++ Add your implementations here if necessary
    console.log(this.php);
  }

  java() {
    //++ Add your implementations here if necessary
    console.log(this.java);
  }

  python() {
    //++ Add your implementations here if necessary
    console.log(this.python);
  }

  golang() {
    //++ Add your implementations here if necessary
    console.log(this.golang);
  }
}
php.DataParser();

java.DataParser();

python.DataParser();

golang.DataParser();

//-? Ensure to export the DataParser class for use in the index.js script
