module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'pm2_deploy',
      script    : 'index.js',
    },
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      key: 'keys/awskey.pem',
      user : 'ubuntu',
      host : '54.64.28.43',
      ref  : 'origin/master',
      repo : 'git@github.com:CheolHoSin/pm_deploy.git',
      path : '/home/ubuntu/nodejs/helloworld',
      'post-deploy' : 'pm2 reload ecosystem.config.js'
    },
  }
};
