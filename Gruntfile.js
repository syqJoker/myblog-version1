
module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    var lrPort = 35729;
    //var serveStatic = require('serve-static');
    //var serveIndex = require('serve-index');
    /*var lrMiddleware = function(connect, options, middlwares) {
        return [
            lrSnippet,
            // 静态文件服务器的路径 原先写法：connect.static(options.base[0])
            serveStatic(options.base[0]),
            // 启用目录浏览(相当于IIS中的目录浏览) 原先写法：connect.directory(options.base[0])
            serveIndex(options.base[0])
        ];
    };*/
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // 通过watch任务，来监听文件是否有更改
        shell:{
            webpackds:{
                command:'node webpack-dev-server --inline'
            },
            killall:{
                command:'killall node'
            }
        },
        nodemon: {
            dev: {
                script: './server.js',
                options: {
                    args: ['dev'],
                    nodeArgs: ['--debug'],
                    ignore: ['README.md', 'node_modules/**', '.idea','./app'],
                    ext: 'js',
                    watch: ['./server'],
                    delay: 1000,
                    env: {
                        PORT: '3000'
                    },
                    cwd: __dirname
                }
            }
        },
        watch: {
            client: {
                // 我们不需要配置额外的任务，watch任务已经内建LiveReload浏览器刷新的代码片段。
                options: {
                    livereload: lrPort,
                    options:{livereload:true}
                },
                // '**' 表示包含所有的子目录
                // '*' 表示包含所有的文件
                files: ['**/*.html']
            }
        },
        concurrent:{
            develop:{
                tasks:['watch','nodemon','shell:webpackds'],
                options:{
                    logConcurrentOutput:true
                }
            }

        }


    });

    // 默认被执行的任务列表。
    grunt.registerTask('default', ['concurrent:develop']);

};
