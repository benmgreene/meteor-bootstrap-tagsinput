Package.describe({
    name: 'benmgreene:bootstrap-tagsinput',
    summary: 'jQuery plugin providing a Twitter Bootstrap user interface for managing tags, repackaged for Meteor',
    version: '0.8.0',
    git: "https://github.com/benmgreene/meteor-bootstrap-tagsinput.git"
});

Package.on_use(function (api) {
    // dependecies required by package
    api.use('jquery@1.0.1', 'client');
    api.use('less@2.5.1', 'client');
    //api.use('mizzao:bootstrap-3@3.3.1','client')
    // adding the required file for package
    api.add_files('lib/bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js', 'client');
    api.add_files('lib/bootstrap-tagsinput/dist/bootstrap-tagsinput.less', 'client');
   // api.add_files('lib/bootstrap-tagsinput/dist/bootstrap-tagsinput-angular.js', 'client');
});
