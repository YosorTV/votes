const TYPES = ['feat', 'fix', 'refactor', 'hotfix', 'test'];

module.exports = {
  extends: [],
  rules: {
    'header-pattern': [2, 'always'],
    'header-max-length': [2, 'always', 100],
    'type-enum': [2, 'always', TYPES],
    'body-leading-blank': [0],
    'footer-leading-blank': [0],
    'header-case': [0],
    'scope-case': [0],
    'scope-empty': [0],
    'subject-case': [0],
    'subject-empty': [0],
    'subject-full-stop': [0],
    'type-case': [0],
    'type-empty': [0],
    'function-rules/type-min-length': [
      2,
      'always',
      (parsed) => {
        if (parsed?.type?.length < 2) {
          return [false, 'type must be bigger then 2 characters'];
        }

        return [true];
      },
    ],
    'function-rules/type-max-length': [
      2,
      'always',
      (parsed) => {
        if (parsed?.type?.length > 8) {
          return [false, 'type must not be longer then 8 characters'];
        }

        return [true];
      },
    ],
    'function-rules/subject-max-length': [
      2,
      'always',
      (parsed) => {
        if (parsed?.subject?.length > 80) {
          return [false, 'description must not be longer then 80 characters'];
        }

        return [true];
      },
    ],
    'function-rules/subject-case': [
      2,
      'always',
      (parsed) => {
        if (!/^[a-z,0-9 ]+/.test(parsed?.subject)) {
          return [false, 'description must start from lowercase letter and other letters should be lowercase'];
        }

        return [true];
      },
    ],
  },
  parserPreset: {
    parserOpts: {
      headerPattern: /^#(\d+) (\w+): (.+)$/,
      headerCorrespondence: ['ticket', 'type', 'subject'],
    },
  },
  plugins: [
    {
      rules: {
        'header-pattern': ({ header }) => {
          const pattern = /^#\d+ (feat|fix|refactor|hotfix): .+$/;
          const isValid = pattern.test(header);

          if (!isValid) {
            let errorMessage = 'Commit message must match format: #123 type: description';

            if (!header.startsWith('#')) {
              errorMessage = 'Commit message must start with # followed by ticket number';
            } else if (!/^#\d+/.test(header)) {
              errorMessage = 'After # symbol, there must be a ticket number (digits only)';
            } else if (!/^#\d+ \w+/.test(header)) {
              errorMessage = 'After ticket number, there must be a space followed by commit type';
            } else if (!TYPES.some((type) => header.includes(` ${type}: `))) {
              errorMessage = `Type must be one of: ${TYPES.join(', ')} followed by a colon and space`;
            } else if (!/^#\d+ \w+: .+$/.test(header)) {
              errorMessage = 'After type and colon, there must be a space followed by description';
            }

            return [false, errorMessage];
          }

          return [true];
        },
      },
    },
  ],
};
