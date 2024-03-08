// file-upload-utility.js

const fs = require('fs');
const path = require('path');

class FileUploadUtility {
    constructor(uploadDir) {
        this.uploadDir = uploadDir;
    }

    async uploadFile(file) {
        try {
            const uploadPath = path.join(this.uploadDir, file.name);
            const fileStream = fs.createWriteStream(uploadPath);
            await file.pipe(fileStream);
            return uploadPath;
        } catch (err) {
            throw new Error(`Error uploading file: ${err.message}`);
        }
    }

    async deleteFile(filePath) {
        try {
            await fs.promises.unlink(filePath);
            return true;
        } catch (err) {
            throw new Error(`Error deleting file: ${err.message}`);
        }
    }
}

module.exports = FileUploadUtility;
