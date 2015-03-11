# grunt-color-svg-icons

> Color svg icons.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-color-svg-icons --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-color-svg-icons');
```

## The "color_svg_icons" task

### Overview
In your project's Gruntfile, add a section named `color_svg_icons` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  color_svg_icons: {
    svg_options: {
      options: {
        colors: {
          red: '#ff0000',
          blue: '#0000ff'
        }
      },
      files: {
        'dest': ['src/svgs/*']
      }
    }
  }
});
```

### Options

#### options.colors
Type: `Object`

Properties of the colors object will be used to get the value of color to set the svg icon to and name will be used as a prefix to resulting files.


### Usage Examples
In this example SVGO.optimize will be run on all svgs in the src/svgs/* path, then color will be set to given CSS hex value, and this result saved in dest folder with property name as the prefix.

```
grunt.initConfig({
  color_svg_icons: {
    svg_options: {
      options: {
        colors: {
          red: '#ff0000',
          blue: '#0000ff'
        }
      },
      files: {
        'dest': ['src/svgs/*']
      }
    }
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
