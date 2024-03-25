module.exports = {
    apps: [{
        name: "express-app",
        script: "./src/app.ts",
        interpreter: "./node_modules/.bin/ts-node",
        exec_mode: "cluster",
        instances: "max"
    }]
}
