# `ng-env-logger` — Angular Logging Service Package

How many times have you left a rogue `console.log` in your production code? That's the worst, right? This package will help keep that from occurring.

This package logs to the console by giving you multiple levels to write:

1.  error
2.  warn
3.  info
4.  debug
5.  log

When the service is initialized, you provide a level for it to write. So, for example, if you provide the `WARN` level (number 2), `this.logService.info()`, `.debug()`, and `.log()` calls are ignored; only the `.warn()` and `.error()` functions continue to work. This will allow you to log certain messages or objects in development without worrying about removing them for your production version of the app. Whichever level you choose, the service logs that number and lower to the console.

To use the service, add the following to your `AppModule`'s imports array:

    NgLogModule.forRoot({ level: LogLevels.WARN }),
