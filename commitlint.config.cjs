/*
 * https://commitlint.js.org/#/reference-rules
 * <type>(<scope>): <subject> // 空一行<body>// 空一行<footer>
 * 1、type 是用于说明该 commit 的类型的: 如下：
 * feat：新功能 feature
 * update：更新某功能
 * fix：修补某功能的bug fixbug
 * refactor：重构某个功能，没有新加的功能或修改的bug refactor
 * format：代码格式化
 * style：仅样式改动
 * test: 测试
 * docs：仅文档新增 / 改动
 * deps：依赖升级
 * perf: 优化构建工具或运行时性能
 * config：配置文件修改、构建过程或辅助工具的变动
 * revert：回滚到上一个版本
 * build：编译相关的修改，例如发布版本、对项目构建或者依赖的改动
 *
 * 2、scope 是说明 commit 影响的范围，建议填写影响的功能模块
 * 3、subject 是对于该 commit 目的的简短描述
 * */

/*
 *rule配置说明:：rule由name和配置数组组成，如：'name:[0, 'always', 72]'，
 *数组中第一位为level，可选0,1,2，0为disable，1为warning，2为error，
 *第二位为应用与否，可选always|never，
 *第三位该rule的值。
 */

module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always', [
                'feat',
                'build',
                'update',
                'fix',
                'refactor',
                'format',
                'test',
                'perf',
                'deps',
                'revert',
                'style',
                'docs',
                'chore'
            ]
        ], // <type> 类型
        'type-empty': [2, 'never'], // <type> 不能为空
        'type-case': [2, 'always', 'lower-case'], // <type>格式小写
        'scope-empty': [2, 'never'], // <scope> 不能为空
        // 'scope-case': [2, 'always', 'lower-case'], // <scope> 格式 小写
        'subject-empty': [2, 'never'], // <subject> 描述不能为空
        // 'subject-full-stop': [2, 'never', '.'], // <subject> 以.为结束标志
        // <subject> 格式
        // 可选值
        // 'lower-case' 小写 lowercase
        // 'upper-case' 大写 UPPERCASE
        // 'camel-case' 小驼峰 camelCase
        // 'kebab-case' 短横线 kebab-case
        // 'pascal-case' 大驼峰 PascalCase
        // 'sentence-case' 首字母大写 Sentence case
        // 'snake-case' 下划线 snake_case
        // 'start-case' 所有首字母大写 start-case
        'subject-case': [2, 'never', []]
        // 'body-leading-blank': [2, 'always'], // body换行
        // 'footer-leading-blank': [1, 'always'], // <footer> 以空行开头
        // 'header-max-length': [2, 'never', 72] // header 最长72
    }
}