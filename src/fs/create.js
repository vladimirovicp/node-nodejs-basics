//create.js - реализовать функцию, которая создает новый файл fresh.txt с содержимым,
// "I am fresh and young"  внутри папки с files
// (если файл уже существует, необходимо выдать ошибку с сообщением "FS operation failed")


//const fs = require('fs');
import { open } from 'node:fs';

const create = async (urlFile) => {
    open(urlFile,'wx',(err,fd) => {
        if (err){
            if(err.code === 'EEXIST'){
                console.log('FS operation failed')
                return
            }

        } else {
            console.log('Допиши запись в файл')
        }
    })

};

await create('./src/fs/files/fresh.txt');