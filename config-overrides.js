
const path = require('path');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config.resolve.alias['@'] = path.resolve(__dirname, 'src');

  const monacoWebpack = new MonacoWebpackPlugin({
    languages: ['cpp'],
    features: ['!gotoSymbol'],
  })
  if(config.plugins){
    config.plugins = config.plugins.concat([monacoWebpack]);
  }else{
    config.plugins = [monacoWebpack];
  }

  return config;
}