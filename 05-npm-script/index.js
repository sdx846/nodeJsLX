// 获取package.json里的自定义属性config的env值
//通过npm run start3方式获取，直接在控制台node ./05-npm-script/index.js获取不到
console.log(process.env.npm_package_config_env);
console.log(process.env.npm_package_main);