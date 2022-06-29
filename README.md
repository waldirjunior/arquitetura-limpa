# Arquitetura Limpa

## Configurando Git

$ git config --global --edit // Editar as configurações globais do git
$ git config --global core.editor code // Abrir o arquivo global no VS Code.
Aliases do git:
[core]
	editor = code --wait
[alias]
    s = !git status -s
    c = !git add --all && git commit -m
    l = !git log --pretty=format:'%C(blue)%h%C(red)%d %C(white)%s - %C(cyan)%cn, %C(green)%cr'

## Configurando Ambiente (VS Code)

Usando o padrão conventional commits

https://www.conventionalcommits.org/en/v1.0.0/

https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines


build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
docs: Documentation only changes
feat: A new feature
fix: A bug fix
perf: A code change that improves performance
refactor: A code change that neither fixes a bug nor adds a feature
style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
test: Adding missing tests or correcting existing tests
chore: alterações dependencias

## Github
https://github.com/waldirjunior/arquitetura-limpa

git remote add github https://github.com/waldirjunior/arquitetura-limpa.git
git branch -M main
git push -u github main

