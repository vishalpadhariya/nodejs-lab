const path = require("node:path");

console.log(path.basename("C:\\temp\\vishalpadhariya.html"));
// Returns: vishalpadhariya.html

console.log(path.basename("/foo/bar/baz/asdf/quux.html"));
// Returns: 'quux.html'

console.log(path.basename("/foo/bar/baz/asdf/quux.html", ".html"));
// Returns: 'quux'

console.log(process.env.PATH);
// Prints: 'C:\Windows\system32;C:\Windows;C:\Program Files\node\'

console.log(process.env.PATH.split(path.delimiter));
// Returns ['C:\\Windows\\system32', 'C:\\Windows', 'C:\\Program Files\\node\\']

console.log(path.dirname("/foo/bar/baz/asdf/quux"));
// Returns: '/foo/bar/baz/asdf'

console.log(
	path.format({
		dir: "C:\\path\\dir",
		base: "file.txt",
	})
);
// Returns: 'C:\\path\\dir\\file.txt'

console.log(path.parse("C:\\path\\dir\\file.txt"));
// Returns:
// { root: 'C:\\',
//   dir: 'C:\\path\\dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }
