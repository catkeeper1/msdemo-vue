/**
 * jsdoc-vue 配置文件
 */
 module.exports = {
    "tags": {
      "allowUnknownTags": false,
      // 指定所用词典
      "dictionaries": [
        "jsdoc"
      ]
    },
    // 查找文件的深度 需要用 -r 参数
    "recurseDepth": 10,
    "source": {
      "include": [
        // 需要编译的文件路径 使用时请替换
        "./src"
      ],
      // 应该忽略的路径
      "exclude": ["./src/jsdoc"],
  
      "includePattern": ".+\\.(vue|js)$",
      "excludePattern": "(^|\\/|\\\\)_"
    },
    // 使用插件
    "plugins": [
      // 插件路径
      "./jsdoc-vue",
    ],
    "markdown": {
      "excludeTags": ["#", "author"],
      "tags": ["foo", "bar"]
    },
    "templates": {
      "cleverLinks": false,
      "monospaceLinks": true,
      "useLongnameInNav": false,
      "showInheritedInNav": true
    },
    "opts": {
      "destination": "./docs/",
      "encoding": "utf8",
      "private": true,
      "recurse": true,
      "template": "./node_modules/minami"
    }
  }
  