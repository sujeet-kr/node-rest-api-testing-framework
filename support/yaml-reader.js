const yaml = require('js-yaml'),
    fs = require('fs');

module.exports = {
    yamlDataAsObject: function (fileName){
        try {
            const doc = yaml.safeLoad(fs.readFileSync(fileName, 'utf8'));
            return doc;
        } catch (e){
            console.log(e);
        }
    },
    yamlDataFileObject: function(fileName){
       try {
            const doc = yaml.safeLoad(fs.readFileSync('resources/datafiles/'+ fileName, 'utf8'));
            return doc;
       } catch (ex){
           console.log(ex);
       } 
        
    }
}