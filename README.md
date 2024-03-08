# PDF Generator

A simple yet powerful PDF generation tool written in TypeScript.

## Installation

```bash
npm install pdf-generator
```

## Usage

```javascript
const PDFGenerator = require("pdf-generator");

// Create a new PDFGenerator instance
const pdfGenerator = new PDFGenerator();

// Add content to the PDF
pdfGenerator
  .addText("Hello, this is a PDF generated using PDFGenerator!", {
    fontSize: 20,
    align: "center",
  })
  .addPage()
  .addText("This is page 2 of the PDF.", {
    y: 100,
    align: "center",
  });

// Save the PDF
pdfGenerator.save();
```

## API

### `PDFGenerator(options?: PDFGeneratorOptions)`

Creates a new instance of PDFGenerator with optional options.

- `options.filename`: Specify the filename for the generated PDF. Default is `'output.pdf'`.

### `addText(text: string, options?: TextOptions): PDFGenerator`

Adds text to the PDF document.

- `text`: The text content to add.
- `options`: Optional parameters for text formatting, such as fontSize, font, alignment, etc.

### `addPage(): PDFGenerator`

Adds a new page to the PDF document.

### `save(): void`

Saves the PDF document to the specified filename.

## Example

Check the `example` directory for an example usage of the PDFGenerator.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
````markdown
# File Upload Utility

File Upload Utility is a JavaScript library for handling file uploads in Node.js applications. It provides a simple and easy-to-use API for uploading and deleting files.

## Installation

You can install File Upload Utility via npm:

```bash
npm install file-upload-utility-js
```

## Usage

```javascript
const FileUploadUtility = require('file-upload-utility-js');

// Initialize with the upload directory
const uploadDir = '/path/to/upload/directory';
const uploader = new FileUploadUtility(uploadDir);

// Example: Upload a file
const fileStream = fs.createReadStream('/path/to/file');
const uploadedFilePath = await uploader.uploadFile(fileStream);
console.log('File uploaded to:', uploadedFilePath);

// Example: Delete a file
const filePathToDelete = '/path/to/uploaded/file';
await uploader.deleteFile(filePathToDelete);
console.log('File deleted:', filePathToDelete);
```

## API

### `FileUploadUtility(uploadDir)`

- `uploadDir`: The directory where uploaded files will be stored.

#### Methods:

- `uploadFile(file)`: Uploads a file to the specified upload directory. Returns the path where the file is uploaded.
- `deleteFile(filePath)`: Deletes a file from the file system using its path.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
