Package.describe({
  name: "agustino:purecss",
  summary: "Meteor Package that includes responsive CSS modules for pure.css.",
  version: "0.6.0",
  git: "https://github.com/agustino/meteor-purecss.git"
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0');
  api.addFiles('lib/css/pure-min.css', 'client');
  api.addFiles('lib/css/grids-responsive-min.css', 'client');
});
