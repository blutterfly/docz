cd /home/larry/docz/project1

cat <<EOF > doczrc.js
// doczrc.js
export default {
  title: 'Project 1 Documentation',
  description: 'A personal knowledge management project',
  dest: '.docz',
  themeConfig: {
    initialColorMode: 'light',
  },
};
EOF

mkdir docs

cat <<EOF > docs/index.md
# Welcome to Project 1

This is your first Docz project in /home/larry/docz/project1.

## Getting Started
- Follow the setup instructions.
- Add more files as needed.
EOF
