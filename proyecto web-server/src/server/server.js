// const express = require('express');
// const path = require('path');
import express from 'express';
import path from 'path';


export const startServer = (options) => {
    const {port , public_path = "public"} = options
    const app = express();
    //use para usar middlewares en express
    app.use(express.static(public_path));

    app.get("*",(req,res) => {
        const indexPath = path.join(__dirname + `/../../${public_path}/index.html`);
        res.sendFile(indexPath);
    })

    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    })
}

// module.exports = {startServer};