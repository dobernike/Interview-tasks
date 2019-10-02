const path = require('path');

module.exports = {
    extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react', 'plugin:sonarjs/recommended'],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            legacyDecorators: true,
        },
    },
    plugins: ['react', 'jsx-a11y', 'import', 'sonarjs'],
    env: {
        browser: true,
        node: true,
        jest: true,
    },
    settings: {
        'import/parser': 'babel-eslint',
        'import/ignore': ['node_modules', 'plugins', '.(json|less|css|xml)$'],
        react: {
            pragma: 'React',
            version: '16.4.0',
        },
    },
    globals: {
        jsdom_locationAssignParams: true, // TODO перенести в плагин
        jsdom_locationAssignHref: true,
        react_disableWarnings: true,
        react_enableWarnings: true,
    },
    rules: {
        'no-restricted-imports': [
            1,
            'lodash',
            'ramda',
            'crypto',
            'bluebird',
            'setimmediate2',
            'pure-render-decorator',
            'ajv',
        ],
        'no-restricted-globals': [2, 'find'],
        'no-var': 0,
        'no-shadow': 1,
        'vars-on-top': 0,
        'consistent-return': 1,
        'no-unused-vars': [2, { vars: 'all', args: 'none', varsIgnorePattern: '^React$', ignoreRestSiblings: true }],
        'no-cond-assign': [1, 'always'],
        'default-case': 1,
        'no-use-before-define': 1,
        'no-case-declarations': 1,
        'no-restricted-syntax': 1,
        'guard-for-in': 'off',
        'no-continue': 'off',
        'func-name-matching': 1, // включить
        'prefer-template': 1, // включить
        'no-useless-escape': 1, // включить
        'global-require': 1,
        'class-methods-use-this': 1,
        'no-return-assign': 1,
        'no-plusplus': [1, { allowForLoopAfterthoughts: true }],
        'no-restricted-properties': 1, // включить
        'prefer-promise-reject-errors': [1, { allowEmptyReject: false }],
        'one-var': [
            0, // ломает код :/
            'never',
        ],
        'prefer-destructuring': 1,
        'max-statements': [2, 15],
        'max-depth': [1, 2],
        complexity: [2, 20],
        'max-params': [1, 3],
        'max-nested-callbacks': [2, 3],
        'prefer-const': 1,
        'no-param-reassign': [
            1,
            {
                props: false,
            },
        ],
        'no-console': 2,
        'func-style': [
            2,
            'declaration',
            {
                allowArrowFunctions: true,
            },
        ],
        'newline-after-var': [
            // Нужно влкючить, когда поправят баг с добавлением пробела перед let
            2,
            'always',
        ],
        'new-cap': [
            2,
            {
                capIsNewExceptions: ['When', 'Then', 'Given', 'Nothing', 'T', 'F'],
                newIsCap: false,
            },
        ],
        'no-unused-expressions': [
            2,
            {
                allowShortCircuit: true,
                allowTernary: true,
            },
        ],
        'no-underscore-dangle': [
            2,
            {
                allow: ['_exception', '__html'],
            },
        ],
        'jsx-a11y/img-has-alt': 0, // ложные срабатывания
        'jsx-a11y/aria-role': 1,
        'jsx-a11y/label-has-for': 0, // включить, был баг в конфиге
        'jsx-a11y/html-has-lang': 1,
        'jsx-a11y/no-static-element-interactions': 1,
        'jsx-a11y/anchor-has-content': 1,
        'jsx-a11y/no-noninteractive-element-interactions': 1,
        'jsx-a11y/alt-text': 1,
        'jsx-a11y/iframe-has-title': 1,
        'jsx-a11y/no-autofocus': 1,
        'jsx-a11y/media-has-caption': 1,
        'jsx-a11y/no-noninteractive-tabindex': 1,
        'jsx-a11y/no-noninteractive-element-to-interactive-role': 1,
        'jsx-a11y/interactive-supports-focus': 1,
        'jsx-a11y/anchor-is-valid': 0,
        'jsx-a11y/click-events-have-key-events': 1,
        'jsx-a11y/mouse-events-have-key-events': 1,
        'jsx-a11y/label-has-associated-control': [
            'error',
            {
                depth: 2,
            },
        ],
        'react/no-array-index-key': 1,
        'react/no-will-update-set-state': 1, // ВКЛЮЧИТЬ
        'react/require-default-props': 0,
        'react/style-prop-object': 0, // включить
        'react/prefer-stateless-function': [
            1,
            {
                ignorePureComponents: true,
            },
        ],
        'react/state-in-constructor': [1, 'never'],
        'react/no-this-in-sfc': 0, // Матчится на наши миксины
        'react/default-props-match-prop-types': 1,
        'react/no-direct-mutation-state': 2,
        'react/jsx-key': 2,
        'react/destructuring-assignment': 0,
        'react/no-find-dom-node': 1,
        'react/require-optimization': [0, { allowDecorators: ['pureRender', 'connect'] }], // Поставил 0, Не нужен без ts
        'react/jsx-filename-extension': 0,
        'react/jsx-no-target-blank': 2,
        'react/no-children-prop': 1, // как починят, включить
        'react/forbid-prop-types': [
            2,
            {
                forbid: ['any'],
            },
        ],
        'react/prop-types': 2,
        'react/display-name': [
            1,
            {
                ignoreTranspilerName: false,
            },
        ],
        'react/no-multi-comp': [
            1,
            {
                ignoreStateless: true,
            },
        ],
        'react/button-has-type': 0, // поставил 0, не видит type через переменную
        'react/no-unused-prop-types': 1,
        'react/no-deprecated': 1, // Много error, позже нужно будет включить до error
        'react/sort-comp': [
            2,
            {
                order: [
                    'static-methods',
                    'mixins',
                    'displayName',
                    'actions',
                    'contextTypes',
                    'childContextTypes',
                    'propTypes',
                    'defaultProps',
                    'pure',
                    'statics',
                    'state',
                    'constructor',
                    'getDefaultProps',
                    'getInitialState',
                    'getChildContext',
                    'getStoresState',
                    'componentWillMount',
                    'componentDidMount',
                    'componentWillReceiveProps',
                    'shouldComponentUpdate',
                    'componentWillUpdate',
                    'componentDidUpdate',
                    'componentWillUnmount',
                    '/^component.+$/',
                    '/^get.+$/',
                    '/^on.+$/',
                    '/^handle.+$/',
                    'everything-else',
                    '/^render.+$/',
                    'render',
                ],
            },
        ],
        'react/no-access-state-in-setstate': 0, // аффектит все setState функции
        'import/no-unresolved': [
            2,
            {
                commonjs: true,
                amd: false,
            },
        ],
        'import/no-commonjs': 1,
        'import/named': 2,
        'import/namespace': 2,
        'import/default': 2,
        'import/order': 0, // ломает код :/
        'import/prefer-default-export': 1,
        'import/newline-after-import': 0, // включить, как починят баг
        'import/no-webpack-loader-syntax': 1,
        'import/first': 1,
        'import/no-dynamic-require': 1,
        'import/no-deprecated': 1,
        'import/no-extraneous-dependencies': 0, // нужно настроить для нас
        'no-empty': [
            'error',
            {
                allowEmptyCatch: true,
            },
        ],
        yoda: ['error', 'never', { exceptRange: true }],
    },
};
